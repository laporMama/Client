<template>
  <div class="container">
    <div class="title">
      <h1>Selamat datang di Lapor Mama</h1>
    </div>
    <b-row class="chooseLogin">
      <b-col><b-button variant="outline-primary" id="tooltip-target-2" size="lg" :to="{path: '/login'}" @click.prevent="role('Guru')">Guru</b-button></b-col>
      <b-col><b-button variant="outline-primary" id="tooltip-target-1" size="lg" :to="{path: '/login'}"  @click.prevent="role('Mama')">Mama</b-button></b-col>
    </b-row>
      <b-tooltip target="tooltip-target-1" triggers="hover" placement="topleft">
        Login As Mama
      </b-tooltip>
      <b-tooltip target="tooltip-target-2" triggers="hover" placement="topright">
          Login As Guru
      </b-tooltip>
  </div>
</template>

<script>
export default {
  methods: {
    role (payload) {
      this.$store.commit('SET_LOGINROLE', payload)
    }
  }
}
</script>

<style>
  .container {
    margin-top: 150px;
  }
  .chooseLogin {
    margin-top: 100px;
  }
</style>
