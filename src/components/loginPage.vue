<template>
  <b-aspect :aspect="aspect">
    <b-jumbotron class="bg-color">
      <template v-slot:header >
        <b-row class="row row-flex-cols">
          <b-col align-self="start">
            <H1>LaporMama</H1>
          </b-col>
          <b-col md="4" offset-md="5" style="left: 80px">
            <b-row class="row row-flex-cols">
              <div class="d-flex justify-content-between">
                <b-col><b-button style="background-color: rgb(78,52,46)" id="tooltip-target-2" size="lg" @click.prevent="role('Guru')">Guru</b-button></b-col>
                <b-col><b-button style="background-color: rgb(78,52,46)" id="tooltip-target-1" size="lg" @click.prevent="role('Mama')">Mama</b-button></b-col>
              </div>
            </b-row>
          </b-col>
        </b-row>
      </template>
      <template v-slot:lead md="8">
        A School Monitoring Application Within Your Reach.
      </template>
      <b-row class="row row-flex-cols">
        <b-col md="6" align-self="start">
          <div>
            <b-carousel
              id="carousel-fade"
              fade
              indicators
              img-width="1024"
              img-height="480"
            >
            <b-carousel-slide
              img-src="https://i.ibb.co/PTWG4Jt/naninu.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://i.ibb.co/748qHyq/hiclipart-com.png"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://i.ibb.co/Vqh2v1B/kissclipart-cartoon-blackboard-clip-art-teacher-3a416c36cf682bfe.png"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://i.ibb.co/8zsnRKd/output-onlinepngtools-1.png"
            ></b-carousel-slide>
            </b-carousel>
          </div>
        </b-col>
        <b-col md="2">
          <div v-if="guru === 'Guru'">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <b-img src="https://i.ibb.co/Jm8kJwM/output-onlinepngtools.png" fluid-grow alt="Responsive image"></b-img>
          </div>
        </b-col>
        <b-col md="3" align-self="end"><Login /></b-col>
      </b-row>
    </b-jumbotron>
  </b-aspect>
</template>

<script>
import Login from './loginForm'
export default {
  components: {
    Login
  },
  data () {
    return {
      aspect: '16:9',
      selected: 'Mama',
      options: [
        { text: 'Mama', value: 'Mama' },
        { text: 'Guru', value: 'Guru' }
      ]
    }
  },
  methods: {
    role (payload) {
      this.$store.commit('SET_LOGINROLE', payload)
    }
  },
  computed: {
    guru () {
      return this.$store.state.loginRole
    }
  },
  created () {
    if (this.$store.state.loginRole === 'Admin') {
      this.$store.commit('SET_LOGINROLE', 'Mama')
    }
  }
}
</script>

<style>
Login {
  padding-bottom: 20px;
}
.bg-color {
  /* background-color: rgb(255,253,231); */
  padding-top: 0px !important;
}
</style>
