<template>
    <div>
        <Layout_ classPrefix="layout">
<!--            {{record}}-->
            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>

            <Notes @update:value="onUpdateNotes" fieldName="备注：" placeholder="请输入备注"/>

            <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>

            <Tabs  :dataSource="typeList" :value.sync="record.type"/>

        </Layout_>
    </div>
</template>

<script lang="ts">
    import Notes from '@/components/Money/Notes.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Tabs from '@/components/Tabs.vue';
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import typeList from '@/constants/typeList';


    @Component({
        components: {Notes, NumberPad, Tags, Tabs},

    })
    export default class Money extends Vue {
        // tags = window.tagList;
        // tags =   [
        //     {id:1,img: 'shoping', name: '购物'},
        //     {id:2,img: 'eat', name: '餐饮'},
        //     {id:3,img: 'home', name: '居住'},
        //     {id:4,img: 'bus', name: '交通'},
        // ];

        typeList=typeList;

        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
        recordList = window.recordList;

        get tags() {
            return this.$store.state.tagList;
        }
        create(){
            this.$store.commit('fetchRecord')
            this.$store.commit('fetchTag')


        }

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateNotes(value: string) {
            this.record.notes = value;
        }


        onUpdateAmount(value: string) {
            this.record.amount = parseFloat(value);
        }

        saveRecord() {
            this.$store.commit('createRecord',this.record)
        }



    };
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }

</style>

<style lang="scss" scoped>


</style>
