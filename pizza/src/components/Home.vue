<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>必败客Pizza！！！</h1>
        <h2>我们只做最贵、最难吃的Pizza！！！</h2>
        <button v-on:click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu(){
     
      this.$router.push({name: "loginLink"})
    }
  }
}
</script>


<style scoped>
#home{
  background: url('../../src/assets/pizza.jpg') no-repeat;
  height: 85vh;
  padding: 10%;
}
h1,h2{
  margin: 6%;
}
.background{
  background-color: #eee;
  opacity: 0.7;
  padding: 20px 0;
}
</style>


