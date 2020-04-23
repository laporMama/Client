<template>
  <div class="formCard">
    <b-card
    title="Create Course"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form @submit.prevent="addMapel(nama)">
        <b-form-group label="Course">
          <b-form-input
            placeholder="Course"
            v-model="nama"
            autocomplete="off"
            required
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
      nama: ''
    }
  },
  methods: {
    addMapel (payload) {
      this.$store.dispatch('setMapel', payload)
      this.nama = ''
    }
  }
}
</script>

<style scoped>
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
</style>
