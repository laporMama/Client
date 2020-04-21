<template>
  <div>
    <b-form-checkbox
      v-for="option in options"
      v-model="absen"
      :key="option.value"
      :value="option.value"
      @change="status"
      name="flavour-3a"
      inline
    >
    {{option.text}}
    </b-form-checkbox>
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
        { text: 'absent', value: 'hadir', notEnabled: false },
        { text: 'permit', value: 'izin', notEnabled: false },
        { text: 'sick', value: 'sakit', notEnabled: false },
        { text: 'not present', value: 'alpha', notEnabled: false }
      ]
    }
  },
  methods: {
    test () {
      console.log(this.absen, 'ini')
    },
    status () {
      console.log(this.absen)
    }
  },
  created () {
    this.test()
  }
}
</script>

<style>

</style>
