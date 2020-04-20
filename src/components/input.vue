<template>
  <div>
    <div class="test">
      <b-form-input type="number" max="100" min="0" debounce="500"
      v-model="nilai"
      ></b-form-input>
      <b-button @click="model = !model">update</b-button>
      <b-button @click.prevent="addNilai({score: nilai, type, reportDate: date,  StudentId: data.item.id, CourseId: CourseId })">submit</b-button>
      <b-modal
      v-model="model"
      @ok={handleOk}
      >
        <form @submit.stop.prevent="updateNilai({id: NilaiId, score: nilaiUpdate})">
          <b-form-group
          >
            <div class="form-update">
            <label for="select-tanggal">Tanggal:</label>
            <b-form-select
            id="select-tanggal"
            :options="tanggal"
            v-model="NilaiId"
            />
            <label for="input-nilai" >Nilai:</label>
            <b-form-input
              id="input-nilai"
              title="Nilai Murid"
              type="number"
              min="0"
              max="100"
              v-model="nilaiUpdate"
            />
            </div>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    {{NilaiId}}
    {{nilaiUpdate}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      nilai: 0,
      model: false,
      NilaiId: null,
      nilaiUpdate: null
    }
  },
  props: [
    'data',
    'date',
    'type',
    'CourseId'
  ],
  methods: {
    addNilai (payload) {
      console.log(payload)
      this.$store.dispatch('setNilai', payload)
      this.$store.dispatch('fetchStudentInClass')
    },
    updateNilai (payload) {
      this.$store.dispatch('updateNilai', payload)
    },
    handleOk () {
      const data = { id: this.NilaiId, score: this.nilaiUpdate }
      this.updateNilai(data)
    }
  },
  computed: {
    tanggal () {
      const tamp = []
      this.data.item.Reports.forEach(el => {
        tamp.push({ value: el.id, text: el.reportDate })
      })
      return tamp
    }
  }
}
</script>

<style scoped>
  .form-update {
    display: flex;
    flex-direction: column;
  }
</style>
