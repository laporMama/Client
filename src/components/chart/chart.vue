<template>
<div>
  <pie-chart :data="chartData" :options="chartOptions" :styles="myStyles" v-model="chartData"></pie-chart>
</div>
</template>

<script>
import PieChart from './PieChart.js'
export default {
  name: 'Chart',
  props: [
    'datas'
  ],
  components: {
    PieChart
  },
  data () {
    return {
      width: 20,
      chartOptions: {
        hoverBorderWidth: 8
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
      return this.datas
    },
    chartData () {
      return {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Hadir', 'Absen', 'Sakit', 'Izin'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#2c3e50'],
            data: this.datas
          }
        ]
      }
    },
    filter () {
      return this.$store.getStudentByParentfilter(this.datas)
    }
  },
  watch: {
    chartData () {
      return {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Hadir', 'Absen', 'Sakit', 'Izin'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#2c3e50'],
            data: this.datas
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
