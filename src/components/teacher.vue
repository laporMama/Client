<template>
  <div class="home">
      <div class="sidenav">
        <router-link :to="{ path:'/admin/Product' }">Product</router-link>
        <router-link :to="{ path:'/admin/AddProduct' }">Add Product</router-link>
        <router-link :to="{ path:'/admin/Register'}">Add NewAdmin</router-link>
        <router-link :to="{ path:'/admin/History'}">History</router-link>
        <div class="logout">
          <a href="" @click.prevent="logout"> logout</a>
        </div>
      </div>
      <div class="main">
        <router-view/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  methods: {
    logout () {
      localStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 175px;
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 70px;
}
.sidenav a {
  padding: 6px 6px 6px 6px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}
.sidenav a:hover {
  color: #f1f1f1;
}
.sidenav img {
  width: 50%;
  border-radius: 46px;
}
.logout {
  margin-top: 220px;
}
.main {
  margin-left: 200px;
  font-size: 8px; /* Increased text to enable scrolling */
  padding: 100px 10px 10px 0px;
}
</style>
