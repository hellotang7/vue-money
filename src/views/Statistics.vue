<template>
    <div>
        <Layout_>
            <!--            <Tabs classPrefix="type" :dataSource="typeList" :value.sync="type"/>-->
            <h1>明细</h1>
            <Tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval"/>
            <div class="main">
                <ol>
                    <li v-for="(group,index) in result" :key="index">
                        <h3 class="title">{{ group.title }}</h3>
                        <ol>
                            <li class="record" v-for="item in group.items" :key="item.id">
                                <div class="record-type" v-for="i in item.tags">
                                    <svg class="icon">
                                        <use :xlink:href="`#${i.img}`"/>
                                    </svg>
                                    <span>{{ i.name }} </span>
                                </div>
                                <div class="record-notes">{{item.notes }}</div>
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
<style lang="scss">
  .main {
    height: calc(100vh - 132px);
    //border: 1px solid red;

    flex-grow: 1;
    overflow: auto;
  }

  %item {
    padding: 0 16px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap
  }

  .title {
    background: #f4f4f4;
    @extend %item
  }

  .record {
    border-bottom: 1px solid #e2e2e2;
    height: 0;

    .record-type {

      display: flex;
      align-items: center;

      .icon {

        font-size: 32px;
        margin-right: 8px;
      }

      span {

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


</style>
<script lang="ts">
    import Tabs from '@/components/Tabs.vue';
    import {Component} from 'vue-property-decorator';
    import Vue from 'vue';
    import intervalList from '@/constants/intervalList';

    @Component({
        components: {Tabs},

    })
    export default class Statistics extends Vue {
        get recordList() {
            return this.$store.state.recordList;
        }

        get result() {
            const {recordList} = this;
            type HashTableValue = { title: string, items: RecordItem[] }

            const hashTable: { [key: string]: HashTableValue } = {};
            for (let i = 0; i < recordList.length; i++) {
                const [date, time] = recordList[i].createdAt!.split('T');
                // console.log(date);
                // console.log(time);
                hashTable[date] = hashTable[date] || {title: date, items: []};
                hashTable[date].items.push(recordList[i]);
                // console.log(hashTable)
            }
            return hashTable;
        }

        beforeCreate() {
            this.$store.commit('fetchRecord');
        }

        // type = '-';
        interval = 'day';
        // typeList = typeList;
        intervalList = intervalList;
    }
</script>

<style lang="scss" scoped>


  ::v-deep
  .interval-tabs {
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

  h1 {
    text-align: center;
  }

  .select {
    color: #f3c50c;
  }
</style>
