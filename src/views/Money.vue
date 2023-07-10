<template>
    <div>
        <Layout classPrefix="layout">


            <div class="numberPad">
                <div class="output">100</div>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button class="ok">OK</button>
                    <button class="zero">0</button>
                    <button>.</button>
                </div>
            </div>


            <div>
                <label class="notes">
                    <span class="name">备注：</span>
                    <input type="text" placeholder="在这里输入备注">
                </label>
            </div>


            <ul class="tags">
                <li>
                    <svg class="icon">
                        <use xlink:href="#shoping"/>
                    </svg>
                    <span>购物</span>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#eat"/>
                    </svg>
                    <span>餐饮</span>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#shoping"/>
                    </svg>
                    <span>购物</span>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#eat"/>
                    </svg>
                    <span>餐饮</span>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#eat"/>
                    </svg>
                    <span>餐饮</span>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#eat"/>
                    </svg>
                    <span>餐饮</span>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#home"/>
                    </svg>
                    <span>居住</span>
                </li>
                <li>
                    <svg class="icon">
                        <use xlink:href="#bus"/>
                    </svg>
                    <sapn>交通</sapn>
                </li>

                <li>
                    <svg class="icon">
                        <use xlink:href="#add"/>
                    </svg>
                    <span>添加</span>
                </li>
            </ul>


            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>

        </Layout>
    </div>
</template>

<script lang="ts">
    export default {
        name: ''
    };
</script>

<style lang="scss">
  .layout-content {
    //border: 3px solid red;
    display: flex;
    flex-direction: column-reverse;
  }

</style>

<style lang="scss" scoped>
  @import "~@/assets/style/TextColor.scss";

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

  .tags {
    //border: 1px solid red;
    overflow: auto;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 16px;


    li {
      //border: 1px solid red;
      width: 25%;
      height: 100px;
      padding: 12px 0;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .icon {
        background: #f5f5f5;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        margin-bottom: 5px;
      }

      span {

      }


    }


  }

  .notes {
    display: flex;
    align-items: center;
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;

    .name {
      padding-right: 16px;
    }

    input {
      height: 54px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }

  .numberPad {
    .output {
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 9px 16px;
      text-align: right;
      @extend %innerShow
    }

    .buttons {
      @extend %cleaFix;

      button {
        float: left;
        width: 25%;
        height: 64px;
        background: transparent;
        border: none;

        &.ok {
          float: right;
          height: 64*2px;
        }

        &.zero {
          width: 25*2%;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);
        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*6%);

        }

      }
    }
  }

</style>
