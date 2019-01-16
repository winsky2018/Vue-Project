<template>
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.description">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options">
            <td>{{option.size}}寸</td>
            <td>{{option.price}}RMB</td>
            <td><button
                 class="btn btn-sm btn-outline-success"
                 @click="addToBasket(item, option)"
                 >+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">
        <table class="table">
        <thead class="thead-default">
          <tr>
            <td>数量</td>
            <td>品种</td>
            <td>价格</td>
          </tr>
        </thead>
        <tbody v-for="item in baskets" :key="item.description">
          <tr>
            <td>
              <button
               class="btn btn-sm btn-outline-success"
               @click="decreaseQuantity(item)"
               >-</button>
              <span>{{item.quantity}}</span>
              <button 
              class="btn btn-sm btn-outline-success"
              @click="increaseQuantity(item)"
              >+</button>
            </td>
            <td>{{item.name}} - {{item.size}}寸</td>
            <td>{{item.price * item.quantity}}</td>
          </tr>
        </tbody>
        </table>
        <p>总价：{{total }} RMB</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div class="text-center" v-else>
        <h5 style="padding: 20px 0">{{emptyBasket}}</h5>
        <img width="300" src="../../src/assets/3.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>

// import axios from 'axios'

export default {
  data(){
    return {
      baskets: [],
      emptyBasket: '您的购物车空空如也！！！',
      // getMenuItems: {}
    }
  },
  computed: {
    //获取vuex中的数据
    getMenuItems(){
      // return this.$store.state.menuItems

      //通过getters获取数据
      return this.$store.getters.getMenuItems
      
    },
    
    //计算总价
    total(){
      let totalCost = 0;
      for(let index in this.baskets){
        let individualItem = this.baskets[index]
        totalCost += individualItem.quantity * individualItem.price
      }
      return totalCost
    }
  },
  created(){
    this.$axios.get('/menu.json')
    .then(res => {

      //将请求得数据存储到data中的getMenuItems对象中
      // this.getMenuItems = res.data

      //将请求得数据通过store.js中的mutations中的setMenuItems方法存储到state中
      this.$store.commit('setMenuItems', res.data)

    })
  },
  methods: {
    addToBasket(item, option){

      let basket = {
        name: item.name,
        size: option.size,
        price: option.price,
        quantity: 1
      }

      if(this.baskets.length > 0){
        //进行过滤



        //判断baskets中是否有该点击的pizza
        let result = this.baskets.filter( (basket) =>{
          return (basket.name === item.name && basket.size === option.size)
        } )

        //如果baskets中由该点击的pizza，将其数量+1，如果没有将其push到baskets中
        if(result !== null && result.length > 0){
          result[0].quantity ++
        }else{
          this.baskets.push(basket)
        }


      }else{
        this.baskets.push(basket)
      }
      
      
    },
    increaseQuantity(item){
      item.quantity ++;
    },
    decreaseQuantity(item){
      item.quantity --;
      if(item.quantity <= 0){
        this.removePizza(item)
      }
    },
    //当购物车的pizza数量为0时，将该pizza从baskets中删除
    removePizza(item){
      this.baskets.splice(this.baskets.indexOf(item), 1)
    }
  }
}
</script>

