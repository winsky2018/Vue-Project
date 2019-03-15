<template>
  <div id="app">
    <!-- 头部信息 -->
   <app-header :poiInfo = "poiInfo"></app-header>

   <!-- 导航 -->
  <app-nav :commentNum="commentNum"></app-nav>

   <!-- 内容 -->
   <keep-alive>
      <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

export default {
  name: 'App',
  components: {
   "app-header": Header,
   "app-nav": Nav
  },
  data(){
    return {
      poiInfo: {},
      commentNum: 0
    }
  },
  created(){
    fetch("/api/goods")
    .then(res => {
      return res.json();
    })
    .then(res => {
      // console.log(res);
      if(res.code === 0){
        this.poiInfo = res.data.poi_info;
        // console.log(this.poiInfo);
      }
    })

    //请求ratings
    fetch("/api/ratings")
      .then(res => {
        return res.json()
      })
      .then((res => {
        if(res.code === 0){
          this.commentNum = res.data.comment_num
        }
      }))
  }
}
</script>

<style>

</style>
