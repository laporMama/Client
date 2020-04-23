<template>
  <div class="formCard">
    <b-card
    title="Create Class"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form @submit.prevent="addClass(nama)">
        <b-form-group label="Class:"
        description="Example XI-1"
        >
          <b-form-input
          placeholder="Class"
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
    addClass (payload) {
      this.$store.dispatch('setClass', payload)
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
