<template>
  <div class="edit">
    <profilenav class="profilenav" :user_img="detail.user_img"/>
    <div class="upload">
      <van-uploader :after-read="afterRead" preview-size="100vw" class="uploadimg"/>
      <editbanner left="头像" class="totalimg">
      <img :src='detail.user_img' slot="right" alt="" v-if="detail.user_img">
      <img src="~@/assets/img/default_img.jpg" slot="right" alt="" v-else>
    </editbanner>
    </div>
    <editbanner left="昵称" @bannerclick="show = true">
      <a href="javascript: ;" slot="right">{{detail.name}}</a>
    </editbanner>
    <editbanner left="账号">
      <a href="javascript: ;" slot="right">{{detail.username}}</a>
    </editbanner>
    <editbanner left="性别" @bannerclick="gender = true">
      <a href="javascript: ;" slot="right">{{detail.gender == 1 ? "女" : "男"}}</a>
    </editbanner>
    <editbanner left="个签" @bannerclick="text = true" class="desc">
      <p slot="right" v-if="detail.user_desc">{{detail.user_desc}}</p>
      <p slot="right" v-else></p>
    </editbanner>
    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="showconfirm" @cancel="value = ''">
      <van-field v-model="value"  autofocus/>
    </van-dialog>
    <van-dialog v-model="text" title="个性签名" show-cancel-button @confirm="textconfirm" @cancel="textvalue = ''">
      <van-field v-model="textvalue" type="textarea"  autofocus/>
    </van-dialog>
    <van-action-sheet v-model="gender" :actions="actions" @select="onSelect" />
    <div class="editback" @click="$router.push('/profile')">返回个人中心</div>
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
         detail :{},
         show : false,
         value : "",
         text : false,
         textvalue : "",
         gender : false,
         actions: [
        { name: '男' , val: "0"},
        { name: '女' , val: "1" },
      ],
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
           if(res.data.code == 200){
               this.$msg.fail('修改成功')
           } 
       },
       showconfirm() {
         this.detail.name = this.value
         this.UserUpdate()
         this.value = ''
       },
       textconfirm() {
         this.detail.user_desc = this.textvalue
         this.UserUpdate()
         this.textvalue = ""
       },
       onSelect(data) {
         this.detail.gender = data.val
         this.UserUpdate()
         this.gender = false
       }
    },
    created() {
      if(localStorage.getItem("id")){
        this.getmessages()
      }else{
        this.$msg.fail("请先登录")
        this.$router.push('/login')
      }
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
  .editback{
    background-color: #fff;
    color: #999;
    font-size: 4.444vw;
    margin-top: 4.167vw;
    padding: 2.778vw;
    text-align: center;
    box-shadow: 0 0 0.278vw rgba(0 , 0 , 0 , 0.3);
  }
  @media only screen and (min-width: 768px) {
    .edit{
      width: 80vw;
      margin: 0 auto;
    }
    .profilenav{
    margin-bottom: 1.22vw;
  }
  .totalimg{
    img{
      height: 7.222vw;
      width: 7.222vw;
    }
  }
  .editback{
    font-size: 1.444vw;
    margin-top: 2.167vw;
  }
  }
</style>