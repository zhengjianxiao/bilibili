<template>
  <div >
    <navbar class="navbar">
      <div slot="left"  @click="$route.path == ('/home') ? $route : $router.push('/home')">
        <img src="~@/assets/img/logo.png" alt="" class="navleft">
      </div>
      <div slot="center" class="navcenter">
        <van-icon name="search" />
        <input placeholder="请输入查询内容"/>
      </div>
      <div slot="right" class="navright">
        <div @click="$route.path == ('/profile') ? $route : $router.push('/profile')">
          <img :src="detail.user_img" alt="" v-if="detail.user_img">
          <img src="~@/assets/img/default_img.jpg" alt="" v-else>
        </div>
        <div class="download" @click="$route.path == ('/profile') ? $route : $router.push('/profile')">个人中心</div>
      </div>
    </navbar>
    <div class="navlast"></div>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar"
  export default {
    name: "profilenav",
    components : {
      navbar
    },
    // props : ["user_img"],
    data() {
      return {
        detail: {}
      }
    },
    methods : {
      async getprofiledata() {
        const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
        this.detail = res.data[0]
      },
    },
    created() {
      if(localStorage.getItem('id')){
        this.getprofiledata()
      } 
    }
  }
</script>

<style lang="less" scoped>
   .navbar{
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 14444441;
   }
   .navlast{
      height: 12.22vw;
      background-color: #fff;
   }
   .navleft{
    height: 12.222vw;
  }
  .navcenter{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    :nth-child(1){
      position: absolute;
      left: 6.944vw;
      font-size: 3.889vw;
    }
    input{
      border: none;
      width: 80%;
      height: 50%;
      padding: 1.389vw 6.388vw;
      font-size: 3.889vw;
      background-color: #f4f4f4;
      border-radius: 2.778vw;
    }
  }
  .navright{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12.222vw;
    img{
      height: 8.333vw;
      width: 8.333vw;
      border-radius: 50%;
      vertical-align: middle;
    }
    .download{
      height : 8.333vw;
      background-color: pink;
      color : white;
      font-size: 3.333vw;
      margin: 0;
      padding: 0 0.556vw;
      line-height: 8.333vw;
      border-radius: 1.389vw;
    }
  }
</style>