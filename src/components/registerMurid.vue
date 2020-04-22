<template>
  <div class="formCard">
    <b-card
    title="Student Register"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form>
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
          />
        </b-form-group>
        <div class="btn-submit">
          <b-button @click="addStudent({name: name, ClassId: kelasId, ParentId:parent})">Submit</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      kelasId: '',
      parent: ''
    }
  },
  methods: {
    getParent () {
      this.$store.dispatch('getMama')
      this.$store.dispatch('Fetchclass')
    },
    addStudent (payload) {
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
