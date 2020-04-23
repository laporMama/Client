<template>
  <div class="formCard">
    <b-card
      title="Create Student"
      style="max-width: 30rem; width: 30rem;"
    >
      <b-form @submit.prevent="addStudent({name: name, ClassId: kelasId, ParentId:parent})">
        <b-form-group label="Parent">
          <b-form-select
          :options="teacher"
          v-model="parent"
          required
          />
        </b-form-group>
        <b-form-group label="Class">
          <b-form-select
          :options="kelas"
          v-model="kelasId"
          required
          />
        </b-form-group>
        <b-form-group label="NameStudent">
          <b-form-input
          v-model="name"
          required
          placeholder="Student name"
          />
        </b-form-group>
        <div class="btn-submit" style="display:flex;justify-content:center;align-items:center;">
          <b-button variant="success" type="submit">Submit</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      kelasId: null,
      parent: ''
    }
  },
  methods: {
    getParent () {
      this.$store.dispatch('getMama')
      this.$store.dispatch('Fetchclass')
    },
    addStudent (payload) {
      this.name = null
      this.kelasId = null
      this.parent = null
      this.$store.dispatch('addStudent', payload)
    }
  },
  computed: {
    teacher () {
      return this.$store.getters.getParent
    },
    kelas () {
      return this.$store.getters.getKelas
    }
  },
  created () {
    this.getParent()
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
