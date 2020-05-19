<template>
  <div class="editbaner" @click="bannerclick">
    <span>{{left}}</span>
    <span><slot name="right"></slot></span>
  </div>
</template>

<script>
  export default {
    name : "editbanner",
    props : ["left"],
    methods : {
      bannerclick() {
        this.$emit("bannerclick")
      }
    }
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
    p{
      width: 72.222vw;
      word-wrap: break-word;
    }
    span:nth-child(1) {
      margin-right: 13.889vw;
    }
  }
</style>