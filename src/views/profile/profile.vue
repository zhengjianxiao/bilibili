<template>
  <div class="profile">
    <profilenav />
    <div class="banimg"><img src="~@/assets/img/bannerTop_new.png" class="banner-top"/></div>
    <profiledetail  :detail="detail"
                    @editclick="editclick"
                    />
    <middlenav @actclick="actclick"/>
    <div class="profilelast" style="padding-top:13.889vw" v-if="isactive">到达尽头啦~</div>
    <div class="profilelast" v-else>
      <img src="~@/assets/img/videobg.jpg" />
    </div>
  </div>
</template>

<script>
  import profilenav from "./childcomps/profilenav.vue"
  import profiledetail from "./childcomps/profiledetail.vue"
  import middlenav from "./childcomps/middlenav.vue"
  export default {
    name : "profile",
    components : {
      profilenav,
      profiledetail,
      middlenav
    },
    data() {
      return {
        detail :{},
        isactive: true
      }
    },
    methods: {
      async getprofiledata() {
        const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
        this.detail = res.data[0]
      },
      editclick() {
        this.$router.push("/edit")
      },
      actclick() {
        this.isactive = ! this.isactive
      }
    },
    created() {
      this.getprofiledata()
    }
  }
</script>

<style lang="less" scoped>
   .banner-top{
     width: 100%;
     height: 27.778vw;
     vertical-align: middle;
   }
   .profilelast{
     font-size: 5vw;
     text-align: center;
     img{
       width: 100%;
       height: 100%;
     }
   }
   @media only screen and (min-width: 768px) {
     .profile{
       background-color: #f4f4f4;
     }
     .banimg{
       margin: 0 auto;
       width: 80vw;
       img{
         height: 13vw;
       }
     }
  
   .profilelast{
     font-size: 2vw;
     text-align: center;
     img{
       width: 80vw;
       height: 40vw;
     }
   }
}
</style>