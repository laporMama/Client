import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, {
      borderWidth: '10px',
      hoverBackgroundColor: 'red',
      hoverBorderWidth: '10px'
    })
  },
  watch: {
    data: function (news) {
      this.renderChart(this.data, {
        borderWidth: '10px',
        hoverBackgroundColor: 'red',
        hoverBorderWidth: '10px'
      })
    }
  }
}
