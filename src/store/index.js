import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginRole: 'Adam'
  },
  mutations: {
    SET_LOGINROLE (state, payload) {
      state.loginRole = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
