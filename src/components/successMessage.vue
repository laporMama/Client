<template>
  <div class="success">
    <b-alert show variant="success">{{ successMessage }}</b-alert>
  </div>
</template>

<script>
export default {
  name: 'SuccessMessage',
  computed: {
    successMessage () {
      return this.$store.state.successMessage
    }
  }
}
</script>

<style></style>
