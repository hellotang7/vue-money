<template>
    <div class="types">
        <ul>
            <li :class="value === '-' && 'selected'" @click="selectedType('-')">支出</li>
            <li :class="value === '+' && 'selected'" @click="selectedType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    //使用TS
    //1、引入Component, Prop
    //2、声明一个类（export default class xxx extends Vue），上面必须写 @Component
    //3、声明data和methods直接写
    //4、用props根据官方文档写（ @Prop(Number) xxx: number | undefined;）

    @Component

    export default class Types extends Vue {
        @Prop() value!: string ;

        selectedType(type: string) {
            if (type !== '-' && type !== '+') {
                throw new Error('type is error');
            }
            this.$emit('update:value',type)
        }


    }


</script>

<style lang="scss" scoped>
  .types {
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
          border-radius:20px;
        }


      }
    }
  }
</style>
