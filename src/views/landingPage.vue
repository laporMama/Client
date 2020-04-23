<template>
<div class="outer">
  <b-col  cols="2">
    <div class="sidenav">
      <b-navbar-brand>Class</b-navbar-brand>
      <div v-for="(room, i) in kelas" :key="i">
          <b-navbar-nav>
            <b-dropdown-item @click="next(({name: room.name, id: room.id}))">{{room.name}}</b-dropdown-item>
          </b-navbar-nav>
      </div>
    </div>
  </b-col>
  <b-col cols="10">
    <div class="main">
      <div>
        <h1>Welcome {{guru}} </h1>
      </div>
      <router-view />
    </div>
  </b-col>
</div>
</template>

<script>
export default {
  methods: {
    fetchclass () {
      this.$store.dispatch('Fetchclass')
    },
    fetchTeacher () {
      this.$store.dispatch('fetchTeacher', localStorage.getItem('id'))
    },
    next (payload) {
      localStorage.setItem('roomId', payload)
      this.$router.push({ path: `/teacher/kelas/${payload.name}` })
      localStorage.setItem('idRoom', payload.id)
      this.$store.commit('SET_ROOM')
      this.$store.dispatch('fetchStudentInClass')
    }
  },
  computed: {
    kelas () {
      return this.$store.state.kelas
    },
    guru () {
      return localStorage.getItem('teacher')
    }
  },
  created () {
    this.fetchclass()
    this.fetchTeacher()
  }
}
</script>

<style>
  .sidenav {
    display: flex;
    flex-direction: column;
  }
  .class {
    margin-top: 50px;
  }
  .outer {
    display: flex;
  }
  /* .tabs {
    width: 1100px;
    padding-left:20px ;
  } */
</style>
