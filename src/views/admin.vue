<template>
  <div class="home">
    <b-col cols="2">
      <div class="sidenav">
      <b-navbar-nav>
        <b-nav-item :to="{path: '/admin/mama'}">Mama</b-nav-item>
        <b-nav-item :to="{path: '/admin/teacher'}">Guru</b-nav-item>
      </b-navbar-nav>
      </div>
    </b-col>
    <b-col cols="10">
      <div class="menu">
        <router-view />
      </div>
    </b-col>
    <!-- <h1>OKSWODKODK</h1> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .home {
    display: flex;
  }
  .sidenav {
    display: flex;
    flex-direction: column;
  }
</style>
