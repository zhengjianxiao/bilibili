<template>
  <div class="editbaner">
    <span>{{left}}</span>
    <span><slot name="right"></slot></span>
  </div>
</template>

<script>
  export default {
    name : "editbanner",
    props : ["left"]
  }
</script>

<style lang="less" scoped>
  .editbaner{
    background-color: #fff;
    color: #111;
    padding: 2.778vw 4.167vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.4783vw solid #fafafa;
  }
</style>