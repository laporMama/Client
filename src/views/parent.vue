<template>
  <div class="container pt-4">
    <!-- header -->
    <h1 class="text-center" style="font-family: roboto"> Student Report</h1>
    <hr>
    <div class="row">
      <!-- student detail -->
      <div class="col-12 col-lg-5" style="width: 100%">
        <div class="pb-3">
          <label for="Children">Choose your children:</label>
          <b-form-select
          class="select"
          :options="studentByParent"
          v-model="name"
          />
        </div>
        <div class="p-3" style="text-align: left; border-radius: 5px; border: 1px lightgrey solid">
          <p style="font-size: 18px"> Name : <strong>{{name.name}}</strong></p>
          <p style="font-size: 18px"> Class : <strong>{{name.class}}</strong></p>
        </div>
      </div>
      <!-- chart -->
      <div class="col-12 col-lg-7" style="text-align: center;">
        <h3>Attendance Chart</h3>
        <chart :absensi="name.absen" v-if="name.absen" style="margin-left: 30%"/>
      </div>
    </div>

    <!-- <div class="container-fluid w-75">
      <div class="select container-fluid">
        <label for="Children">Student List </label>
        <b-form-select
        class="select"
        :options="studentByParent"
        v-model="name"
        />
      </div>
    </div> -->
    <!-- <br>
    <div class="row" v-if="name.name">
      <div class="col-md-5">
        <h4> Name : {{name.name}}</h4>
        <h4> Kelas : {{name.class}} </h4>
        <br>
        <h4 class="text-center"> Study Report </h4>
      </div>
      <div class="col-md-7 d-flex justify-content-center">
        <chart class="justify-content-center" :absensi="name.absen" v-if="name.absen"/>
        <chart class="justify-content-center" :absensi="name.absen" v-if="name.absen" v-model="a"/>
      </div>
    </div> -->
    <!-- <b-card v-else>
      <b-aspect :aspect="aspect">
        <b-img src="https://i.ibb.co/47f0L3X/Whats-App-Image-2020-04-22-at-21-25-33.jpg" fluid-grow alt="Responsive image"></b-img>
      </b-aspect>
    </b-card> -->
    <div style="margin-top: -60px">
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
      aspect: '21:9',
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
/* chart {
  width: 8vh;
} */
/* .select {
  width: 50% !important;
} */
</style>
