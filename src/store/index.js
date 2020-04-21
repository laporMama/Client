import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginRole: 'Admin',
    absen: [],
    loading: false,
    kelas: [],
    guru: '',
    student: [],
    room: '',
    mapel: '',
    allMapel: [],
    parent: [],
    parentStudentName: [],
    parentReport: [],
    errorMessages: [],
    error: false,
    isAuth: false,
    mapelId: 0
  },
  mutations: {
    SUCCESS_AUTH (state) {
      state.isAuth = true
    },
    LOGOUT (state) {
      state.isAuth = false
    },
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
    },
    SET_COURSE (state, payload) {
      state.allMapel = payload
    },
    SET_PARENT (state, payload) {
      state.parent = payload
    },
    SET_PARENTSTUDENT (state, payload) {
      state.parentStudentName = payload
    },
    SET_REPORTPARENT (state, payload) {
      state.parentReport = payload
    },
    SET_ERROR_STATUS (state, payload) {
      state.error = payload
    },
    SET_ERROR_MESSAGE (state, payload) {
      if (!Array.isArray(payload)) {
        state.errorMessages = [payload]
      } else {
        state.errorMessages = payload
      }
      state.error = true
    },
    SET_MAPELID (state, payload) {
      state.mapelId = payload
    }
  },
  actions: {
    loginGuru ({ commit }, { email, password }) {
      console.log(email)
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
          localStorage.setItem('id', data.data.id)
          localStorage.setItem('teacher', data.data.name)
          commit('SET_GURU', data.data.name)
          commit('SET_ERROR_STATUS', false)
          commit('SUCCESS_AUTH', data.token)
          localStorage.setItem('token', data.token)
          router.push('/teacher')
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    loginAdmin ({ commit }, { email, password }) {
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
          localStorage.setItem('token', data.token)
          commit('SET_ERROR_STATUS', false)
          commit('SUCCESS_AUTH', data.token)
          router.push('/admin')
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    loginParent ({ commit }, { email, password }) {
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
          localStorage.setItem('token', data.token)
          commit('SET_ERROR_STATUS', false)
          commit('SUCCESS_AUTH', data.token)
          router.push('/Mama')
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
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
          commit('SET_ERROR_STATUS', false)
          commit('SET_KELAS', data.data)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    fetchTeacher ({ commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/teachers/' + payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_ERROR_STATUS', false)
          commit('SET_MAPELID', data.teacher.CourseId)
          commit('SET_MAPEL', data.teacher.Course)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    fetchStudentInClass ({ commit }) {
      commit('SET_LOADING', true)
      return axios({
        method: 'get',
        url: 'http://localhost:3000/students/' + localStorage.getItem('idRoom'),
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_ERROR_STATUS', false)
          commit('SET_STUDENT', data.students)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    fetchReportByParent ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/reports/parent',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_REPORTPARENT', data.data)
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    fetchStudent ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        },
        url: 'http://localhost:3000/attendances/parent'
      })
        .then(({ data }) => {
          commit('SET_PARENTSTUDENT', data.data)
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    setNilai ({ commit }, { score, reportDate, StudentId, CourseId, type }) {
      commit('SET_LOADING', true)
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
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    updateNilai ({ commit }, { id, score }) {
      commit('SET_LOADING', true)
      axios({
        method: 'put',
        url: 'http://localhost:3000/reports/' + id,
        data: {
          score
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(data => {
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    registerMama ({ commit }, { name, email, password, phoneNumber, CourseId, role }) {
      commit('SET_LOADING', true)
      axios({
        method: 'post',
        url: 'http://localhost:3000/register',
        data: {
          name,
          password,
          email,
          phoneNumber,
          CourseId,
          role
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    getCourse ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/course',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_COURSE', data.courses)
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    getMama ({ commit }) {
      commit('SET_LOADING', true)
      axios({
        method: 'get',
        url: 'http://localhost:3000/parent',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PARENT', data.parents)
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    addStudent ({ commit }, { name, ClassId, ParentId }) {
      commit('SET_LOADING', true)
      axios({
        method: 'post',
        url: 'http://localhost:3000/students',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name,
          ClassId,
          ParentId
        }
      })
        .then(({ data }) => {
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    setMapel ({ commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'post',
        data: {
          name: payload
        },
        headers: {
          token: localStorage.getItem('token')
        },
        url: 'http://localhost:3000/course'
      })
        .then(({ data }) => {
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    setClass ({ commit }, payload) {
      commit('SET_LOADING', true)
      axios({
        method: 'post',
        data: {
          name: payload
        },
        headers: {
          token: localStorage.getItem('token')
        },
        url: 'http://localhost:3000/class'
      })
        .then(({ data }) => {
          commit('SET_ERROR_STATUS', false)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err.data.message)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
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
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      const data = state.student.forEach((el) => {
        el.Nilai = 0
        el.NilaiUas = 0
        el.NilaiUts = 0
        const tempNilai = []
        const tempNilaiUas = []
        const tempNilaiUts = []
        el.Reports.forEach((ek, i) => {
          console.log(state.mapelId)
          if (ek.type === 'nilai' && ek.CourseId === state.mapelId) {
            tempNilai.push(ek.score)
          } else if (ek.type === 'uts' && ek.CourseId === state.mapelId) {
            tempNilaiUts.push(ek.score)
          } else if (ek.type === 'uas' && ek.CourseId === state.mapelId) {
            tempNilaiUas.push(ek.score)
          }
        })
        if (tempNilai.length >= 1) {
          el.Nilai = tempNilai.reduce(reducer) / tempNilai.length
        }
        if (tempNilaiUas.length >= 1) {
          el.NilaiUas = tempNilaiUas.reduce(reducer) / tempNilaiUas.length
        }
        if (tempNilaiUts.length >= 1) {
          el.NilaiUts = tempNilaiUts.reduce(reducer) / tempNilaiUts.length
        }
      })
      return data
    },
    getMapel: state => {
      const tamp = []
      // state.allMapel.courses
      state.allMapel.forEach(el => {
        tamp.push({ value: el.id, text: el.name })
      })
      return tamp
    },
    getParent: state => {
      const tamp = []
      state.parent.forEach(el => {
        tamp.push({ value: el.id, text: el.name })
      })
      return tamp
    },
    getKelas: state => {
      const tamp = []
      state.kelas.forEach(el => {
        tamp.push({ value: el.id, text: el.name })
      })
      return tamp
    },
    getStudentByParent: state => {
      const tamp = []
      let hadir = 0
      let izin = 0
      let sakit = 0
      let aplha = 0
      state.parentStudentName.forEach(el => {
        let absen = []
        if (el.StudentAttendances.length === 0) {
          absen = [0, 0, 0, 0]
        }
        el.StudentAttendances.forEach(ek => {
          if (ek.status === 'hadir') {
            hadir++
          } else if (ek.status === 'izin') {
            izin++
          } else if (ek.status === 'sakit') {
            sakit++
          } else {
            aplha++
          }
          absen.push(Number(hadir), Number(aplha), Number(sakit), Number(izin))
        })
        tamp.push({ value: { name: el.name, class: el.Class.name, absen }, text: el.name })
      })
      return tamp
    },
    getReportByParent: (state) => (payload) => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      let tamp = []
      state.parentReport.forEach(el => {
        el.mapel = []
        state.allMapel.forEach(ek => {
          el.mapel.push({ name: ek.name, id: ek.id })
        })
      })
      state.parentReport.forEach(el => {
        el.mapel.forEach(ek => {
          ek.nilai = 0
          ek.uas = 0
          ek.uts = 0
          const tempNilai = []
          const tempNilaiUas = []
          const tempNilaiUts = []
          el.Reports.forEach(e => {
            if (e.CourseId === ek.id && e.type === 'nilai') {
              tempNilai.push(e.score)
            } else if (e.CourseId === ek.id && e.type === 'uas') {
              tempNilaiUas.push(e.score)
            } else if (e.CourseId === ek.id && e.type === 'uts') {
              tempNilaiUts.push(e.score)
            }
          })
          if (tempNilai.length >= 1) {
            console.log('masokk')
            ek.nilai = tempNilai.reduce(reducer) / tempNilai.length
          }
          if (tempNilaiUas.length >= 1) {
            ek.uas = tempNilaiUas.reduce(reducer) / tempNilaiUas.length
          }
          if (tempNilaiUts.length >= 1) {
            ek.uts = tempNilaiUts.reduce(reducer) / tempNilaiUts.length
          }
        })
      })
      tamp = state.parentReport.filter(el => el.name === payload)
      return tamp
    }
  },
  modules: {
  }
})
