<template>
  <div>
    <b-navbar toggleable='lg' variant='dark' type="dark">
      <b-navbar-brand class='clickable' @click='home'>LaporMama</b-navbar-brand>

      <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>

      <b-collapse id='nav-collapse' is-nav>
        <b-navbar-nav class='ml-auto'>
          <b-nav-item v-if='isAuth' class='clickable' @click='logout'
            >Logout</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    logout () {
      this.$store.commit('LOGOUT')
      this.$store.commit('SET_ERROR_STATUS', false)
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['isAuth'])
  }
}
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>
