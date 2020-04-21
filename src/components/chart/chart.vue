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
    'absensi'
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
            data: this.absensi
          }
        ]
      }
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.chartData = {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Hadir', 'Absen', 'Sakit', 'Izin'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#2c3e50'],
            data: this.absensi
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
  },
  watch: {
    absensi: function (newFile) {
      if (newFile) {
        this.fillData()
      }
    }
  }
}
</script>

<style>

</style>
