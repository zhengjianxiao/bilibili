<template>
  <div class="detail">
     <div class="detail-top">
       <div v-if="detail.user_img"><img :src="detail.user_img" alt=""></div>
       <div v-else><img src="~@/assets/img/default_img.jpg" alt=""></div>
       <div class="top-right">
         <div class="right-top">
           <span>
             <div>0</div>
             <div>粉丝</div>
           </span>
           <i></i>
           <span>
             <div>0</div>
             <div>关注</div>
           </span>
           <i></i>
           <span>
             <div>0</div>
             <div>获赞</div>
           </span>
         </div>
         <div class="edit" @click="editclick">编辑资料</div>
       </div>
     </div>
     <div class="detail-bottom">
       <div>
        <h2>{{detail.name}}</h2>
        <p v-if="detail.user_desc" :class="{'hidden' : hidden}">{{detail.user_desc}}</p>
        <p v-else>这个人很神秘，什么也没有写</p>
       </div>
       <div @click="collect" v-if="!hidden">收起</div>
       <div @click="collect" v-else>展开</div>
     </div>
  </div>
</template>

<script>
  export default {
    name: "profiledetail",
    props: ["detail"],
    data() {
      return {
        hidden: false
      }
    },
    methods: {
      editclick() {
        this.$emit("editclick")
      },
      collect() {
         return this.hidden = !this.hidden
      }
    }
  }
</script>

<style lang="less" scoped>
  .detail{
    background-color: #fff;
    padding: 0 2.778vw;
    border-bottom: 1px solid #ccc;
  }
  .detail-top{
    display: flex;
    justify-content: space-between;
    img{
      height: 23.611vw;
      width: 23.611vw;
      border-radius: 50%;
      margin-top: -2.778vw;
    
    }
  }
  .top-right{
    width: 61.111vw;
  }
  .right-top{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 3.889vw;
    margin: 2.778vw 0;
    i{
      width: 0.278vw;
      height: 5.556vw;
      background-color: #ccc;
    }
  }
  .edit{
    width: 100%;
    color: pink;
    height: 8.333vw;
    border-radius: 1.389vw;
    text-align: center;
    line-height: 8.333vw;
    font-size: 4.444vw;
    margin-bottom: 5.556vw;
    border: 0.278vw solid pink;
    box-shadow: 0 0 0.833vw rgba(0, 0 , 0, 0.3);
  }
  .detail-bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 1.389vw;
    h2{
      font-weight: 400;
    }
    p{
      color: #555;
      margin: 2.778vw 0;
      width: 69.444vw;
      word-wrap: break-word;
      word-break: normal;
    }
    div:nth-child(2){
      font-size: 4.444vw;
      color: rgb(43, 43, 224);
      position: absolute;
      right: 5.556vw;
      top: 72.222vw;
    }
  }
  .hidden{
    overflow: hidden;
    white-space: nowrap;
  }
</style>