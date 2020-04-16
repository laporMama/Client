<template>
  <div class="login">
    <div class="row at-row flex-center flex-center">
      <h1>Selamat Datang di LaporMama</h1>
    </div>
    <div class="loginChoose row at-row flex-around flex-center">
      <div class="col-md-4" @click.prevent="loginas('Guru')"><at-tooltip class="item" content="Masuk Sebagai Guru" placement="top-left"><at-button type="success" size="large" hollow>Guru</at-button></at-tooltip></div>
      <div class="col-md-4" @click.prevent="loginas('Mama')"><at-tooltip class="item" content="Masuk Sebagai Mama" placement="top-right"><at-button type="success" size="large" hollow>Mama</at-button></at-tooltip></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginas (payload) {
      this.$store.commit('SET_LOGINROLE', payload)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .login {
    margin: 50px;
    padding-top: 80px;
  }
  .loginChoose {
    margin-top: 50px;
    padding-top: 50px
  }
  .at-btn--large {
    font-size: 14px;
    padding: 30px 55px;
  }
</style>
