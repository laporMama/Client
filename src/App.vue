<template>
  <div id="app">
    <navbar />
    <div id="content">
      <vue-page-transition>
        <router-view />
      </vue-page-transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import navbar from './components/Navbar'
import Footer from './components/Footer'
// import login from './views/Home'
export default {
  components: {
    navbar,
    Footer
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

#content {
  flex: 1 0 auto;
}

Footer {
  flex-shrink: none;
}
</style>
