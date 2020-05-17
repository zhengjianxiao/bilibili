<template>
  <div class="rejestbtn">
    <div class="btn" @click="btnclick">{{name}}</div>
  </div>
</template>

<script>
  export default {
    name : "rejestbyn",
    props : ["name"],
    methods : {
      btnclick() {
        this.$emit("btnclick")
      }
    }
  }
</script>

<style lang="less" scoped>
.rejestbtn{
  display: flex;
  justify-content: center;
  width : 100%;
  padding-top: 5.556vw;
}
  .btn{
    background-color: pink;
    color : #fff;
    width : 90%;
    height : 11.111vw;
    border-radius: 5.556vw;
    line-height : 11.111vw;
    text-align : center;
  }
</style>