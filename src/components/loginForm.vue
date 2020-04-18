<template>
  <div class="MainCard">
    <b-card
      class="mb-2"
       style="max-width: 20rem;"
    >
    <h1>Login{{role}}</h1>
    <b-form class="app">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-input type="password" id="text-password" aria-describedby="password-help-block"></b-input>
      </b-form-group>
    </b-form>
    <b-button variant="primary" :to="{path: '/teacher'}" v-if="(role === 'Guru')">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: ''
      },
      show: true
    }
  },
  computed: {
    role () {
      return this.$store.state.loginRole
    }
  }
}
</script>

<style scoped>
  .MainCard {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 8%;
  }
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: start;
    color: #2c3e50;
  }
</style>
