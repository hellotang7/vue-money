<template>
    <nav>
        <router-link to="/money" class="item" active-class="x">
            <svg class="icon">
                <use xlink:href="#money"/>
            </svg>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="x">
            <svg class="icon">
                <use xlink:href="#label"/>
            </svg>
            标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="x">
            <svg class="icon">
                <use xlink:href="#statistics"/>
            </svg>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">

    let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
        requireContext.keys().forEach(requireContext);
    };
    try {
        importAll(require.context('../assets/icons', true, /\.svg$/));
    } catch (error) {
        console.log(error);
    }

    export default {
        name: ''
    };
</script>

<style lang="scss" scoped>


  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    //flex-direction: row;
    font-size: 12px;
    //border: 1px solid red;

    .item {
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2px 0;

      .icon{
        width: 32px;
        height: 32px;
      }
    }
    .x {
      color: #42b983;
    }
  }
</style>
