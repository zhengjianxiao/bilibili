<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"/>
  </div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style lang="less">
  @import "./assets/css/base.css"; 
  body{
    box-sizing: border-box;
    background-color: #f4f4f4;
  }
  
</style>
