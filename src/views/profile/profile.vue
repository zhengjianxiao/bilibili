<template>
  <div>
    <navbar>
      <div slot="left"><img src="~@/assets/img/logo.png" alt="" class="navleft"></div>
      <div slot="center">center</div>
      <div slot="right" class="navright">
        <img src="~@/assets/img/default_img.jpg" alt="" >
        <div>下载App</div>
      </div>
    </navbar>
    <h2>profile</h2>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar"
  export default {
    name : "profile",
    components : {
      navbar
    }
  }
</script>

<style lang="less" scoped>
  .navleft{
    height: 12.222vw;
  }
  .navright{
    display: flex;
    justify-self: center;
    align-content: center;
    
    img{
      height: 8.333vw;
      vertical-align: middle;
    }
    div{
      height : 30px;
      background-color: pink;
      color : white;
      font-size: 12px;
      margin: 0;
      padding: 0;
    }
  }
</style>