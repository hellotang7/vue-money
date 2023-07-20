<template>
    <div class="charge" @click="pushDetail" >
        <svg class="icon">
            <use xlink:href="#detail"></use>
        </svg>
        <span>记一笔</span>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tally extends Vue {
        // name!:string
        pushDetail() {
            this.$router.push('./money');
        }
    }
</script>

<style lang="scss" scoped>
  .charge {
    z-index: 10;
    //border: 1px solid red;
    position: fixed;
    right: 6%;
    bottom: 14%;
    border-radius: 20px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    background: #fff;
    color: #f3c50c;
    box-shadow: rgba(0, 0, 0, 0.23) 0px 0px 16px; //将h-shadow,v-shadow设为0px,实现四周阴影
    &:active {
      background: rgba(0, 0, 0, 0.23)
    }

    .icon {
      font-size: 26px;
      margin-right: 2px;
    }

    span {
      font-size: 13px;
    }

    //@extend %innerShow
  }
</style>
