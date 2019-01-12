<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" placeholder="请输入关键字" v-model="key">
    <div class="single-blog" v-for="item in filterBlogs">

      <router-link v-bind:to="'/blog/' + item.id">
      
      <h2 v-rainbow>{{ item.title | to-uppercase}}</h2>

      </router-link>

      <article>{{item.content | snippet}}</article>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      key: ""
    };
  },
  created() {

    // this.$http.get("https://wd7402399019lhwiwb.wilddogio.com/posts.json")

    axios.get("https://wd7402399019lhwiwb.wilddogio.com/posts.json")

    .then(res => {
      
      //=========返回一个Promise对象===============
      // return data.json();

      // console.log(data)
      return res.data

    })
    .then(data => {
      let blogsArray = [];
      for(let key in data){
        // console.log(key, '==============', data[key])

        data[key].id = key;

        //把请求过来的每一个对象push到数组中
        blogsArray.push(data[key])

      }


        this.blogs = blogsArray;   
        // console.log(this.blogs)


    })
  },
  computed: {
    filterBlogs() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.key);
      });
    }
  },
  filters: {
    //局部定义过滤器一
    // "to-uppercase": function (value){
    //   return value.toUpperCase();
    // }

    //局部定义过滤器二
    toUppercase(value) {
      return value.toUpperCase();
    },

    snippet(value) {
      return value.slice(0, 200) + "...";
    }
  },

  //局部定义指令
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
  background: turquoise;
  padding: 30px;
}

#show-blogs .single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
}
input {
  border: none;
  width: 95%;
  height: 40px;
  padding: 10px 20px;
  border-radius: 50px;
  outline: none;
  font-size: 16px;
  box-shadow: 2px 3px 10px #000; 
  
}

input::-webkit-input-placeholder {
  /* placeholder颜色  */
  color: #aab2bd;
  /* placeholder字体大小  */
  font-size: 16px;
}
</style>

