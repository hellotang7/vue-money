<template>
    <div>
        <Layout classPrefix="layout">
            <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>

            <Notes @update:value="onUpdateNotes"/>

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

    type Record = {
        tags: string[]
        notes: string
        type: string
        amount: number
    }

    @Component({
        components: {Notes, NumberPad, Tags, Types}
    })
    export default class Money extends Vue {
        tags = [
            {img: 'shoping', name: '购物'},
            {img: 'eat', name: '餐饮'},
            {img: 'home', name: '居住'},
            {img: 'bus', name: '交通'},
        ];
        record: Record = {tags: [], notes: '', type: '-', amount: 0};
        recordList: Record[] = [];

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
            const record2 = JSON.parse(JSON.stringify(this.record))
            this.recordList.push(record2)
            console.log(this.recordList);
        }
        @Watch('recordList')
        watchRecordList(){
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList));

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
