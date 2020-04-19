import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginRole: 'Adam',
    absen: [],
    loading: false,
    kelas: [],
    guru: '',
    student: [],
    room: '',
    mapel: ''
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
    },
    SET_LOADING (state, payload) {
      state.loading = payload
    },
    SET_KELAS (state, payload) {
      state.kelas = payload
    },
    SET_GURU (state, payload) {
      state.guru = payload
    },
    SET_STUDENT (state, payload) {
      state.student = payload
    },
    SET_ROOM (state, payload) {
      state.room = payload
    },
    SET_MAPEL (state, payload) {
      state.mapel = payload
    }
  },
  actions: {
    loginGuru ({ commit }, { email, password }) {
      commit('SET_LOADING', true)
      axios({
        url: 'http://localhost:3000/login',
        method: 'post',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('id', data.data.id)
          localStorage.setItem('teacher', data.data.name)
          commit('SET_GURU', data.data.name)
          localStorage.setItem('token', data.token)
          router.push('/teacher')
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          this.commit('SET_LOADING', false)
        })
    },
    Fetchclass ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/class',
        headers: { token: localStorage.getItem('token') }
      })
        .then(({ data }) => {
          // console.log(data.classes)
          commit('SET_KELAS', data.classes)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    fetchTeacher ({ commit }, payload) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/teachers/' + payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          commit('SET_MAPEL', data.teacher.Course)
        })
        .catch(err => {
          console.log(err, 'ini')
        })
    },
    fetchStudentInClass ({ commit }) {
      return axios({
        method: 'get',
        url: 'http://localhost:3000/students/' + localStorage.getItem('roomId'),
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          commit('SET_STUDENT', data.students)
        })
        .catch(err => {
          console.log(err)
        })
    },
    setNilai ({ commit }, { score, reportDate, StudentId, CourseId, type }) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/reports',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          score,
          reportDate,
          type,
          StudentId,
          CourseId
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    allKelas: state => {
      const data = [
        { kelas: [], key: 'IX' },
        { kelas: [], key: 'VI' },
        { kelas: [], key: 'VII' }
      ]
      state.kelas.forEach(el => {
        console.log(el.name)
        const temp = el.name.split('-')
        data.forEach(ek => {
          if (ek.key === temp[0]) {
            ek.kelas.push(temp[1])
          }
        })
      })
      return data
    },
    filterStudent: state => {
      const data = state.student.forEach((el) => {
        let resultNilai = 0
        let resultUas = 0
        let resultUts = 0
        let tamp = 0
        let counter = 0
        el.Reports.forEach((ek, i) => {
          if (ek.type === 'uas') {
            counter++
            tamp += ek.score
            resultUas = tamp / counter
          } else if (ek.type === 'uts') {
            counter++
            tamp += ek.score
            resultUts = tamp / counter
          } else {
            counter++
            tamp += ek.score
            resultNilai = tamp / counter
          }
        })
        tamp = 0
        counter = 0
        el.Nilai = resultNilai
        el.NilaiUas = resultUas
        el.NilaiUts = resultUts
      })
      console.log(data)
      return data
    }
  },
  modules: {
  }
})
