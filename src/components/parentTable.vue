<template>
  <div>
    <!-- table -->
    <b-table
      :items="report"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    >
      <template v-slot:cell(Harian)="data">{{printScore(data.value)}}</template>
      <template v-slot:cell(Ulangan)="data">{{printScore(data.value)}}</template>
      <template v-slot:cell(UTS)="data">{{printScore(data.value)}}</template>
      <template v-slot:cell(UAS)="data">{{printScore(data.value)}}</template>

    </b-table>

    <div>
      Sorting By:
      <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sortBy: 'Course',
      sortDesc: false,
      fields: [
        { key: 'Course', sortable: true },
        { key: 'Harian', sortable: true },
        { key: 'Ulangan', sortable: true },
        { key: 'UTS', sortable: true },
        { key: 'UAS', sortable: true }
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
    }
  },
  created () {
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
