<template>
  <div class="rejest">
    <navbar class="navbar">
      <div slot="center">注册bilibili</div>
      <div slot="right" @click="rightclick">用户登录</div>
    </navbar>
    <rejesttext label="用户名" placeholder="请输入用户名" relu="^.{3,16}$" 
                class="rejestname"
                @inputchange="content => modul.name = content"/>
    <rejesttext label="账号" placeholder="请输入账号" :relu="relu"
                @inputchange="content => modul.username = content"/>
    <rejesttext label="密码" placeholder="请输入密码" type="password"
                :relu="relu" 
                @inputchange="content => modul.password = content"/>
   <rejestbtn @btnclick="btnclick" name="注册"/>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar"
import rejesttext from "./childcomps/rejesttext.vue"
import rejestbtn from "./childcomps/rejestbtn"
  export default {
    name : "rejest",
    components : {
      navbar,
      rejesttext,
      rejestbtn
    },
    data() {
      return {
        relu : "^.{6,16}$",
        modul : {
          name : "",
          username : "",
          password : ""
        }
      }
    },
    methods : {
    async btnclick() {
      const relgo = /^.{3,16}$/;
      const relg = /^.{6,16}$/;
       if(relgo.test(this.modul.name) && relg.test(this.modul.username) && relg.test(this.modul.password)) {
        const res = await this.$http.post("/register" , this.modul)
        this.$msg.fail(res.data.msg)
        if(res.data.code == 200) {
          localStorage.setItem("id" , res.data.id)
          localStorage.setItem("token" , res.data.objtoken)
          setTimeout(() => this.$router.push("/profile") ,1000)
        }
       }else{
       this.$msg.fail("格式不正确，请重新输入！")
       }
     },
     rightclick() {
       this.$router.push("/login")
     }
    }
  }
</script>

<style lang="less" scoped>
  .navbar{
    background-color: #fff;
  }
  .rejestname{
    margin: 4.167vw 0;
  }
    @media only screen and (min-width: 768px) {
      .navbar{
        width: 80vw;
        margin: 0 auto;
    }
  .rejestname{
    margin: 2.167vw 0;
  }
    }
</style>