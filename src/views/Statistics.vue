<template>
    <div>
        <Layout_>

            <Tabs  :dataSource="typeList" :value.sync="type"/>

        </Layout_>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import Vue from 'vue';
    import typeList from '@/constants/typeList';
    import Tabs from '@/components/Tabs.vue';




    @Component({
        components: {Tabs},

    })
    export default class Statistics extends Vue {
        typeList=typeList;
        type = '-';



    }
</script>

