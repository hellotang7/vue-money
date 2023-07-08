<template>
    <div class="nav-money">
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        name: ''
    };
</script>

<style lang="scss" scoped>
  .nav-money {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .content {
      flex-grow: 1;
      overflow: auto;
    }
  }
</style>
