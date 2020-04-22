<template>
  <div class="home">
    <b-col cols="2">
      <div class="sidenav">
      <b-navbar-nav>
        <b-nav-item :to="{path: '/admin/register'}">Register</b-nav-item>
        <b-nav-item :to="{path: '/admin/course'}">Course</b-nav-item>
        <b-nav-item :to="{path: '/admin/student'}">Student</b-nav-item>
        <b-nav-item :to="{path: '/admin/class'}">class</b-nav-item>
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
    margin-top: 2%;
    border: 1px black;
  }
</style>
