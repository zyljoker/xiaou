<template>
  <div class="mInfo">
      <!-- 二级路由出口 -->
    <router-view></router-view>

    <!-- 底部导航
    active-color 被选中的颜色  
      inactive-color 默认颜色
      route	是否开启路由模式
      replace	是否在跳转时替换当前页面历史	
      不加replace默认是push
     -->
    <van-tabbar route v-model="active" active-color="#F05E1C"
    inactive-color=''>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>

      <van-tabbar-item to="/sort"  icon="search">分类</van-tabbar-item>

      <van-tabbar-item icon="friends-o" to="/cart">购物车</van-tabbar-item>

      <van-tabbar-item icon="setting-o" to="/mine">个人中心</van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>

<style lang="" scoped>
.mInfo{
  margin-bottom: 60px !important;
}
</style>
