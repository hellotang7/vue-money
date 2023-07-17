<template>
    <div>
        <Layout classPrefix="layout">
<!--            {{record}}-->
            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>

            <Notes @update:value="onUpdateNotes" fieldName="备注：" placeholder="请输入备注"/>

            <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>

            <Types :value.sync="record.type"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Notes from '@/components/Money/Notes.vue';
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue';
    import Types from '@/components/Money/Types.vue';
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import recordListModel from '@/models/recordListModel';

    const recordList = recordListModel.fetch();

    @Component({
        components: {Notes, NumberPad, Tags, Types}
    })
    export default class Money extends Vue {
        tags = window.tagList;
        // tags =   [
        //     {id:1,img: 'shoping', name: '购物'},
        //     {id:2,img: 'eat', name: '餐饮'},
        //     {id:3,img: 'home', name: '居住'},
        //     {id:4,img: 'bus', name: '交通'},
        // ];


        record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
        recordList: RecordItem[] = recordList;

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
            recordListModel.create(this.record)
        }

        @Watch('recordList')
        watchRecordList() {
            recordListModel.save();
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
