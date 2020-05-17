<template>
  <div>
    <profilenav :userimg="detail.user_img"/>
    <div><img src="~@/assets/img/bannerTop_new.png" class="banner-top"/></div>
    <profiledetail  :detail="detail"
                    @editclick="editclick"/>
    <middlenav />
    <h2>profile</h2>
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
        detail :{}
      }
    },
    methods: {
      async getprofiledata() {
        const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
        this.detail = res.data[0]
      },
      editclick() {
        this.$router.push("/edit")
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
   }
</style>