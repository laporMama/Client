<template>
  <div class="container-fluid w-75">
    <h1 class="text-center"> Student Report </h1>
    <hr>
    <div class="row">
      <div class="col-md-5">
        <h4> Name : Maudy Ayunda</h4>
        <h4> Kelas : Hati nya Fajar </h4>
        <br>
        <h4 class="text-center"> Study Report </h4>
      </div>
      <div class="col-md-7">
        <chart />
      </div>
    </div>
    <div class="container-fluid w-90">
      <Table />
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
  }
}
</script>

<style>

</style>
