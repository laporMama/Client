import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginRole: 'Adam',
    absen: []
  },
  mutations: {
    SET_LOGINROLE (state, payload) {
      state.loginRole = payload
    },
    SET_ABSENSI (state, payload) {
      const test = state.absen.filter((el, i) => el.id === payload.id)
      if (state.absen.length === 0) {
        state.absen.push(payload)
      } else if (test.length !== 0) {
        state.absen.splice(test, 1)
      } else {
        state.absen.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
