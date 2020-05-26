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
    @media only screen and (min-width: 768px) {
      .rejestbtn{
  width : 80vw;
  margin: 0 auto;
  padding-top: 2.556vw;
}
  .btn{
    width : 80%;
    height : 6.111vw;
    line-height : 6.111vw;
  }
    }
</style>