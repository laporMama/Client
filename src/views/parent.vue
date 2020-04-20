<template>
  <div class="container-fluid w-75">
    <h1 class="text-center"> Student Report </h1>
    <hr>
    <div class="select">
      <b-form-select
      :options="studentByParent"
      v-model="name"
      />
    </div>
    <div class="row">
      <div class="col-md-5">
        <h4> Name : {{name.name}}</h4>
        <h4> Kelas : {{name.class}} </h4>
        <br>
        <h4 class="text-center"> Study Report </h4>
      </div>
      <div class="col-md-7 d-flex justify-content-center">
        <chart class="justify-content-center" :data="name.absen" />
      </div>
    </div>
    <div class="container-fluid w-90">
      <Table :student="name.name" />
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
    },
    test () {
      return this.$store.getters.getReportByParent
    }
  },
  data () {
    return {
      name: {}
    }
  }
}
</script>

<style scoped>
chart {
  width: 8vh;
}
.custom-select {
  width: 300% !important;
  margin-bottom: 25px;
}
.select {
  width: 70px;
  margin-left: 75px;
}
</style>
