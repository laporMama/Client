<template>
  <div class="formCard">
    <b-card
      title="Create User"
      style="max-width: 30rem; width: 30rem;margin-bottom: 5vh;"
    >
      <b-form @submit.prevent="registerMama({name: nama, email: email, password: password, phoneNumber, role, CourseId: mapel})" >
        <b-form-group label="Name">
          <b-form-input
          placeholder="Name"
          v-model="nama"
          autocomplete="off"
          required
          type="text"
          />
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input
          placeholder="Email"
          v-model="email"
          type="email"
          required
          />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input
          placeholder="Password"
          type="password"
          v-model="password"
          required
          />
        </b-form-group>
        <b-form-group label="phoneNumber">
          <b-form-input
          placeholder="phoneNumber"
          type="number"
          v-model="phoneNumber"
          required
          min="0"
          />
        </b-form-group>
        <b-form-group label="Role">
          <b-form-select
          :options="options"
          v-model="role"
          required
          ></b-form-select>
        </b-form-group>
        <div v-if="role === 'teacher'" disabled>
          <b-form-group label="Course">
            <b-form-select
            :options="AllMapel"
            v-model="mapel"
            ></b-form-select>
          </b-form-group>
        </div>
        <div class="btn-submit" style="display:flex;justify-content:center;align-items:center;">
          <b-button type="submit" variant="success">Submit</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nama: '',
      email: '',
      password: '',
      options: [
        { value: null, text: 'Select role' },
        { value: 'parent', text: 'parent' },
        { value: 'teacher', text: 'teacher' },
        { value: 'admin', text: 'admin' }
      ],
      phoneNumber: '',
      role: null,
      mapel: ''
    }
  },
  methods: {
    next () {
      this.$router.push('/admin/TambahMurid')
    },
    registerMama (payload) {
      this.$store.dispatch('registerMama', payload)
      this.nama = ''
      this.email = ''
      this.password = ''
      this.phoneNumber = ''
      this.role = null
      this.mapel = ''
    },
    allMaple () {
      this.$store.dispatch('getCourse')
    }
  },
  computed: {
    AllMapel () {
      return this.$store.getters.getMapel
    }
  },
  created () {
    this.allMaple()
  }
}
</script>

<style>
  .formCard {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: start;
  }
  .card-title {
    text-align: center !important;
  }
  .btn-submit {
    display: flex;justify-content: center;align-items: center;
  }
</style>
