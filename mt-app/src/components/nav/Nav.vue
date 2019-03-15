<template>
  <div class="nav">
    <router-link class="nav-item" to="/goods">点餐
    <i class="line"></i>
    </router-link>
    <router-link class="nav-item" to="/ratings">评价
    {{commentNum}}
    <i class="line"></i>
    </router-link>
    <router-link class="nav-item" to="/seller">商家
    <i class="line"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
      commentNum: {
          type: Number,
          default: 0
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #e4e4e4;

}
.nav .nav-item{
    flex: 1;
    font-size: 13px;
    text-decoration: none;
    color: #555;
    position: relative;
}
.nav .active{
    color: #FFBB22;
}
.nav .active .line{
    width: 24px;
    height: 2px;
    display: inline-block;
    background-color: #FFBB22;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
</style>
