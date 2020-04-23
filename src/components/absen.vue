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
    <!-- {{data}} -->
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
        { text: 'Present', value: 'hadir', notEnabled: false },
        { text: 'Permit', value: 'izin', notEnabled: false },
        { text: 'Sick', value: 'sakit', notEnabled: false },
        { text: 'Not Present', value: 'alpha', notEnabled: false }
      ]
    }
  },
  methods: {
    status (a) {
      this.$emit('absensis', { status: a, StudentId: this.data.item.id })
    },
    test () {
      console.log(this.data)
      // this.data.forEach(el => {
      //   console.log(el)
      // })
    }
  },
  created () {
    this.test()
  }
}
</script>

<style>

</style>
