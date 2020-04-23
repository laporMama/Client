<template>
  <div class="formCard">
    <b-card
    title="Register Account"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form >
        <b-form-group label="Name">
          <b-form-input
          placeholder="Nama"
          v-model="nama"
          autocomplete="off"
          required
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
          />
        </b-form-group>

        <b-form-group label="Role">
          <b-form-select
          :options="options"
          v-model="role"
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
        <div class="btn-submit">
          <b-button @click.prevent="registerMama({name: nama, email: email, password: password, phoneNumber, role, CourseId: mapel})">Submit</b-button>
          {{mapel}}
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
      options: [{ value: 'parent', text: 'parent' }, { value: 'teacher', text: 'teacher' }, { value: 'admin', text: 'admin' }],
      phoneNumber: '',
      role: '',
      mapel: ''
    }
  },
  methods: {
    next () {
      this.$router.push('/admin/TambahMurid')
    },
    registerMama (payload) {
      this.$store.dispatch('registerMama', payload)
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
    margin-top: 2%;
    text-align: start;
  }
  .card-title {
    text-align: center !important;
  }
  .btn-submit {
    display: flex;
    justify-content: space-between;
  }
</style>
