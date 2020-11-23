<template>
 <div>
 <!-- 导航栏 -->
    <van-nav-bar
      @click-left="$router.back()"
      :title="$route.meta.name"
      left-text="返回"
      left-arrow
    >
    </van-nav-bar>
     <!-- 个人中心详情 -->
    <div class="userInfo" v-if="!userInfo">
      <!-- 头像 -->
      <van-image
        round
        width="2.4rem"
        height="2.4rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <!-- 姓名 -->
      <van-cell class="username">
        XXX
      </van-cell>
      <van-button @click="$router.push('/login')" type="info"
        >未登录，请登录</van-button
      >
    </div>

    <div class="userInfo" v-else>
        <!-- 头像 -->
      <van-image
        round
        width="2.4rem"
        height="2.4rem"
        src="http://www.qqtouxiang.com/d/file/tupian/mx/20171016/ji2su4xf50abf.jpg"
      />
        <!-- 姓名 -->
      <van-cell class="username">
        {{userInfo.nickname}}
      </van-cell>
      <van-button @click="quit" type="info"
        >退出登录</van-button
      >

       <div>
          <!-- <van-cell title="地址管理" icon="location-o" />
          <van-cell title="我的钱包" icon="balance-list-o" />
          <van-cell title="我的优惠券" icon="coupon-o" />
          <van-cell title="我的二维码" icon="aim" /> -->
           <div class="min">
            <div>
                <img src="../../static/img/iconMine_1.jpg" alt="">
                <p>全部订单</p>
            </div>
            <div>
                <img src="../../static/img/iconMine_2.jpg" alt="">
                <p>待付款</p>
            </div>
            <div>
                <img src="../../static/img/iconMine_3.jpg" alt="">
                <p>待收货</p>
            </div>
        </div>

        <ul>
            <li>
                <div class="li_l">
                    <img src="../../static/img/iconMine_4.jpg" alt="">
                    <p>地址管理</p>
                </div>

                <div class="li_r">
                    <img src="../../static/img/arrowRight.jpg" alt="">
                </div>
            </li>


            <li>
                <div class="li_l">
                    <img src="../../static/img/iconMine_5.jpg" alt="">
                    <p>我的钱包</p>
                </div>

                <div class="li_r">
                    <p>200余额</p>
                    <img src="../../static/img/arrowRight.jpg" alt="">
                </div>
            </li>


            <li>
                <div class="li_l">
                    <img src="../../static/img/iconMine_6.jpg" alt="">
                    <p>我的优惠券</p>
                </div>

                <div class="li_r">
                    <img src="../../static/img/arrowRight.jpg" alt="">
                </div>
            </li>



            <li>
                <div class="li_l">
                    <img src="../../static/img/iconMine_7.jpg" alt="">
                    <p>我的二维码</p>
                </div>

                <div class="li_r">
                    <img src="../../static/img/arrowRight.jpg" alt="">
                </div>
            </li>


            <li>
                <div class="li_l">
                    <img src="../../static/img/iconMine_8.jpg" alt="">
                    <p>我的小伙伴</p>
                </div>

                <div class="li_r">
                    <img src="../../static/img/arrowRight.jpg" alt="">
                </div>
            </li>


        </ul>

      </div>
    </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
         userInfo: ""
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : '';
  },
  methods: {
      //退出登录事件
      quit(){
          //删除存储
          sessionStorage.removeItem('userInfo')
          this.$router.push('/login')
      }
  },
};
</script>

<style lang="" scoped>
.userInfo {
  text-align: center;
}
.van-cell__value {
  text-align: center !important;
}
.van-cell{
    text-align: left;
}

</style>
