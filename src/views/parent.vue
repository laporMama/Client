<template>
  <div class="container-fluid w-75">
    <h1 class="text-center"> Student Report </h1>
    <hr>
    <div class="container-fluid w-75">

      <div class="select container-fluid">
        <b-form-select
        class="select"
        :options="studentByParent"
        v-model="name"
        />
      </div>
    </div>
    <br>
    <div class="row" v-if="name.name">
      <div class="col-md-5">
        <h4> Name : {{name.name}}</h4>
        <h4> Kelas : {{name.class}} </h4>
        <br>
        <h4 class="text-center"> Study Report </h4>
      </div>
      <div class="col-md-7 d-flex justify-content-center">
        <chart class="justify-content-center" :absensi="name.absen" v-if="name.absen"/>
        <!-- <chart class="justify-content-center" :absensi="name.absen" v-if="name.absen" v-model="a"/> -->
      </div>
    </div>
    <div class="container-fluid w-90">
      <Table :student="name.name" v-if="name.name" />
    </div>
  </div>
</template>

<script>
import Table from '../components/parentTable'
import Chart from '../components/chart/chart.vue'
export default {
  components: {
    Table,
    Chart
  },
  computed: {
    studentByParent () {
      return this.$store.getters.getStudentByParent
    }
  },
  data () {
    return {
      name: {},
      a: false
    }
  },
  methods: {
    fetchStudent () {
      this.$store.dispatch('fetchStudent')
      this.$store.dispatch('fetchReportByParent')
      this.$store.dispatch('getCourse')
    }
  },
  created () {
    this.fetchStudent()
  }
}
</script>

<style scoped>
chart {
  width: 8vh;
}
/* .select {
  width: 50% !important;
} */
</style>
