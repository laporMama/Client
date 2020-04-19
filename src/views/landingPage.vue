<template>
<div class="outer">
  <b-col  cols="2">
    <div class="sidenav">
      <b-navbar-brand>Kelas</b-navbar-brand>
      <div  v-for="(room, i) in kelas" :key="i">
        <b-navbar-toggle :target="room.key" class="kelas">
          <template v-slot:default="{ expanded }">
            <b>{{room.key}} </b><b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
          <b-navbar-nav>
            <b-collapse :id="room.key" is-nav>
              <div v-for="(subkelas, i) in room.kelas" :key="i">
                <b-dropdown-item @click="next(subkelas)">{{subkelas}}</b-dropdown-item>
              </div>
            </b-collapse>
          </b-navbar-nav>
      </div>
    </div>
  </b-col>
  <b-col cols="10">
    <div class="main">
      <div>
        <h1>Selamat datang {{guru}} </h1>
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
      this.$router.push({ path: `/teacher/kelas/${payload}` })
      this.$store.commit('SET_ROOM')
      this.$store.dispatch('fetchStudentInClass')
    }
  },
  computed: {
    kelas () {
      return this.$store.getters.allKelas
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
