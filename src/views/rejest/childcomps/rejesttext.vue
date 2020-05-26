<template>
  <div>
    <van-field :label="label" 
               :placeholder="placeholder" 
               :type="type" 
               :relu="relu"
               v-model="content"
               class="text"/>
  </div>
</template>

<script>
  export default {
    name : "rejesttext",
    props : ["label" , "placeholder" , "type" , "relu"],
    data() {
      return {
        content : ""
      }
    },
    methods: {
      handlerule() {
        const reu = new RegExp(this.relu)
        if(reu.test(this.content)) {
          this.$emit("inputchange" , this.content)
        }
      }
    },
    watch : {
      content() {
        this.handlerule()
      }
    }
  }
</script>

<style lang="less" scoped>
@media only screen and (min-width: 768px) {
  .text{
    width: 80vw;
    margin: 0 auto;
    height: 6.222vw;
    line-height: 4.111vw;
  }
}
</style>