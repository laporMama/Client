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
    <!-- {{absenhari}} -->
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
    }
    // test () {
    //   this.$store.dispatch('fecthAttendance')
    // }
  },
  created () {
    // this.test()
  },
  computed: {
    // absenhari () {
    //   return this.$store.getters.getAbsensi
    // }
  }
}
</script>

<style>

</style>
