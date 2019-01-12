<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者:  {{blog.author}}</p>
    <ul>
      <li v-for="item in blog.categories">{{item}}</li>
    </ul>

    <hr>

    <button v-on:click="deleteSingleBlog">删除</button>

    <router-link :to="'/edit/' + this.id">编辑</router-link>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "single-blog",
  data(){
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created(){

    // this.$http.get('https://wd7402399019lhwiwb.wilddogio.com/posts/' + this.id + '.json')

    axios.get('https://wd7402399019lhwiwb.wilddogio.com/posts/' + this.id + '.json')
    .then(data => {
      this.blog = data.data
    })
    
  },
  methods: {
    deleteSingleBlog(){
      this.$http.delete('https://wd7402399019lhwiwb.wilddogio.com/posts/' + this.id + '.json')
      .then(res => {
        // console.log(res)
        this.$router.push({path: '/'})
      })
      
    }
  }

}
</script>


<style scoped>
#single-blog{
  max-width: 800px;
  padding: 30px;
  margin: 0 auto;
  background-color: #ddd;
  border: 1px dotted #aaa;
}
button{
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  background-color: crimson;
  cursor: pointer;
  margin-top: 40px;
}
a{
  display: inline-block;
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  background-color: deepskyblue;
  cursor: pointer;
  text-decoration: none;
  margin: 40px 0 0 40px;
}
</style>


