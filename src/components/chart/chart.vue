<template>
<div>
  <pie-chart :data="chartData" :options="chartOptions" :styles="myStyles" ></pie-chart>
</div>
</template>

<script>
import PieChart from './PieChart.js'
export default {
  name: 'Chart',
  props: [
    'data'
  ],
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
            data: this.data
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
    },
    test () {
      return this.data
    }
  }
}
</script>

<style>

</style>
