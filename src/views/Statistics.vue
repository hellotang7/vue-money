<template>
    <div>
        <Layout_>
            <p>记账本</p>
            <!--                        <Tabs classPrefix="interval" :dataSource="typeList" :value.sync="type"/>-->

            <div class="main">
                <ol>
                    <li class="main-li" v-for="(group,index) in groupedList" :key="index">
                        <h3 class="title">{{ beautify(group.title) }}
                            <div>
                                <span>出</span>
                                <span>{{ group.xtotal }}</span>
                                <span>入</span>
                                <span>{{ group.ytotal }}</span>
                            </div>
                        </h3>
                        <!--                        {{group.items}}-->
                        <ol>
                            <li class="record" v-for="item in group.items" :key="item.id">
                                <div class="record-type" v-for="i in item.tags">
                                    <svg class="icon">
                                        <use :xlink:href="`#${i.img}`"/>
                                    </svg>
                                    <span>{{ i.name }} </span>
                                </div>
                                <div class="record-notes">{{ item.notes }}</div>
                                <div class="record-amount" :class="{select:item.type==='+'}">
                                    {{ item.type }}
                                    {{ item.amount }}
                                </div>
                            </li>
                        </ol>
                    </li>

                </ol>
            </div>

        </Layout_>
    </div>
</template>

<script lang="ts">
    import Tabs from '@/components/Tabs.vue';
    import {Component} from 'vue-property-decorator';
    import Vue from 'vue';
    import intervalList from '@/constants/intervalList';
    import typeList from '@/constants/typeList';
    import dayjs from 'dayjs';
    import clone from '@/lib/clone';

    require('dayjs/locale/zh-cn');

    @Component({
        components: {Tabs},

    })
    export default class Statistics extends Vue {
        beautify(string: string) {
            const day = dayjs(string);
            dayjs.locale('zh-cn'); // 全局使用简体中文
            const now = dayjs();
            if (day.isSame(now, 'year')) {
                return day.format('MM月DD日dddd'); // 使用dddd表示星期几
            } else {
                return day.format('YYYY年MM月DD日dddd'); // 使用dddd表示星期几

            }
        }

        get recordList() {
            return (this.$store.state as RootState).recordList;
        }

        get groupedList() {
            const {recordList} = this;
            if (recordList.length === 0) {
                return [];
            }

            const newList = clone(recordList).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
            type Result = { title: string, xtotal?: number, ytotal?: number, items: RecordItem[] }[]
            const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
            for (let i = 1; i < newList.length; i++) {
                const current = newList[i];
                const last = result[result.length - 1];
                if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
                    last.items.push(current);
                } else {
                    result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
                }
            }



            result.map(group => {
                const total1 = newList.filter(r => r.type === '-');
                group.xtotal = total1.reduce((sum, item) => {
                    return sum + item.amount;
                }, 0);
            });
            result.map(group => {
                const total2 = newList.filter(r => r.type === '+');
                group.ytotal = total2.reduce((sum, item) => {
                    return sum + item.amount;
                }, 0);
            });


            return result;
        }

        beforeCreate() {
            this.$store.commit('fetchRecord');
        }

        // type = '-';
        // typeList = typeList;
        // interval = 'day';
        // intervalList = intervalList;
    }
</script>

<style lang="scss" scoped>

  ::v-deep .interval-tabs {
    height: 30px;

    .interval-tabs-ul {
      width: 100%;
      height: 100%;

      .interval-tabs-li {
        border-radius: 0;
        margin-right: 1px;
        border-right: 1px solid #e3e3e3;

        &:nth-child(3) {
          border-right: none;
        }
      }
    }
  }

  %item {
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap
  }

  p {
    background: #f8f8f8;
    min-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
  }

  .main {
    height: calc(100vh - 120px);
    flex-grow: 1;
    overflow: auto;

    .main-li {
      //margin: 5px 0;


      .title {
        background: #f3f3f3;
        font-size: 16px;
        min-height: 20px;
        padding: 3px 16px;

          span {
            font-size: 14px;
            &:nth-child(1),&:nth-child(3) {
              //border: 1px solid red;
              color: #999;
              font-size: 12px;
              background: #e3e3e3;
              margin-left: 14px;

            }

            &:nth-child(2),&:nth-child(4) {
              margin-left: 4px;
            }




          }


        @extend %item

      }

      .record {
        min-height: 50px;

        height: 0;
        border-bottom: 1px solid #e2e2e2;

        .record-type {

          display: flex;
          align-items: center;

          .icon {

            font-size: 32px;
            margin-right: 8px;
          }

          span {
            font-size: 15px;
          }
        }

        .record-notes {
          color: #999;
          margin-right: auto;
          margin-left: 16px;
          font-size: 12px;
          overflow: auto;

        }

        .record-amount {
          margin-left: 16px;
        }


        @extend %item
      }


    }

  }

  .select {
    color: #f3c50c;
  }


</style>
