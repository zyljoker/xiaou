<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar :title="$route.meta.name">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="blue">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img class="img" :src="$imgUrl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>

    <!-- 九宫格展示 -->
    <van-grid :border="false" :column-num="4">
      <van-grid-item text="限时抢购">
        <van-image class="aa" src="../static/img/indexicon1.jpg" />
        <span class="gridTitle">限时抢购</span>
      </van-grid-item>
      <van-grid-item text="积分商城">
        <van-image class="aa" src="../static/img/indexicon2.jpg" />
        <span class="gridTitle">积分商城</span>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <van-image class="aa" src="../static/img/indexicon3.jpg" />
        <span class="gridTitle">联系我们</span>
      </van-grid-item>
      <van-grid-item text="商品分类" to='/goodsList'>
        <van-image class="aa"  src="../static/img/indexicon4.jpg" />
        <span class="gridTitle">商城分类</span>
      </van-grid-item>
    </van-grid>

    <article class="limini">
      <section class="le">
        <div class="le_top">
          <h3><img src="../../static/img/timer.jpg" alt="" />限时秒杀</h3>
          <h2>每天零点场 好货秒不停</h2>
          <p class="clearfix">
            <i>02</i>
            <i>:</i>
            <i>16</i>
            <i>:</i>
            <i>45</i>

            <span>秒杀</span>
          </p>
        </div>
        <img class="le_bot" src="../../static/img/shop_5.jpg" alt="" />
      </section>

      <section class="ri">
        <div class="ri_top">
          <div class="ri_top_l">
            <h3>
              品牌上新<img
                src="../../static/img/cts-200820191915850.jpg"
                alt=""
              />
            </h3>

            <!-- <p>每日九点 抢大牌</p> -->
          </div>

          <div class="ri_top_r">
            <img src="../../static/img/shop_1.jpg" alt="" />
          </div>
        </div>

        <div class="ri_bot">
          <div class="ri_bot_l">
            <h3>每日十件</h3>
            <!-- <p>只为您选好货</p> -->
            <img src="../../static/img/indexship2.jpg" alt="" />
          </div>

          <div class="ri_bot_r">
            <h3>拼啊</h3>
            <!-- <p>超级好货拼团</p> -->
            <img src="../../static/img/shop_3.jpg" alt="" />
          </div>
        </div>
      </section>
    </article>

    <!-- tab标签页 -->

    <van-tabs type="card" class="one">
      <van-tab title="发现新品">
        <!-- 商品卡片 -->
        <van-card
        v-for="item in newList"
        :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="item.img? $imgUrl + item.img : 'https://img.yzcdn.cn/vant/ipad.jpeg'"
        />
      </van-tab>

      <van-tab title="热门推荐">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in hotsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="所有商品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in goodsList"
          :key="item.id"
          num="2"
          price="2.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
import { getBanner, getIndexGoods } from "../util/axios";
// 单独调用axios
import axios from "axios";
//调用请提示
import { Toast } from "vant";

export default {
  data() {
    return {
      bannerList: [],
      newList:[],
      hotsList:[],
      goodsList:[]
    };
  },
  mounted() {
    //组件加载获取轮播图接口
    this.getBannerList();
    //组件加载获取商品信息
    this.getIndexGoodsList()
  },
  methods: {
    //封装一个获取banner函数
    getBannerList() {
      getBanner().then(res => {
        console.log(res, "响应");
        if (res.code == 200) {
          this.bannerList = res.list;
        }
      });
    },


    //封装获取商品信息
    getIndexGoodsList(){
        getIndexGoods()
        .then(res=>{
            if(res.code ==200){
                this.newList = res.list[0].content;
                this.hotsList = res.list[1].content;
                this.goodsList = res.list[2].content
            }
            console.log(res,'商品信息');
        })
    }
  }
};
</script>

