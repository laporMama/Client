<template>
  <div class="navbar">
    <at-menu mode="horizontal" active-name="1" inlineCollapsed="true" >
      <div @click.prevent="goTo">
        <at-menu-item name="1"><div><h1>LALALA</h1></div></at-menu-item>
      </div>
      <div class="row at-row flex-end" v-if="loginStatus"  @click.prevent="login(false)" >
        <at-menu-item name="4" @click.prevent="register"><i class="icon icon-log-out"></i>Logout</at-menu-item>
      </div>
    </at-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      islogin: false
    }
  },
  methods: {
    login (payload) {
      this.$store.commit('SET_LOGIN', payload)
    },
    goTo () {
      this.$router.push('/')
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style scoped>

</style>
