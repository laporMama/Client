<template>
  <div>
    <b-card bg-variant="transparent" class="loginForm">
    <h1>Login{{role}}</h1>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          autocomplete="off"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
      <b-input type="password" id="text-password" aria-describedby="password-help-block" v-model="form.password"></b-input>
      </b-form-group>
    </b-form>
    <b-button variant="primary" v-if="(role === 'Guru')" @click.prevent="loginGuru({email: form.email, password: form.password })">Login</b-button>
    <b-button variant="primary" v-else-if="(role === 'Admin')" @click.prevent="loginAdmin({email: form.email, password: form.password })">Login</b-button>
    <b-button variant="primary" v-if="(role === 'Mama')" @click.prevent="loginParent({email: form.email, password: form.password })">Login</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  computed: {
    role () {
      // if (!this.$store.state.loginRole) {
      return this.$store.state.loginRole
      // } else {
      //   this.$store.commit('SET_LOGINROLE', 'Mama')
      //   return 'Mama'
      // }
    }
  },
  methods: {
    loginGuru (payload) {
      this.$store.dispatch('loginGuru', payload)
    },
    loginAdmin (payload) {
      this.$store.dispatch('loginAdmin', payload)
    },
    loginParent (payload) {
      this.$store.dispatch('loginParent', payload)
    }
  }
}
</script>

<style scoped>
.loginForm {
  font-size: 1.3rem;
  padding: 10px;
  margin-bottom: 450px;
}
</style>
