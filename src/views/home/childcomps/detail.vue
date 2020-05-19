<template>
    <div class="detailitem" @click="pathPush">
      <div class="main">
        <img :src="detailitem.img" :alt="detailitem.name">
        <div class="bottom">
          <div class="icon-play2"><span class="video">1233</span></div>
          <div class="icon-file-text"> <span class="comment">{{!detailitem.commentlen ? 66 : detailitem.commentlen}}</span> </div>
        </div>
      </div>
      <p>{{detailitem.name}}</p>
    </div>
</template>

<script>
  export default {
    name : "detail",
    props : ["detailitem"],
     methods:{
        pathPush() {
            if(this.$route.path != `/article/${this.detailitem.id}`) {
                this.$router.push(`/article/${this.detailitem.id}`)
            }
        }
    }
  }
</script>

<style lang="less" scoped>
  .detailitem{
    width:47%;
    img{
      width: 100%;
      margin: 2.778vw 0;
    }
    p{
      font-size: 3.333vw;
      padding: 1.389vw;
    }
  }
  .main{
    position: relative;
  }
  .bottom{
    padding : 0 2.778vw;
    position: absolute;
    left: 0;
    bottom: 4.444vw;
    color: #fff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: linear-gradient(0deg,rgba(0,0,0,.85),transparent);
  }
</style>