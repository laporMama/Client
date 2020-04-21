<template>
  <div class="text-center">
    <b-spinner
      type="grow"
      label="Spinning"
      class="spinner"
      variant="danger"
    ></b-spinner>
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style>
.spinner {
  position: absolute;
  height: 7rem;
  width: 7rem;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  background-size: 100%;
  z-index: 99;
  size: 200px;
}
</style>
