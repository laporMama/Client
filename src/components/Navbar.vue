<template>
  <div>
    <b-navbar toggleable='lg' style="background-color:cornflowerblue">
      <b-navbar-brand><img src="../assets/logo.png" alt=""></b-navbar-brand>

      <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>

      <b-collapse id='nav-collapse' is-nav>
        <b-navbar-nav class='ml-auto'>
          <b-nav-item v-if='isAuth' class='logout' @click='logout'
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
    logout () {
      this.$store.commit('LOGOUT')
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['isAuth'])
  }
}
</script>

<style scoped>
.logout {
  cursor: pointer;
}
img {
  width: 10vw;
}
</style>
