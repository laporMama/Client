<template>
  <div class="formCard">
    <b-card
    title="register Class"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form>
        <b-form-group label="Class:"
        description="Example XI-1"
        >
          <b-form-input
          placeholder="class"
          v-model="nama"
          required
          />
        </b-form-group>
        <b-button @click="addClass(nama)">Submit</b-button>
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
