<template>
  <div class="formCard">
    <b-card
    title="Mama Register"
    style="max-width: 30rem; width: 30rem;"
    >
      <b-form>
        <b-form-group label="NamaMama">
          <b-form-input
          placeholder="NamaGuru"
          v-model="nama"
          required
          />
        </b-form-group>
        <b-form-group label="EmailMama">
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
        <b-form-group label="Nama Anak">
          <b-form-input
          v-model="anak"
          />
        </b-form-group>
        <div class="btn-submit">
          <b-button>Submit</b-button>
          <b-button @click.prevent="next">tambah Murid</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    next () {
      this.$router.push('/admin/TambahMurid')
    }
  }
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
