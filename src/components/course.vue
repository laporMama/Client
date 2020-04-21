<template>
  <div class="formCard">
    <b-card
    title="register Course"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form>
        <b-form-group label="Course">
          <b-form-input
          placeholder="NamaGuru"
          v-model="nama"
          required
          />
        </b-form-group>
        <b-button @click="addMapel(nama)">Submit</b-button>
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
