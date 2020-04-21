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
        { text: 'hadir', value: 'hadir', notEnabled: false },
        { text: 'izin', value: 'izin', notEnabled: false },
        { text: 'sakit', value: 'sakit', notEnabled: false },
        { text: 'alpha', value: 'alpha', notEnabled: false }
      ]
    }
  },
  methods: {
    test () {
      console.log(this.absen, 'ini')
    },
    status (a) {
      this.$emit('absensis', { type: a, id: this.data.item.id })
    }
  },
  created () {
    this.test()
  }
}
</script>

<style>

</style>
