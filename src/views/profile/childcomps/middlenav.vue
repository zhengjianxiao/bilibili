<template>
  <div class="middlenav">
    <div>动态</div>
    <div>视频</div>
  </div>
</template>

<script>
  export default {
    name: "middlenav"
  }
</script>

<style lang="less" scoped>
  .middlenav{
    background-color: #fff;
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    padding: 0 15px;
    div{
      padding: 0 10px;
    }
  }
</style>