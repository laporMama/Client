<template>
  <div>
    <div class="test">
      <b-form-input type="number" max="100" min="0" debounce="500"
      v-model="nilai"
      ></b-form-input>
      <b-button>update</b-button>
      <b-button @click.prevent="addNilai({score: nilai, type, reportDate: date,  StudentId: data.item.id, CourseId: CourseId })">submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nilai: 0
    }
  },
  props: [
    'data',
    'date',
    'type',
    'CourseId'
  ],
  methods: {
    addNilai (payload) {
      // console.log(payload)
      this.$store.dispatch('setNilai', payload)
    }
  }
}
</script>

<style>

</style>
