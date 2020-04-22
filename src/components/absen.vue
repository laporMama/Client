<template>
  <div>
    <b-form-radio-group>
      <b-form-radio
        v-for="option in options"
        v-model="absen"
        :key="option.value"
        :value="option.value"
        @change="status"
        name="flavour-3a"
        inline
      >
      {{option.text}}
      </b-form-radio>
    </b-form-radio-group>
  </div>
</template>

<script>
export default {
  props: [
    'data'
  ],
  data () {
    return {
      statusAbsen: false,
      absen: [],
      options: [
        { text: 'present', value: 'hadir', notEnabled: false },
        { text: 'permit', value: 'izin', notEnabled: false },
        { text: 'sick', value: 'sakit', notEnabled: false },
        { text: 'not present', value: 'alpha', notEnabled: false }
      ]
    }
  },
  methods: {
    status (a) {
      this.$emit('absensis', { status: a, StudentId: this.data.item.id })
    }
  }
}
</script>

<style>

</style>
