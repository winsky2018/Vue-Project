import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    //设置属性
    menuItems: {},
    currentUser: null,
    isLogin: false

  },
  getters: {
    //获取属性的状态
    
    getMenuItems: state => state.menuItems,

    currentUser: state => state.currentUser,

    isLogin: state => state.isLogin,

  },
  mutations: {
    //改变属性的状态

    //设置全部的pizza
    setMenuItems(state, data){
      state.menuItems = data
    },

    //将匹配到的pizza从menuItems中删除
    removeMenuItems(state, data){
      state.menuItems.forEach((item, index) => {
        if(item == data){
          state.menuItems.splice(index, 1)
        }
      });
    },

    //添加单个pizza到menuItems中
    pushToMenuItems(state, data){
      state.menuItems.push(data)
    },


    // 更改用户登录状态
    userStatus(state, data){
      state.isLogin = !state.isLogin
      state.currentUser = data
    },

    //重置用户状态
    resetUserStatus(state){
      state.isLogin = false
      state.currentUser = null
    }

  },
  actions: {
    //应用mutations
    setUser({commit}, data){
      commit('userStatus', data)
    },
    resetUser({commit}){
      commit('resetUserStatus')
    }
  }
})