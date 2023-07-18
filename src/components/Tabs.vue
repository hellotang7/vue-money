`
<template>
    <div class="tabs">
        <ul>
            <li v-for="item in dataSource" :key="item.value"
                @click="select(item)"      :class="liClass(item)">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';


    type DataSourceItem = { text: string, value: string }
    @Component

    export default class Tabs extends Vue {
        @Prop({required: true, type: Array}) dataSource!: DataSourceItem [];
        @Prop(String) readonly value!: string;
        @Prop(String) classPrefix?: string;

        liClass(item:DataSourceItem){
            return{
            [this.classPrefix + '-tabs-item']: this.classPrefix,
            selected: item.value === this.value
        };}

        select(item: DataSourceItem) {
            this.$emit('update:value', item.value);

        }


    }


</script>

<style lang="scss" scoped>
  .tabs {
    background: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;

    ul {
      border: 1px solid #f5f5f5;
      border-radius: 20px;
      height: 66%;
      width: 60%;
      display: flex;
      background: #fff;
      font-size: 16px;
      font-weight: 600;
      text-align: center;

      li {
        color: #f3c50c;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        //transition: all 1s;

        &.selected {
          background: #f3c50c;
          color: #fff;
        }

        &:nth-child(1) {
          border-radius: 20px;
        }

        &:nth-child(2) {
          border-radius: 20px;
        }


      }
    }
  }
</style>
`
