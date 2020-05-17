<template>
  <div id="app">
    <router-view/>
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
