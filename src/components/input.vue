<template>
  <div>
    <div class="test">
      <b-form-input type="number" max="100" min="0" debounce="500" autocomplete="false"
      v-model="nilai"
      ></b-form-input>
      <div class="btn">
        <b-button @click="model = !model">update</b-button>
        <b-button  :disabled="!button"  @click.prevent="addNilai({score: nilai, type, reportDate: date,  StudentId: data.item.id, CourseId: CourseId })">submit</b-button>
      </div>
      <b-modal
      v-model="model"
      @ok="handleOk"
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
    <!-- {{data}} -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      nilai: 0,
      model: false,
      NilaiId: null,
      nilaiUpdate: null,
      button: true
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
      this.$emit('setNilai', payload)
      // this.$store.dispatch('fetchStudentInClass')
    },
    updateNilai (payload) {
      this.$emit('updateNilai', payload)
      this.$store.dispatch('fetchStudentInClass')
    },
    handleOk () {
      const data = { id: this.NilaiId, score: this.nilaiUpdate }
      // console.log(data)
      this.$emit('updateNilais', data)
      this.$store.dispatch('fetchStudentInClass')
    }
  },
  computed: {
    tanggal () {
      const tamp = []
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      this.data.item.Reports.forEach(el => {
        tamp.push({ value: el.id, text: new Date(el.reportDate).toLocaleDateString('en-US', options) })
      })
      return tamp
    }
  },
  watch: {
    nilai: function (newVal) {
      if (newVal > 100) {
        this.$store.commit('SET_ERROR_MESSAGE', 'Max Input Score 100')
        this.button = false
      } else {
        this.button = true
      }
    }
  }

}
</script>

<style scoped>
  .form-update {
    display: flex;
    flex-direction: column;
  }
  .btn {
    display: flex;
    justify-content: space-evenly;
    text-transform: capitalize;
  }
</style>
