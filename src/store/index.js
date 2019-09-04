/**
 * vuex容器模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 将来存储两个token，一个是token另一个是refresh-token
    user: null
  },
  mutations: {
    // 更改状态提交mutations
    setUser (state, user) {
      state.user = user
    }

  },
  actions: {

  }
})
