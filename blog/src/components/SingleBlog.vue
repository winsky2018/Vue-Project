<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者:  {{blog.author}}</p>
    <ul>
      <li v-for="item in blog.categories">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "single-blog",
  data(){
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created(){
    this.$http.get('https://wd7402399019lhwiwb.wilddogio.com/posts/' + this.id + '.json')
    .then(data => {
      console.log(data)
      return data.json()
    })
    .then(data => {
      this.blog = data;
    })
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
</style>


