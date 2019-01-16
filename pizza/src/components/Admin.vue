<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- New pizza -->
      <new-pizza></new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 展示pizza -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.description">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button 
              class="btn btn-sm btn-outline-danger"
              @click="delPizza(item)"
              >&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import NewPizza from './NewPizza'
import axios from 'axios'

export default {
  data(){
    return {
      // getMenuItems: []
    }
  },
  components: {
    'newPizza': NewPizza
  },
  computed: {
    getMenuItems(){
      // return this.$store.state.menuItems

      //通过getters获取数据
      return this.$store.getters.getMenuItems
    }
  },
  created(){
    fetch("https://wd0199191869leiftw.wilddogio.com/menu.json")
    .then(res => {
      return res.json()
    })
    .then(data => {

      let menuArr = [];

      for(let key in data){

        // 将key的1到9位作为每个pizza对象的id
        data[key].id = key.slice()
        menuArr.push(data[key])

      }


      //将添加ID属性的新数据赋值给data中的getMenuItems
      // this.getMenuItems = menuArr

      //将请求得数据通过store.js中的mutations中的setMenuItems方法存储到state中
      this.$store.commit('setMenuItems', menuArr)
      
    })
    .catch(err => alert(err))
  },
  methods: {
    delPizza(item){

      // axios.delete('/menu/'+ item.id +'/.json')

      fetch(`https://wd0199191869leiftw.wilddogio.com/menu/${item.id}/.json`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      
      // .then(res => this.$router.push('/menu'))
      .then(res => this.$store.commit('removeMenuItems', item))
      .catch(err => alert(err))
    }
  }

}
</script>
