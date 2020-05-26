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
    height: 11.111vw;
    line-height: 11.111vw;
    font-size: 4.444vw;
    padding: 0 4.167vw;
    border-bottom: 0.278vw solid #ccc;
    div{
      padding: 0 2.778vw;
    }
  }
  .active{
    color: pink;
  }
  @media only screen and (min-width: 768px) {
    .middlenav{
    width: 80vw;
    margin: 0 auto;
    height: 4vw;
    line-height: 4vw;
    font-size: 1.4vw;
    padding: 0 2.167vw;
    border-bottom: 0.0278vw solid #ccc;
    div{
      padding: 0 0.778vw;
    }
  }
  }
</style>