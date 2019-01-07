<template>
    <nav id="blog-header">
      <ul>
        <li><router-link to="/" exact>博客</router-link></li>
        <li><router-link to="/add" exact>写博客</router-link></li>
      </ul>
    </nav>
</template>


<script>
export default {
  name: 'blog-header'
}
</script>


<style scoped>

nav{
  background-color: crimson;
  padding: 30px 30px;
  margin: 20px auto;
  max-width: 800px;

}

ul{
  list-style-type: none;
  text-align: center;
  margin: 0px;
}
ul>li{
  display: inline-block;
  margin: 0 10px;
  background-color: crimson;
}
ul>li>a{
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding: 12px;
  border-radius: 5px;
  font-weight: 700;
  text-shadow: 2px 2px 2px #000;
}

.router-link-active{
  background-color: rgba(255,255,255,0.6);
  color: #000;
  text-shadow: 2px 2px 2px #fff;
}

</style>

