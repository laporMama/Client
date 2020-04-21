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
    mapelId: 0
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
    loginAdmin ({ commit }, { email, password }) {
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
          router.push('/admin')
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginParent ({ commit }, { email, password }) {
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
          router.push('/Mama')
        })
        .catch(err => {
          console.log(err)
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
          console.log(data, 'ini class')
          commit('SET_KELAS', data.data)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(_ => {
          commit('SET_LOADING', false)
        })
    },
    fetchTeacher ({ commit }, payload) {
      console.log(payload, 'ini teacher')
      axios({
        method: 'get',
        url: 'http://localhost:3000/teachers/' + payload,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data, 'oakwdokwda')
          commit('SET_MAPELID', data.teacher.CourseId)
          commit('SET_MAPEL', data.teacher.Course)
        })
        .catch(err => {
          console.log(err, 'ini')
        })
    },
    fetchStudentInClass ({ commit }) {
      return axios({
        method: 'get',
        url: 'http://localhost:3000/students/' + localStorage.getItem('idRoom'),
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data.students, 'ini data student')
          commit('SET_STUDENT', data.students)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchReportByParent ({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/reports/parent',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_REPORTPARENT', data.data)
        })
    },
    fetchStudent ({ commit }) {
      axios({
        method: 'get',
        headers: {
          token: localStorage.getItem('token')
        },
        url: 'http://localhost:3000/attendances/parent'
      })
        .then(({ data }) => {
          commit('SET_PARENTSTUDENT', data.data)
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
    },
    updateNilai ({ commit }, { id, score }) {
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
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    registerMama ({ commit }, { name, email, password, phoneNumber, CourseId, role }) {
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
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCourse ({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/course',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_COURSE', data.courses)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getMama ({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/parent',
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          commit('SET_PARENT', data.parents)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addStudent ({ commit }, { name, ClassId, ParentId }) {
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
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    setMapel ({ commit }, payload) {
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
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    setClass ({ commit }, payload) {
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
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    setAttendance ({ commit }, payload) {
      axios({
        url: 'http://localhost:3000/attendances',
        method: 'post',
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          data: payload
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
        { kelas: [], key: 'VII' },
        { kelas: [], key: 'VI' }
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
          el.Nilai = (tempNilai.reduce(reducer) / tempNilai.length).toFixed(2)
        }
        if (tempNilaiUas.length >= 1) {
          el.NilaiUas = (tempNilaiUas.reduce(reducer) / tempNilaiUas.length).toFixed(2)
        }
        if (tempNilaiUts.length >= 1) {
          el.NilaiUts = (tempNilaiUts.reduce(reducer) / tempNilaiUts.length).toFixed(2)
        }
        console.log(el, 'ini nilai')
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
      state.parentStudentName.forEach(el => {
        el.absen = [0, 0, 0, 0]
        if (el.StudentAttendances.length === 0) {
          el.absen = [0, 0, 0, 0]
        }
        el.StudentAttendances.forEach(ek => {
          if (ek.status === 'hadir') {
            el.absen[0]++
          } else if (ek.status === 'izin') {
            el.absen[1]++
          } else if (ek.status === 'sakit') {
            el.absen[2]++
          } else {
            el.absen[3]++
          }
        })
        tamp.push({ value: { name: el.name, class: el.Class.name, absen: el.absen }, text: el.name })
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
            ek.nilai = (tempNilai.reduce(reducer) / tempNilai.length).toFixed(2)
          }
          if (tempNilaiUas.length >= 1) {
            ek.uas = (tempNilaiUas.reduce(reducer) / tempNilaiUas.length).toFixed(2)
          }
          if (tempNilaiUts.length >= 1) {
            ek.uts = (tempNilaiUts.reduce(reducer) / tempNilaiUts.length).toFixed(2)
          }
        })
      })
      tamp = state.parentReport.filter(el => el.name === payload)
      return tamp
    },
    getStudentByParentfilter: (state) => (payload) => {
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
      tamp.filter(el => el.value.name === payload)
      return tamp
    }
  },
  modules: {
  }
})
