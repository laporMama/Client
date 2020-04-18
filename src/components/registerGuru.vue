<template>
  <div class="formCard">
    <b-card
    title="Register guru"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form>
        <b-form-group label="NamaGuru">
          <b-form-input
          placeholder="NamaGuru"
          v-model="nama"
          required
          />
        </b-form-group>
        <b-form-group label="EmailGuru">
          <b-form-input
          placeholder="EmailGuru"
          v-model="email"
          type="email"
          required
          />
        </b-form-group>
        <b-form-group label="PasswordGuru">
          <b-form-input
          placeholder="Password"
          type="password"
          v-model="password"
          required
          />
        </b-form-group>
        <b-form-group label="MataPelajaran">
          <b-form-select
          :options="options"
          v-model="mapel"
          />
        </b-form-group>
        <b-button>Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: ['ipa', 'ips', 'agama']
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
