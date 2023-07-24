<template>
    <div>
        <Layout_>
            <Tally/>
            <Tabs :dataSource="typeList" :value.sync="type"/>
            <div v-show="recordList.length" class="xxx" v-for="(group, index) in groupedList" :key="index">
                <div class="zc">
                    <span v-show="type === '-'">共支出￥{{ group.total }}</span>
                    <span v-show="type === '+'">共收入￥{{ group.total }}</span>
                </div>
                <div id="main" class="echarts" ></div>
            </div>
            <h1 v-show="!recordList.length">暂无相关统计</h1>
        </Layout_>
    </div>
</template>

<script lang="ts">
    import {Component, Watch} from 'vue-property-decorator';
    import Vue, {watch} from 'vue';
    import typeList from '@/constants/typeList';
    import Tabs from '@/components/Tabs.vue';
    import Tally from '@/components/Tally.vue';

    import * as echarts from 'echarts';
    import clone from '@/lib/clone';
    import dayjs from 'dayjs';


    @Component({
        components: {Tabs, Tally},

    })
    export default class Statistics extends Vue {
        typeList = typeList;
        type = '-';

        @Watch('type')
        watch() {
            this.ech();
        }

        private mounted(): void {

            this.ech();
        };


        private ech(): void {
            //@ts-ignore
            let myChart = echarts.init(window.document.getElementById('main'));

            const newList = clone(this.recordList).filter(r => r.type === this.type);
            const echart = newList.map(
                r=>({
                    value:r.amount,
                    name:r.tags[0].name
                })
            )

            const result = Object.values(echart.reduce((acc: { [key: string]: any }, cur: { name: string, value: number }) => {
                if (!acc[cur.name]) {
                    acc[cur.name] = { name: cur.name, value: 0 };
                }
                acc[cur.name].value += cur.value;
                return acc;
            }, {}));



            myChart.setOption!({
                title: {
                    text: '种类构成',
                    left: '4%',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: '400',
                        color: '#111'
                    },
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['30%', '50%'],
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        data: result,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        }


        get recordList() {
            return (this.$store.state as RootState).recordList;
        }


        get groupedList() {
            const {recordList} = this;
            if (recordList.length === 0) {
                return [];
            }

            const newList = clone(recordList).filter(r => r.type === this.type);
            type Result = {  total?: number, items: RecordItem[] }[]
            const result: Result = [{ items: newList}];


            result.map(group => {
                group.total = group.items.reduce((sum, item) => {
                    return sum + item.amount;
                }, 0);
            });

            return result;
        }

        beforeCreate() {
            this.$store.commit('fetchRecord');

        }

    }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-top: 200px;
    color: #999;

  }

  .zc {
    //background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 24px 0 ;
    //border: 1px solid red;

    span {
      height: 60px;
      display: block;
      text-align: center;
      line-height: 60px;
      width: 260px;
      font-weight: 700;
      border: 1px solid #d3d3d3;
      border-radius: 10px;
      box-shadow: 1px 2px 2px #d3d3d3;
      margin: 5px;
      color: #d3d3d3;
      font-size: 22px;
    }
  }

  .echarts {
    //border: 1px solid red;
    width: 100%;
    height: 400px;
  }

</style>
