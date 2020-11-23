import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:()=>import('../pages/index.vue'),
      children:[{
        path:'/home',
        component:()=>import('../views/home.vue'),
        meta:{
          name:'首页'
        }
       
      },{
        path:'/sort',
        component:()=>import('../views/sort.vue'),
        meta:{
          name:'分类'
        }
      },{
        path:'/cart',
        component:()=>import('../views/cart.vue'),
        meta:{
          name:'购物车'
        }
      },{
        path:'/mine',
        component:()=>import('../views/mine.vue'),
        meta:{
          name:'个人中心'
        }
      },{
        path:'',
        redirect:'/home'
      }]
    },
    {
      path:'/login',
      component:()=>import('../pages/login.vue'),
      meta:{
        name:'登录'
      }
    },{
      path:'/register',
      component:()=>import('../pages/register.vue'),
      meta:{
        name:'注册'
      }
    },{
      path:'/goodslist',
      component:()=>import('../pages/goodsList.vue'),
      meta:{
        name:'商品样式'
      }
    },{
      path:'goodsDetail',
      component:()=>import('../pages/goodsDetail.vue'),
      meta:{
        name:'商品详细'
      }
    },{
      path:'*',
      redirect:'/index'
    }
  ]
})
