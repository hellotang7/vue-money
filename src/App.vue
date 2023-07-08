<template>
  <div id="app">

    <router-view/>
      <div>
          <router-link to="/money" active-class="x">记账|</router-link>
          <router-link to="/labels" active-class="x">标签|</router-link>
          <router-link to="/statistics" active-class="x">统计</router-link>
      </div>
  </div>
</template>

<style lang="scss">
.x{
  color: #42b983;
}
</style>
