import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/common/home'],resolve),
      redirect:'/cont',
      children:[
        {
          path:'cont',
          name:'cont',
          meta:{
            auth:true,
          },
          component: resolve => require(['@/common/cont'],resolve),
        },
        {
          path: 'zhengwen',
          name: 'zhengwen',
          meta:{
            auth:true,
          },
          component: resolve => require(['@/components/zhengwen'],resolve)
        },
        {
          path: 'author',
          name: 'author',
          meta:{
            auth:true,
          },
          component: resolve => require(['@/common/author'],resolve)
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:resolve => require(['@/common/login'],resolve)
    }
  ]
})


router.beforeEach((to,from,next) => {
  if (to.meta.auth){    //判断路由是否需要登陆权限
    if (store.state.token){     //通过vuex state获取当前的token是否存在
      console.log(store.state.token);
      next();
    } else {
      next({
        path:'/login',
        query:{redirect:to.fullPath}  //将当前的地址作为参数，跳转到登陆页面
      })
    }
  } else {
    next();
  }
})

export default router
