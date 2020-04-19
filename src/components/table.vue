<template>
<div class="outer">
  <div>
    <b-tabs content-class="mt-3">
    <h1>{{mapel.name}}</h1>
      <b-tab title="Nilai" active>
        <b-table fixed responsive :items="murid" :fields="fields" style="{display:flex; flex-direction:row}">
          <template v-slot:cell(inputnilai)="i">
            <div class="test">
              <b-form-input type="number" max="100" min="0" debounce="500"
              v-model="nilai"
              ></b-form-input>
              <b-button>update</b-button>
              <b-button @click.prevent="addNilai({score: nilai, reportDate:date, type: 'nilai', StudentId: i.item.id, CourseId: mapel.id})">submit</b-button>
            </div>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Nilai UTS" active>
        <b-table fixed responsive :items="murid" :fields="fieldsUts">
          <template v-slot:cell(inputnilai)="i">
            <div class="test">
              <b-form-input type="number" max="100" min="0" debounce="500"
              v-model="nilai"
              ></b-form-input>
              <b-button>update</b-button>
              <b-button @click.prevent="addNilai({score: nilai, reportDate:date, type: 'uts', StudentId: i.item.id, CourseId: mapel.id})">submit</b-button>
            </div>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Nilai UAS" active>
        <b-table fixed responsive :items="murid" :fields="fieldsUas">
          <template v-slot:cell(inputnilai)="i">
            <div class="test">
              <b-form-input type="number" max="100" min="0" debounce="500"
              v-model="nilai"
              ></b-form-input>
              <b-button v-b-modal.modal-prevent-closing >update</b-button>
              <b-button @click.prevent="addNilai({score: nilai, reportDate:date, type: 'uas', StudentId: i.item.id, CourseId: mapel.id})">submit</b-button>
            </div>
                <b-modal
                  id="modal-prevent-closing"
                  ref="modal"
                  title="Submit Your Name"
                  @show="resetModal"
                  @hidden="resetModal"
                  @ok="handleOk"
                ></b-modal>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="absen">
        <b-table fixed responsive :items="murid" :fields="fields2">
          <template v-slot:cell(Hadir)="i">
            <b-form-checkbox
            @change="absensi(i)"
            >{{i.field.key}}</b-form-checkbox>
          </template>
          <template v-slot:cell(izin)="i">
            <b-form-checkbox
            @change="absensi(i)"
            >{{i.field.key}}</b-form-checkbox>
          </template>
          <template v-slot:cell(sakit)="i">
            <b-form-checkbox
            @change="absensi(i)"
            >{{i.field.key}}</b-form-checkbox>
          </template>
          <template v-slot:cell(aplha)="i">
            <b-form-checkbox
            @change="absensi(i)"
            >{{i.field.key}}</b-form-checkbox>
          </template>
        </b-table>
        </b-tab>
    </b-tabs>
  </div>
  {{hasilMurid}}
</div>
</template>

<script>
var moment = require('moment')
export default {
  data () {
    return {
      absen: [],
      date: moment().format(),
      nilai: 0,
      fields: ['id', 'name', 'Nilai', 'inputnilai'],
      fieldsUas: ['id', 'name', 'NilaiUas', 'inputnilai'],
      fieldsUts: ['id', 'name', 'NilaiUts', 'inputnilai'],
      fields2: ['id', 'name', { key: 'Hadir', label: 'Hadir' }, { key: 'izin', label: 'Izin' }, { key: 'sakit', label: 'sakit' }, { key: 'aplha', label: 'aplha' }]
    }
  },
  methods: {
    absensi (payload) {
      payload.item.status = payload.field.key
      this.$store.commit('SET_ABSENSI', payload.item)
    },
    addNilai (payload) {
      this.$store.dispatch('setNilai', payload)
    },
    updateNilai (payload) {
      this.$store.dispatch('UpdateNilai', payload)
    },
    fetchclass () {
      this.$store.dispatch('Fetchclass')
    },
    fetchTeacher () {
      this.$store.dispatch('fetchTeacher', localStorage.getItem('id'))
      this.$store.commit('SET_ROOM')
      this.$store.dispatch('fetchStudentInClass')
    }
  },
  computed: {
    Absen () {
      return this.$store.state.absen
    },
    murid () {
      return this.$store.state.student
    },
    hasilMurid () {
      return this.$store.getters.filterStudent
    },
    mapel () {
      return this.$store.state.mapel
    }
  },
  created () {
    this.fetchTeacher()
    this.fetchclass()
  }
  // watch: {
  //   kelas: (val) => {
  //     this.fecthStudent()
  //   }
  // }
}
</script>

<style scoped>
  .form-control {
    display: block;
    width: 80px;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .test {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
</style>
