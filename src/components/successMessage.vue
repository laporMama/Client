<template>
  <div class="success">
    <b-b-toast show variant="success">{{ successMessage }}</b-b-toast>
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
