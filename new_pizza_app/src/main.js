import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'



//引入路由配置文件
import { routes } from './routes'


//引入store
import {store} from './store/store'



//使用路由
Vue.use(VueRouter)


//全局配置请求接口
axios.defaults.baseURL = 'https://wd0199191869leiftw.wilddogio.com/'

//配置Vue原型（在任何组件中都可以正常使用axios）

Vue.prototype.$axios = axios



//实例化路由
const router = new VueRouter({
  routes,
  mode: 'history'
})


//全局守卫

router.beforeEach( (to, from, next) => {
  //在没有登录的状态下只显示Login和Register的两个页面
  if((to.path == '/login' || to.path == '/register' ) || store.state.isLogin){
    next();
  }else{
    alert('没有登录！请先登录！！！')
    next('/login')
  }
})




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
