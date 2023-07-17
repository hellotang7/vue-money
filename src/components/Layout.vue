<template>
    <div class="nav-money">
        <div class="content" :class="classPrefix && `${classPrefix}-content`">
            <slot/>
        </div>
        <Nav_/>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['classPrefix']
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
