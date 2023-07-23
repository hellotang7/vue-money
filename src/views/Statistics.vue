<template>
    <div>
        <Layout_>
            <Tally/>
            <Tabs :dataSource="typeList" :value.sync="type"/>
            <div class="xxx" v-for="(group, index) in groupedList" :key="index">
                <div class="zc">
                    <span v-show="type === '-'">共支出￥{{ group.total }}</span>
                    <span v-show="type === '+'">共收入￥{{ group.total }}</span>
                </div>
<!--{{group.name}}{{group.value}}-->
                {{echartsName}}{{echartsValue}}

                <div id="main" class="echarts" @click="x(group)"></div>

            </div>

        </Layout_>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import Vue from 'vue';
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

        echartsValue: any = [];
        echartsName: any = [];

        private mounted(): void {

            this.ech();
            // this.ech2();
        };

        private ech(): void {
            //@ts-ignore
            let myChart = echarts.init(document.getElementById('main'));



            myChart.setOption({
                title: {
                    text: '支出构成',
                    left: '4%',
                    textStyle: {
                        fontSize: 17,
                        fontWeight: '400',
                        color: '#111'
                    },
                },

                tooltip: {
                    trigger: 'item',

                },

                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        itemStyle: {
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        data: [
                            { value: 11, name: 11},

                        ],
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
            type Result = {  total?: number, name?: any,value?: any, items: RecordItem[] }[]
            const result: Result = [{ items: newList}];


            result.map(group => {


                const names = [];
                const x = group.items.map(i => i.tags);
                for (let i = 0; i < x.length; i++) {
                    const tags = (x[i][0]);
                    const name = Object.values(tags)[1];
                    names.push(name);
                }

                //获取到names和value
                this.echartsName = names
                this.echartsValue = group.items.map(i => i.amount);

                // group.name = names
                // group.value = group.items.map(i => i.amount);


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
