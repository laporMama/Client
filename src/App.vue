<template>
  <div id="app">
    <navbar :login="isLogin" />
    <ErrorMessage v-if="error" class="container w-50 mt-3" />
    <SuccessMessage v-if="success" class="container w-50 mt-3" />
    <Spinner v-if="loading" />
    <div id="content">
      <vue-page-transition>
        <router-view />
      </vue-page-transition>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import navbar from './components/Navbar'
// import Footer from './components/Footer'
import Spinner from './components/spinner'
import ErrorMessage from './components/errorMessage'
import SuccessMessage from './components/successMessage'
// import login from './views/Home'
export default {
  components: {
    navbar,
    // Footer,
    Spinner,
    ErrorMessage,
    SuccessMessage
  },
  data () {
    return {
      isLogin: false
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    },
    error () {
      return this.$store.state.error
    },
    success () {
      return this.$store.state.success
    }
  },
  watch: {
    success (newVal) {
      setTimeout(() => {
        this.$store.commit('SET_SUCCESS', false)
      }, 3000)
    },
    error (newval) {
      setTimeout(() => {
        this.$store.commit('SET_ERROR_STATUS', false)
      }, 3000)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
