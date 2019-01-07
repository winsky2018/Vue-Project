<template>
  <div id="app">

    <!-- <AddBlog/> -->
    <!-- <ShowBlogs/> -->
    <BlogHeader/>

    <router-view></router-view>

  </div>
</template>

<script>

import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import SingleBlog from './components/SingleBlog'

export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader,
    SingleBlog
  }
}
</script>

<style scoped>

</style>
