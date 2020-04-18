<template>
  <div>
    <b-form>
      <b-form-group label="NamaGuru">
        <b-form-input
         placeholder="NamaGuru"
         required
         />
      </b-form-group>
      <b-form-group label="EmailGuru">
        <b-form-input
         placeholder="EmailGuru"
         type="email"
         required
         />
      </b-form-group>
      <b-form-group label="PasswordGuru">
        <b-form-input
        placeholder="Password"
        type="password"
        required
        />
      </b-form-group>
      <b-form-group label="MataPelajaran">
        <b-form-select
        :options="options"
        />
      </b-form-group>
    </b-form>
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

<style>

</style>
