<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name : "NavBar",
    methods : {
    }
  }
</script>

<style  scoped>
  .navbar{
    display: flex;
    height : 12.222vw;
    line-height: 12.222vw;
    background-color: #fff;
    text-align: center;
  }
  .left , .right {
    width : 25.001vw;
    font-size: 3.889vw;
    padding : 0 0.833vw;
  }
  .center{
    flex : 1;
    font-size: 5.556vw;
  }
</style>