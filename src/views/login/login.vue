<template>
  <div class="rejest">
    <navbar class="navbar">
      <div slot="center">登录bilibili</div>
      <div slot="right" @click="rightclick">用户注册</div>
    </navbar>
    <rejesttext label="账号" placeholder="请输入账号" :relu="relu" class="rejestname"
                @inputchange="content => modul.username = content"/>
    <rejesttext label="密码" placeholder="请输入密码" type="password"
                :relu="relu" 
                @inputchange="content => modul.password = content"/>
   <rejestbtn @btnclick="btnclick" name="登录"/>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/NavBar"
import rejesttext from "../rejest/childcomps/rejesttext.vue"
import rejestbtn from "../rejest/childcomps/rejestbtn"
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
       if(relg.test(this.modul.username) && relg.test(this.modul.password)) {
        const res = await this.$http.post("/login" , this.modul)
        if(res.data.code == 200) {
          this.$msg.fail(res.data.msg)
          localStorage.setItem("token" , res.data.token)
          localStorage.setItem("id" , res.data.id)
          setTimeout(() => this.$router.push("/profile") ,1000)
        }else if(res.data.code == 301 || res.data.code == 302) {
          this.$msg.fail(res.data.msg)
        }
       }else{
       this.$msg.fail(res.data.msg)
       }
     },
     rightclick() {
       this.$router.push("/rejest")
     }
    }
  }
</script>

<style  scoped>
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