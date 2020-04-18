<template>
  <div class="formCard">
    <b-card
    title="Mama Register"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form>
        <b-form-group label="Mama">
          <b-form-select
          :options="options"
          v-model="nama"
          required
          />
        </b-form-group>
        <b-form-group label="NamaMurid">
          <b-form-input
          placeholder="NamaMurid"
          v-model="email"
          required
          />
        </b-form-group>
        <div class="btn-submit">
          <b-button>Submit</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {

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
