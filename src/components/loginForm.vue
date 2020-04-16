<template>
  <div id="card">
    <at-card style="width: 400px;">
      <h1 slot="title">Masuk Sebagai {{loginRole}}</h1>
      <form class="row flex-center">
        <div class="input"><at-input v-model="inputValue" placeholder="Please input"></at-input></div>
        <div class="input"><at-input v-model="inputPassword" placeholder="Please Password" type="password"></at-input></div>
        <div class="input"><at-button>Masuk</at-button></div>
      </form>
    </at-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: '',
      inputPassword: ''
    }
  },
  computed: {
    loginRole () {
      return this.$store.state.loginRole
    }
  }
}
</script>

<style>
  .input {
    margin: 15px;
    width: 60%;
  }
  #card {
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
