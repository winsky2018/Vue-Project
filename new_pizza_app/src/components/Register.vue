<template>
  <div class="row mt-3">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <img src="../../src/assets/2.png" alt="" class="mx-auto d-block">
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
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input
                type="password"
                class="form-control"
                v-model="confirmPassword"
                required='required'
                >
            </div>
            <button class="btn btn-block btn-success" type="submit">注册</button>
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
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit(){
      if(this.password === this.confirmPassword && this.password.trim() !== ''){
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }

        axios.post('/users.json', formData)
              .then(res => {
                this.$router.push('/login')
              })
              .catch(err => {
                throw new Error('注册失败！！！')
              })
      }else{
        alert('两次密码需要一致，且不能为空！！！')
      }
    }
  }
}
</script>
