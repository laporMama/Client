<template>
  <div>
    <b-navbar toggleable='lg' style="background-color:cornflowerblue">
      <b-navbar-brand class='clickable' @click='home'><img src="../assets/logo.png" alt=""></b-navbar-brand>

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
    return {
      isLogin: localStorage.getItem('isAuth')
    }
  },
  methods: {
    home () {
      this.$router.push('/')
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
    ...mapState(['isAuth'])
  }
}
</script>

<style>
.clickable {
  cursor: pointer;
}
img {
  width: 10vw;
}
</style>
