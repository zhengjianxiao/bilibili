<template>
  <div v-if="detail">
    <profilenav />
    <div class="detailinfo">
      <video :src="detail.content" controls="controls"></video>
      <div class="detailinfoText">
              <div>
                  <span>{{detail.category.title}}</span>
                  <span>{{detail.name}}</span>
              </div>
              <div>
                  <span>{{detail.userinfo.name}}</span>
                  <span>146.4万次观看</span>
                  <span>5281弹幕</span>
                  <span>{{detail.date}}</span>
              </div>
              <div>
                  <p @click="collectionClick" :class="{activeColor:collectionActive}">
                      <span class="icon-star-full" ></span>
                      <span>收藏</span>
                  </p>
                  <p @click="subscriptClick" :class="{activeColor:subscritionActive}">
                      <span class="icon-bubble"></span>
                      <span>关注</span>
                  </p>
                  <p>
                      <span class="icon-redo2"></span>
                      <span>分享</span>
                  </p>
              </div>
         </div>
        </div>
        <div class="detail">
          <detail v-for="(item , index) in commend" :key="index" :detailitem="commend[index]" />
        </div>
        <commentTitle :dataLength="lens" @Postcomment="PostSuccess" ref="commentIpt"/>
        <comment @lengthselect="len => lens = len" ref="commentPulish"  @publishClick="PostChildClick" />
  </div>

</template>

<script>
import profilenav from "@/views/profile/childcomps/profilenav.vue"
import detail from "@/views/home/childcomps/detail.vue"
import commentTitle from "./childcomps/commentTitle"
import comment from "./childcomps/comment"
import commentItem from "./childcomps/commentItem"
  export default {
    name : "article",
    components : {
      profilenav,
      detail,
      commentTitle,
      comment,
      commentItem
    },
    data() {
      return {
        detail: null,
        commend: null,
        lens:null,
        Postcom:{
                comment_content:'',
                comment_date:'',
                parent_id:null,
                article_id:null
          },
        collectionActive:null,
        subscritionActive:null,
      }
    },
    methods : {
      async articleitemData() {
        const res =  await this.$http.get('/article/' + this.$route.params.id)
        this.detail = res.data[0]
        if(this.detail) {
                this.subscritionInit()
            }
      },
      async getcommends() {
        const res = await this.$http.get('/commend')
        this.commend = res.data
      },
      async PostSuccess(res) {
            const date = new Date()
            let m = date.getMonth() + 1
            let d = date.getDate()
            if(m < 10) {
                m = '0' + m
            }
            if(d < 10) {
                d = '0' + d
            }
            let str = `${m}-${d}`
            this.Postcom.comment_content = res
            this.Postcom.comment_date = str
            this.Postcom.article_id = this.$route.params.id
            const result = await this.$http.post('/comment_post/' + localStorage.getItem('id'),this.Postcom)
            this.$refs.commentPulish.commentData()
            this.Postcom.parent_id = null
            if(result.status == 200) {
                this.$msg.fail('评论发表成功')
            }
        },
        //聚焦输入框
        PostChildClick(id) {
            this.Postcom.parent_id = id
            this.$refs.commentIpt.focusIpt()
        },
        //收藏文章
        async collectionClick() {
           if(localStorage.getItem('token')){
               const res = await this.$http.post('/collection/' + localStorage.getItem('id'),{article_id:this.$route.params.id})
               if(res.data.msg == '收藏成功'){
                   this.collectionActive = true
               }else{
                   this.collectionActive = false
               }
                this.$msg.fail(res.data.msg)
           }
        },
        //进入页面获取是否收藏
        async collectionInit() {
            if(localStorage.getItem('token')){
                const res = await this.$http.get('/collection/' + localStorage.getItem('id'),{
                    params:{
                        article_id:this.$route.params.id
                    }
                })
            this.collectionActive = res.data.success
            }
        },
        //点击关注发帖用户
        async subscriptClick() {
           if(localStorage.getItem('token')){
               const res = await this.$http.post('/sub_scription/' + localStorage.getItem('id'),{sub_id:this.detail.userid})
               if(res.data.msg == '关注成功'){
                   this.subscritionActive = true
               }else{
                   this.subscritionActive = false
               }
               this.$msg.fail(res.data.msg)
               
           }
        },
        //进入页面获取是否收藏
        async subscritionInit() {
            if(localStorage.getItem('token')){
                const res = await this.$http.get('/sub_scription/' + localStorage.getItem('id'),{
                    params:{
                        sub_id:this.detail.userid
                    }
                })
            this.subscritionActive = res.data.success
            }
        }
    },
    created() {
      this.articleitemData()
      this.getcommends()
      this.collectionInit()
    },
    watch: {
      $route() {
        this.articleitemData()
        this.getcommends()
        this.collectionInit()
      }
    }
  }
</script>

<style lang="less" scoped>
  .detailinfo{
    width: 100%;
    video{
      width: 100%;
    }
  }
  .detailinfoText{
    padding: 4.167vw;
    div:nth-child(1) {
        span:nth-child(1) {
            padding:0 2.778vw;
            color: #fb7299;
            background-color: #f4f4f4;
            border-radius: 2.778vw;
        }
    }
    div:nth-child(2) {
        padding: 2.778vw 2.778vw;
        span{
            color: #aaa;
            font-size: 3.333vw;
            margin-right: 2.778vw;
        }
        span:nth-child(1) {
            color: black;
            font-size: 4vw;
            padding-right:2.778vw;
        }
    }
    div:nth-child(3) {
        padding: 0 2.778vw;
        display: flex;
        
        p{
            margin-right: 10px;
            display: flex;
            align-items: center;
            color: #757575;
            span:nth-child(1) {
                margin-right: 3px;
                font-size: 21px;
            }
            span:nth-child(2) {
                font-size: 13px;
            }
        }
        .activeColor{
            color: #fb7299;
        }
    }
    
}
.detail{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>