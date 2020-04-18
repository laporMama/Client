<template>
  <pie-chart :data="chartData" :options="chartOptions" class="container-fluid w-10"></pie-chart>
</template>

<script>
import PieChart from './PieChart.js'
export default {
  name: 'Chart',
  components: {
    PieChart
  },
  data () {
    return {
      chartOptions: {
        hoverBorderWidth: 8
      },
      chartData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Hadir', 'Absen', 'Sakit', 'Izin'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#2c3e50'],
            data: [10, 10, 5, 3]
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
