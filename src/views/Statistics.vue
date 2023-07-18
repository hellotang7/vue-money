<template>
    <div>
        <Layout_>
            <Tabs classPrefix="type" :dataSource="typeList" :value.sync="type"/>
            <Tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval"/>
            <div>
                {{ type }}
                <br>
                {{ interval }}
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

    @Component({
        components: {Tabs},

    })
    export default class Statistics extends Vue {
        type = '-';
        interval = 'day';
        typeList = typeList;
        intervalList = intervalList;
    }
</script>

<style lang="scss" scoped>


  ::v-deep
  .interval-tabs {
    height: 28px;

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
</style>
