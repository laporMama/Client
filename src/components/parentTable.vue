<template>
  <div>
    <!-- table -->
    <div>
      Sorting By:
      <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Z-A' : 'A-Z' }}</b>
    </div>
    <b-table
      :items="dataStudent[0].mapel"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      striped
      bordered
      hover
      responsive="sm"
    >
      <template v-slot:cell(nilai)="data">
        <span style="display:block; text-align: center;">{{printScore(data.value)}}</span>
      </template>
      <template v-slot:head(nilai)="data">
        <span style="display:block; text-align: center;">{{ data.label }}</span>
      </template>
      <template v-slot:cell(uts)="data">
        <span style="display:block; text-align: center;">{{printScore(data.value)}}</span>
      </template>
      <template v-slot:head(uts)="data">
        <span style="display:block; text-align: center;">{{ data.label }}</span>
      </template>
      <template v-slot:cell(uas)="data">
        <span style="display:block; text-align: center;">{{printScore(data.value)}}</span>
      </template>
      <template v-slot:head(uas)="data">
        <span style="display:block; text-align: center;">{{ data.label }}</span>
      </template>
    </b-table>
      <!-- <p disabled>{{test}}</p> -->
  </div>
</template>

<script>
export default {
  props: [
    'student'
  ],
  data () {
    return {
      sortBy: 'Course Name',
      sortDesc: false,
      fields: [
        { key: 'name', label: 'Course Name', sortable: true },
        { key: 'nilai', label: 'Score', sortable: true },
        { key: 'uts', label: 'Score UTS', sortable: true },
        { key: 'uas', label: 'Score UAS', sortable: true }
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
