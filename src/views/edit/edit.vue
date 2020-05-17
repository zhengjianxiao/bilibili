<template>
  <div>
    <profilenav class="profilenav"/>
    <div class="upload">
      <van-uploader :after-read="afterRead" preview-size="100vw" class="uploadimg"/>
      <editbanner left="头像" class="totalimg">
      <img :src='detail.user_img' slot="right" alt="" v-if="detail.user_img">
      <img src="~@/assets/img/default_img.jpg" slot="right" alt="" v-else>
    </editbanner>
    </div>
    <editbanner left="昵称">
      <a href="javascript: ;" slot="right">{{detail.name}}</a>
    </editbanner>
    <editbanner left="账号">
      <a href="javascript: ;" slot="right">{{detail.username}}</a>
    </editbanner>
    <editbanner left="性别"></editbanner>
    <editbanner left="个签"></editbanner>
  </div>
</template>

<script>
import profilenav from "../profile/childcomps/profilenav"
import editbanner from "./childcomps/editbanner.vue"
  export default {
    name: "edit",
    components : {
      profilenav,
      editbanner
    },
    data() {
      return {
         detail :{}
      }
    },
    methods : {
      async getmessages() {
        const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
        this.detail = res.data[0]
      },
      async afterRead(file) {
        const formdata = new FormData();
        formdata.append("file",file.file)
        const res =  await this.$http.post('/upload' , formdata)
         this.detail.user_img = res.data.url
         this.UserUpdate()
      },
       async UserUpdate() {
           const res = await this.$http.post('/update/' + localStorage.getItem('id'),this.detail)
           console.log(res)
           if(res.data.code == 200){
               this.$msg.fail('修改成功')
           } 
       },
    },
    created() {
      this.getmessages()
    }
  }
</script>

<style lang="less" scoped>
  .profilenav{
    margin-bottom: 2.778vw;
  }
  .totalimg{
    img{
      height: 12.222vw;
      width: 12.222vw;
      border-radius: 50%;
    }
  }
  .upload{
    position: relative;
    overflow: hidden;
  }
  .uploadimg{
    position: absolute;
    left: 0;
    opacity: 0;
  }
</style>