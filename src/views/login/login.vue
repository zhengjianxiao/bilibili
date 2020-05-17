<template>
  <div class="rejest">
    <navbar class="navbar">
      <div slot="center">登入bilibili</div>
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
          setTimeout(() => this.$router.push("/home") ,1000)
        }else if(res.data.code == 301) {
          this.$msg.fail("用户名不存在，请注册账号")
          this.$router.push("/rejest")
        }
       }else{
       this.$msg.fail("格式不正确，请重新输入！")
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
</style>