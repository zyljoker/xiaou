<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      @click-left="$router.back()"
      :title="$route.meta.name"
      left-text="返回"
      left-arrow
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 列表渲染 -->

    <van-list>
      <van-card @click="goDetail(item.id)" v-for="item in goodsList" :key="item.id"
    desc='这个商品是爆款'
    :price='item.price.toFixed(2)'
       :title="item.goodsname"
       :thumb="item.img? $imgUrl + item.img : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605690430066&di=6b40da2d29ed89625f77cf2d525a943f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F11%2F20140911211243_3rT4u.jpeg'"
        />
    </van-list>
  </div>
</template>

<script>
import { getGoods } from "../util/axios";
export default {
  data() {
    return {
      goodsList: []
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      getGoods({
        fid: this.$route.query.id
      }).then(res => {
        console.log(res, "商品列表");
        if ((res.code = 200)) {
          this.goodsList = res.list;
        }
      });
    },

    goDetail(id) {
      this.$router.push({
        path: "/goodsDetail",
        query: {
          id
        }
      });
    }
  }
};
</script>

<style lang="" scoped>
</style>
