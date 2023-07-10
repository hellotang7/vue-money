<template>
    <div class="tags">
        <ul>
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
            <li>
                <svg class="icon">
                    <use xlink:href="#add"/>
                </svg>
                <span>添加</span>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#add"/>
                </svg>
                <span>添加</span>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#add"/>
                </svg>
                <span>添加</span>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#add"/>
                </svg>
                <span>添加</span>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#add"/>
                </svg>
                <span>添加</span>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#add"/>
                </svg>
                <span>添加</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {};
</script>

<style lang="scss" scoped>
  .tags {
    flex-grow: 1;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    border: 1px solid red;

    ul {

      //border: 1px solid red;
      display: flex;
      text-align: center;
      white-space: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
    }

    li {
      margin: 0 12px;
      width: 90px;
      //height: 100px;
      padding: 12px 0;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      white-space: nowrap;

      .icon {
        background: #f5f5f5;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        margin-bottom: 5px;
      }


    }

  }

</style>
