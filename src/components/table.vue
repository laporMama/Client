<template>
<div class="outer">
  <div>
    <b-tabs content-class="mt-3">
    <h1>{{mapel.name}}</h1>
    <br>
    <b-row>
      <b-col>
        <b-input
        v-model="filters"
        debounce="500"
        placeholder="Search.... "
        class="container-fluid w-50"
        ></b-input>
      </b-col>
      <b-col>
        <b-input
        v-model="filters"
        debounce="500"
        placeholder="Search.... "
        class="container-fluid w-50"
        type="date"
        ></b-input>
      </b-col>
    </b-row>
      <br>
      <b-tab title="Score" active>
        <b-table fixed responsive  :items="check" :fields="fields" style="{display:flex; flex-direction:row}">
          <template v-slot:cell(inputnilai)="i">
            <Input :data="i" :date="date" :type="'nilai'" :CourseId="mapel.id" @setNilai="setNilai" @updateNilais="updateNilais" />
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Score UTS" active>
        <b-table fixed responsive :items="check" :fields="fieldsUts">
          <template v-slot:cell(inputnilai)="i">
            <Input :data="i" :date="date" :type="'uts'" :CourseId="mapel.id" @setNilai="setNilai" @updateNilais="updateNilais" />
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Score UAS" active>
        <b-table fixed responsive :items="check" :fields="fieldsUas">
          <template v-slot:cell(inputnilai)="i">
            <Input :data="i" :date="date" :type="'uas'" :CourseId="mapel.id" @setNilai="setNilai"  @updateNilais="updateNilais"/>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Attendance" :disabled="getAbsensi.length ? true : false" >
        <b-table fixed responsive :items="check" :fields="fields2">
          <template v-slot:cell(hadir)="i">
            <Check :data="i"  @absensis="absensis" />
          </template>
        </b-table>
          <b-button @click.prevent="pushAttendance">Submit</b-button>
          <br>
          <br>
          <b-button variant="danger" @click.prevent="demo">Demo</b-button>
        </b-tab>
    </b-tabs>
  </div>
  {{hasilMurid}}
</div>
</template>

<script>
import Input from './input'
import Check from './absen'
var moment = require('moment')
export default {
  data () {
    return {
      absen: [],
      dateFilter: '',
      date: moment().format('L'),
      nilai: 0,
      statusAbsen: false,
      fields: ['name', { key: 'Nilai', label: 'Score' }, { key: 'inputnilai', label: 'Input Score' }],
      fieldsUas: ['name', { key: 'NilaiUas', label: 'Score UAS' }, { key: 'inputnilai', label: 'Input Score' }],
      fieldsUts: ['name', { key: 'NilaiUts', label: 'Score UTS' }, { key: 'inputnilai', label: 'Input Score' }],
      fields2: ['name', { key: 'hadir', label: 'Attendance' }],
      filters: '',
      check: null
    }
  },
  methods: {
    absensi (payload) {
      payload.item.status = payload.field.key
      this.$store.commit('SET_ABSENSI', payload.item)
    },
    updateNilais (payload) {
      this.$store.dispatch('setUpdateNilai', payload)
      this.$store.dispatch('fetchStudentInClass')
    },
    setNilai (payload) {
      this.$store.dispatch('setNilai', payload)
      this.$store.dispatch('fetchStudentInClass')
    },
    fetchclass () {
      this.$store.dispatch('Fetchclass')
    },
    fetchTeacher () {
      this.$store.dispatch('fetchTeacher', localStorage.getItem('id'))
      this.$emit('mapel', this.mapel.name)
      this.$store.dispatch('fetchStudentInClass')
    },
    changeStatus () {
      this.changeStatus = !this.changeStatus
    },
    absensis (event) {
      this.absen.forEach((el, id) => {
        if (el.StudentId === event.StudentId) {
          this.absen.splice(id, 1)
        }
      })
      this.absen.push(event)
    },
    pushAttendance () {
      this.$store.dispatch('setAttendance', this.absen)
      this.$store.dispatch('Fetchclass')
      this.$store.dispatch('fecthAttendance')
    },
    lol () {
      this.check = this.murid
    },
    demo () {
      this.$store.dispatch('demoEmail', 1)
      this.$store.dispatch('demoSMS', 1)
    },
    fecthAttendance () {
      this.$store.dispatch('fecthAttendance')
    }
  },
  computed: {
    Absen () {
      return this.$store.state.absen
    },
    murid () {
      if (this.filters) {
        return this.$store.state.student.filter(el => el.name.toLowerCase().includes(this.filters))
      } else {
        return this.$store.state.student
      }
    },
    hasilMurid () {
      return this.$store.getters.filterStudent
    },
    mapel (payload) {
      return this.$store.state.mapel
    },
    getAbsensi () {
      return this.$store.getters.getAbsensi
    }
  },
  created () {
    this.fetchTeacher()
    this.fetchclass()
    this.lol()
    this.fecthAttendance()
  },
  components: {
    Input,
    Check
  },
  watch: {
    murid (val, oldCount) {
      this.lol()
    },
    hasilMurid () {
      console.localStorage('hasil murid')
    },
    getAbsensi () {
      console.localStorage('owkdowo')
    }
  }
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
