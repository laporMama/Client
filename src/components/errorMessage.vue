<template>
  <div class="error">
    <b-alert show variant="danger">{{ errorMessages }}</b-alert>
  </div>
</template>

<script>
export default {
  name: "ErrorMessage",
  computed: {
    errorMessages() {
      return this.$store.state.errorMessages.join(" and ");
    }
  }
};
</script>

<style></style>
