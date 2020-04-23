<template>
  <b-aspect :aspect="aspect">
    <b-jumbotron style="background-color: rgb(215,204,200)">
      <template v-slot:header >
        <b-row class="row row-flex-cols">
          <b-col align-self="start">
            <H1>LaporMama</H1>
          </b-col>
          <b-col md="4" offset-md="2">
            <b-row class="row row-flex-cols">
              <b-col md="4"><b-button align-self="start" style="background-color: rgb(78,52,46)" id="tooltip-target-1" size="lg" @click.prevent="role('Mama')">Mama</b-button></b-col>
              <b-col md="4"><b-button align-self="end" style="background-color: rgb(78,52,46)" id="tooltip-target-2" size="lg" @click.prevent="role('Guru')">Guru</b-button></b-col>
            </b-row>
          </b-col>
        </b-row>
      </template>
      <template v-slot:lead md="8">
        A School Monitoring Application Within Your Reach.
      </template>
      <b-row class="row row-flex-cols">
        <b-col md="4" offset-md="7" align-self="end"><Login /></b-col>
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
  }
}
</script>

<style>
Login {
  padding-bottom: 20px;
}
</style>
