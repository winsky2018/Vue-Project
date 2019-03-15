<template>
  <div class="row mt-3">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <img src="../../src/assets/1.png" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input
                type="email"
                class="form-control"
                v-model="email"
                required='required'
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                required='required'
                >
            </div>
          
            <button class="btn btn-block btn-success" type="submit">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  //组件内的路由守卫
  beforeRouteEnter: (to, from, next) => {
    next(vm => vm.$store.dispatch('resetUser'))
  },
  methods: {
    onSubmit(){
      axios.get('/users.json')
            .then(res => {
              console.log(res.data)
              const data = res.data
              const users = []
              for(let i in data){
                users.push(data[i])
              }

              //遍历请求过来的users，和用户输入的邮箱、密码进行比对
              let currentUser = users.filter((user) => {
                return user.email === this.email && user.password === this.password;
              })

              console.log(currentUser)

              //判断currentUser的长度是否为0，并进行跳转
              if(currentUser !== null && currentUser.length > 0){

                //在登陆之前将用户名传递到vuex中
                this.$store.dispatch('setUser', currentUser[0].email)
                
                this.$router.push('/')
              }else{
                alert("账号或密码错误！！！")
              }

            })
            .catch(err => {
              alert('登录失败！！！')
            })
    }
  }
}
</script>

