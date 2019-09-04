/**
 * vuex容器模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as localStorage from '@/utils/localStorage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 将来存储两个token，一个是token另一个是refresh-token
    // 项目运行，去本地存储获取登录状态
    user: localStorage.getItem('user')
  },
  mutations: {
    // 更改状态提交mutations
    setUser (state, user) {
      state.user = user
      // 把登陆状态存储到本地存储中
      localStorage.setItem('user', JSON.stringify(user))
    }
  },
  actions: {

  }
})
