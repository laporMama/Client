<template>
<div class="container-fluid" >
  <b-row>
    <b-col md="3">
      <div class="side">
        <b-col class="pt-3">
           <img src="../assets/logo1.jpeg" alt="">
        </b-col>
        <b-col>
          <div class="teacher">
            <b-card style="height: 10rem;"
            border-variant="info">
              <div class="section-teacher">
                <h3>Teacher</h3>
                <h4>mapel</h4>
              </div>
              <div style="padding-top:5px">
                <b-button @click.prevent="logout">logout</b-button>
              </div>
            </b-card>
          </div>
        </b-col>
        <b-col style="padding-top:10px">
          <div >
          <h4>Class</h4>
          <b-card border-variant="warning">
            <div class="container link-kelas">
              <div v-for="(room, id) in kelas" :key="id">
                <b-navbar-nav>
                  <b-dropdown-item @click="next(({name: room.name, id: room.id}))">{{room.name}}</b-dropdown-item>
                </b-navbar-nav>
              </div>
              <!-- <b-link >{{room.name}}</b-link> -->
            </div>
          </b-card>
          </div>
        </b-col>
      </div>
    </b-col>
    <b-col md="9" >
      <div class="main">
        <div class="pt-3">
        </div>
        <div class="table">
        <Table @mapel="mapel"/>
        </div>
      </div>
    </b-col>
  </b-row>
</div>
</template>

<script>
import Table from '../components/table'
export default {
  data () {
    return {
      mapels: ''
    }
  },
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
    },
    mapel (event) {
      if (event) {
        console.log(event, 'aowkdowdkaowk')
        this.mapels = event
      }
    },
    logout () {
      this.$store.commit('LOGOUT')
      this.$store.commit('SET_ERROR_STATUS', false)
      localStorage.removeItem('token')
      localStorage.setItem('isAuth', false)
      this.$router.push('/')
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
    this.mapel()
  },
  components: {
    Table
  }
}
</script>

<style>
  .outouter {
    display: flex;
    flex-direction: row;
  }
  .side {
    /* background-color: beige; */
    height: 610px;
  }
  .main {
    height: 610px;
    /* background-color: blanchedalmond; */
  }
  /* .tabs {
    width: 1100px;
    padding-left:20px ;
  } */
  .section-teacher {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: flex-start;
    /* padding-top:30px */
  }
  img {
    width: 50%;
  }
  .teacher {
    padding-top: 10% ;
  }
  .link-kelas {
    max-height: 250px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .bv-example-row {
    overflow-x: hidden;
  }
</style>
