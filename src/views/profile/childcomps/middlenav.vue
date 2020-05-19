<template>
  <div class="middlenav">
    <div :class="{active: isactive}" @click="actclick">动态</div>
    <div :class="{active: !isactive}" @click="actclick">视频</div>
  </div>
</template>

<script>
  export default {
    name: "middlenav",
    data() {
      return {
        isactive: true
      }
    },
    methods: {
      actclick() {
        this.isactive = !this.isactive
        this.$emit("actclick")
      }
    }
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
    border-bottom: 1px solid #ccc;
    div{
      padding: 0 10px;
    }
  }
  .active{
    color: pink;
  }
</style>