<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{path: '/'}">LaporMama</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="btn btn-outline-danger" v-if="login" >Keluar</b-nav-item>
          {{login}}
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ['login']
}
</script>

<style>

</style>
