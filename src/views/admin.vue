<template>
  <div class="home">
    <b-col style="margin-left: 1vw;margin-top: 2vh;" cols="2">
      <div class="sidenav">
      <b-navbar-nav>
        <b-nav-item :to="{path: '/admin/register'}">
          <b-card>
          Create User
          </b-card>
        </b-nav-item>
        <b-nav-item :to="{path: '/admin/course'}">
        <b-card>
          Create Course
        </b-card>
        </b-nav-item>
        <b-nav-item :to="{path: '/admin/student'}">
          <b-card>
            Create Student
          </b-card>
          </b-nav-item>
        <b-nav-item :to="{path: '/admin/class'}">
          <b-card>
           Create Class
          </b-card>
        </b-nav-item>
      </b-navbar-nav>
      </div>
    </b-col>
    <b-col style="margin-top: 1vh;" cols="9">
      <div class="menu">
        <router-view />
      </div>
    </b-col>
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
