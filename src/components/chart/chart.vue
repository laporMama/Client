<template>
  <pie-chart :data="chartData" :options="chartOptions" :styles="myStyles" ></pie-chart>
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
      width: 20,
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
  },
  computed: {
    myStyles () {
      return {
        width: `${this.width}vw`,
        position: 'relative'
      }
    }
  }
}
</script>

<style>

</style>