<style lang="" scoped>
.one{
    margin-top: .5rem;
}
.img {
  width: 100%;
  /* 200px */
  height: 4rem;
}
.gridTitle {
  font-size: 14px;
}
.aa {
  width: 0.9rem;
}
.limini {
  display: flex;
  justify-content: space-between;
  height: 3.77rem;
  padding-bottom: .5rem;
  margin-top: 30px;
  background-color: #fff;
}
.limini .le {
  flex-grow: 1;
  border-right: 1px solid #f0f0f0;
  padding-left: 0.13rem;
}
.limini .le .le_top {
  margin-top: 0.13rem;
  margin-left: 0.2rem;
  width: 2.84rem;
}
.limini .le .le_top h3 {
  font: 0.18rem/0.38rem "微软雅黑";
  color: #ec3963;
}
.limini .le .le_top h3 img {
  width: 0.33rem;
  height: 0.31rem;
}
.limini .le .le_top h2 {
  font: 0.13rem/0.29rem "微软雅黑";
  color: #817f80;
}
.limini .le .le_top p {
  margin-top: 0.05rem;
}
.limini .le .le_top p i:nth-child(even) {
  display: block;
  float: left;
  width: 0.17rem;
  height: 0.43rem;
  font: 0.13rem/0.43rem "微软雅黑";
  margin-left: 0.1rem;
}
.limini .le .le_top p i:nth-child(odd) {
  text-align: center;
  display: block;
  float: left;
  width: 0.43rem;
  height: 0.43rem;
  background-color: #000;
  border-radius: 0.07rem;
  font: 0.13rem/0.43rem "微软雅黑";
  color: #fff;
}
.limini .le .le_top p span {
  display: inline-block;
  width: 0.96rem;
  height: 0.4rem;
  background: url(../../static/img/bg.jpg) no-repeat top left;
  background-size: 0.96rem 0.4rem;
  font: 0.13rem/0.4rem "微软雅黑";
  text-align: center;
  margin-left: 0.05rem;
}
.limini .le .le_bot {
  width: 2.36rem;
  height: 2rem;
  margin-left: 0.4rem;
  margin-top: 0.27rem;
}
.limini .ri {
  flex-grow: 1;
}
.limini .ri .ri_top {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  background: url(../../static/img/brand.jpg) no-repeat 0.23rem 1rem;
}
.limini .ri .ri_top .ri_top_l {
  margin-top: 0.13rem;
  margin-left: 0.18rem;
}
.limini .ri .ri_top .ri_top_l h3 {
  font: 0.18rem/0.38rem "微软雅黑";
  color: #ec3963;
}
.limini .ri .ri_top .ri_top_l h3 img {
  margin-top: 0.06rem;
  width: 0.33rem;
  height: 0.25rem;
  margin-left: 0.05rem;
}
.limini .ri .ri_top .ri_top_l p {
  font: 0.13rem/0.29rem;
  color: #757575;
}
.limini .ri .ri_top .ri_top_r img {
  margin-top: 0.2rem;
  margin-bottom: 0.05rem;
  width: 1.28rem;
  height: 1.78rem;
  margin-right: 0.1rem;
}
.limini .ri .ri_bot {
  display: flex;
  justify-content: space-between;
}
.limini .ri .ri_bot .ri_bot_l {
  width: 1.8rem;
  border-right: 1px solid #f1f1f1;
  margin-left: 0.18rem;
  padding-top: 0.03rem;
}
.limini .ri .ri_bot .ri_bot_l h3 {
  display: block;
  width: 1.33rem;
  font: 0.18rem/0.38rem "微软雅黑";
  color: #ec3963;
}
.limini .ri .ri_bot .ri_bot_l p {
  width: 1.4rem;
  font: 0.13rem/0.29rem;
  color: #757575;
}
.limini .ri .ri_bot .ri_bot_l img {
  width: 0.64rem;
  height: 1.02rem;
  margin-left: 0.4rem;
  margin-bottom: 0.04rem;
}
.limini .ri .ri_bot .ri_bot_r {
  flex-grow: 1;
  margin-left: 0.18rem;
  padding-top: 0.05rem;
}
.limini .ri .ri_bot .ri_bot_r h3 {
  font: 0.18rem/0.38rem "微软雅黑";
  color: #ec3963;
}
.limini .ri .ri_bot .ri_bot_r p {
  font: 0.13rem/0.29rem;
  color: #757575;
}
.limini .ri .ri_bot .ri_bot_r img {
  width: 1.04rem;
  height: 0.88rem;
  margin-left: 0.25rem;
}
</style>
