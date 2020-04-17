<template>
  <div id="app">
    <navbar />
    <div>
      <vue-page-transition>
        <router-view />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import navbar from './components/Navbar'
// import login from './views/Home'
export default {
  components: {
    navbar
    // login
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
