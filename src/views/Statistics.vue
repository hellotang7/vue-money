<template>
    <div>
        <Layout_>
            <Tabs classPrefix="type" :dataSource="typeList" :value.sync="type"/>
            <Tabs classPrefix="intercal" :dataSource="intervalList" :value.sync="interval"/>
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
        typeList=typeList
        intervalList= intervalList
    }
</script>

<style lang="scss" scoped>
  ::v-deep .type-tabs-item {
    border: 1px solid red;

    &.selected {
      background: #f3c50c;
      color: #fff;
    }
  }
</style>
