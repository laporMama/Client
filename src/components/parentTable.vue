<template>
  <div>
    <!-- table -->
    <b-table
      :items="dataStudent[0].mapel"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(nilai)="data">{{printScore(data.value)}}</template>
      <template v-slot:cell(uts)="data">{{printScore(data.value)}}</template>
      <template v-slot:cell(uas)="data">{{printScore(data.value)}}</template>

    </b-table>
      <!-- <p disabled>{{test}}</p> -->
    <div>
      Sorting By:
      <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'A-Z' : 'Z-A' }}</b>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'student'
  ],
  data () {
    return {
      sortBy: 'Course',
      sortDesc: false,
      fields: [
        { key: 'name', sortable: true },
        { key: 'nilai', sortable: true },
        { key: 'uts', sortable: true },
        { key: 'uas', sortable: true }
      ],
      report: [
        { Course: 'Matematika', Harian: '90', Ulangan: '70', UTS: '80', UAS: '80' },
        { Course: 'Fisika', Harian: '90', Ulangan: '70', UTS: '80', UAS: '80' },
        { Course: 'Kimia', Harian: '90', Ulangan: '70', UTS: '80', UAS: '80' }
      ]
    }
  },
  components: {
  },
  methods: {
    printScore (value) {
      if (typeof (value) !== 'number') {
        return `${Number(value)}`
      } else {
        return `${value}`
      }
    },
    fetchStudent () {
      this.$store.dispatch('fetchStudent')
      this.$store.dispatch('fetchReportByParent')
      this.$store.dispatch('getCourse')
    }
  },
  computed: {
    items () {
      const products = []
      // this.$store.state.items.forEach(el => {
      //   products.push({
      //     Course: el.Course,
      //     Harian: el.image_url,
      //     Ulangan: el.price,
      //     UTS: el.stock,
      //     UAS: el.id
      //   })
      // })
      return products
    },
    course () {
      return this.$store.state.allMapel
    },
    test () {
      return this.$store.getters.getReportByParent
    },
    dataStudent () {
      return this.$store.getters.getReportByParent(this.student)
    }
  },
  created () {
    this.fetchStudent()
  }
}
</script>

<style >
.image-product:hover,
.fa-edit:hover,
.fa-trash-alt:hover {
  cursor: pointer;
}
.fa-images,
.text-image,
.fa-edit {
  color: rgb(61, 61, 223);
}
.fa-trash-alt {
  color: red;
}
</style>
