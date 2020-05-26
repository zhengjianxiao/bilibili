<template>
  <div class="home">
    <profilenav />
    <van-tabs v-model="active" swipeable animated offset-top="43.492">
      <van-tab :title="item.title" v-for="(item , index) in category" :key="index">
        <van-list
          v-model="item.loading"
          :immediate-check="false"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="detail">
            <detail
              v-for="(categoryitem,categoryindex) in item.list"
              :detailitem="categoryitem"
              :key="categoryindex"
            ></detail>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import profilenav from "../profile/childcomps/profilenav";
import detail from "./childcomps/detail";
export default {
  name: "home",
  data() {
    return {
      detail: {},
      active: 0,
      category: [],
      too: 1
    };
  },
  components: {
    profilenav,
    detail
  },
  methods: {
    async gethomedata() {
      const res = await this.$http.get("category");
      this.category = this.changeCategory(res.data);
    },
    changeCategory(data) {
      return data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = true;
        item.pagesize = 10;
        return item;
      });
    },
    categoryItem() {
      return this.category[this.active];
    },
    async selectArticle() {
      const categoryItem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryItem._id, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pagesize
        }
      });
      categoryItem.list.push(...res.data);
      categoryItem.loading = false;
      if (res.data.length < categoryItem.pagesize) {
        categoryItem.finished = true;
      }
    },
    onLoad() {
      const categoryItem = this.categoryItem();
      setTimeout(() => {
        categoryItem.page += 1;
        this.selectArticle();
      }, 1000);
    }
  },
  watch: {
    active() {
      const categoryitem = this.categoryItem();
      if (!categoryitem.list.length) {
        this.selectArticle();
      }
    }
  },
  created() {
    this.gethomedata();
  },
  updated() {
    const categoryitem = this.categoryItem();
    if (categoryitem.page == 0 && categoryitem._id == 9 && this.too == 1) {
      this.selectArticle();
      this.too = 0;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  background-color: #fff;
}
.detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media only screen and (min-width: 768px) {
  .home {
    width: 80vw;
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>