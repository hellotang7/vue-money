<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'" @click="selectedType('-')">支出</li>
            <li :class="type === '+' && 'selected'" @click="selectedType('+')">收入</li>
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
        type = '-'; //'-'表示支出，'+'表示收入
        @Prop(Number) xxx: number | undefined;

        mounted() {
            if (this.xxx === undefined) {
                console.log('没有xxx');
            } else {
                console.log('xxx为：' + this.xxx);
            }
        }

        selectedType(type: string) {
            if (type !== '-' && type !== '+') {
                throw new Error('type is error');
            }
            this.type = type;
        }


    }


</script>

<style lang="scss" scoped>
  .types {
    display: flex;
    background: #c4c4c4;
    font-size: 24px;
    text-align: center;


    li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>
