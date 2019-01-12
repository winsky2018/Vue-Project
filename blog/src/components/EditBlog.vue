<template>
  <div id="add-blog">
    <h1>编辑博客</h1>

    <form v-if="!this.submited">

      <label for="title">博客标题: </label>
      <input id="title" type="text" v-model="blog.title">

      <label for="content">博客内容: </label>
      <textarea id="content" v-model="blog.content" style="resize: none" rows="8"></textarea>

      <div id="checkBoxes">

        <label for="es6">ES6</label>
        <input v-model="blog.categories" type="checkbox" id="es6" value="ES6">

        <label for="h5">HTML5</label>
        <input v-model="blog.categories" type="checkbox" id="h5" value="HTML5">

        <label for="css3">CSS3</label>
        <input v-model="blog.categories" type="checkbox" id="css3" value="CSS3">

        <label for="NodeJS">NodeJS</label>
        <input v-model="blog.categories" type="checkbox" id="NodeJS" value="NodeJS">
      </div>

      <label for="author">作者: </label>
      <select id="author" v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>

      <button v-on:click.prevent="postBlog">编辑博客</button>

    </form>


    <div v-if="submited">
      <h2>博客编辑成功！！！</h2>
    </div>


    <div id="preview">
      <h2>博客总览</h2>
      <h3>博客标题: {{ blog.title }}</h3>
      <h3>博客内容: </h3>
      <p>{{ blog.content }}</p>
      <h3>博客分类: </h3>
      <ul>
        <li v-for="item in blog.categories">
          {{ item }}
        </li>
      </ul>
      <h3>作者：{{ blog.author }}</h3>
    </div>





  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data(){
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["WinSky", "AiDi", 'Sunny'],
      submited: false
    }
  },
  methods: {
    fetchData(){
      // console.log(this.id)

      this.$http.get('https://wd7402399019lhwiwb.wilddogio.com/posts/' + this.id + '.json')
      .then(res => {
        // console.log(res)
        this.blog = res.body
      })
      
    },
    postBlog(){
      this.$http.put('https://wd7402399019lhwiwb.wilddogio.com/posts/' + this.id + '.json', this.blog)
      .then(function (data){
        this.submited = true;
        // console.log(data.body)
        
      })

    }
  },
  created(){
    this.fetchData()
  }
}
</script>

<style scoped>


#add-blog *{
  box-sizing: border-box;

}

#add-blog{
  margin: 0px auto;
  padding: 30px;
  max-width: 800px;
  background: turquoise;
}

label{
  display: block;
  margin: 20px 0 10px;

}

input[type="text"], textarea, select{
  width: 100%;
  padding: 8px;
  display: block;
}

#checkBoxes{
  margin: 50px 0;
}

#checkBoxes label{
  display:  inline-block;
  margin-top: 0px;
}

#checkBoxes input{
  display: inline-block;
  margin-right: 10px;
}

button{
  display: block;
  margin: 20px 0;
  background: crimson;
  border: 0;
  padding: 14px;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;


}

</style>


