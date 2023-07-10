<template>
    <div id="app">

        <router-view/>

    </div>
</template>
<script>


</script>
<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/TextColor.scss";

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    font-family: $fon-hei;
    font-size: 16px;
  }



  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
