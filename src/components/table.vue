<template>
<div class="outer">
  <div>
    <b-tabs content-class="mt-3">
    <h1>{{mapel.name}}</h1>
      <b-tab title="Nilai" active>
        <b-table fixed responsive  :items="murid" :fields="fields" style="{display:flex; flex-direction:row}">
          <template v-slot:cell(inputnilai)="i">
            <Input :data="i" :date="date" :type="'nilai'" :CourseId="mapel.id" />
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Nilai UTS" active>
        <b-table fixed responsive :items="murid" :fields="fieldsUts">
          <template v-slot:cell(inputnilai)="i">
            <Input :data="i" :date="date" :type="'uts'" :CourseId="mapel.id" />
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Nilai UAS" active>
        <b-table fixed responsive :items="murid" :fields="fieldsUas">
          <template v-slot:cell(inputnilai)="i">
            <Input :data="i" :date="date" :type="'uas'" :CourseId="mapel.id" />
          </template>
        </b-table>
      </b-tab>
      <b-tab title="absen">
        <b-table fixed responsive :items="murid" :fields="fields2">
          <template v-slot:cell(hadir)="i">
            <Check :data="i"  @absensis="absensis" />
          </template>
        </b-table>
    <b-button @click.prevent="pushAttendance">submit</b-button>
        </b-tab>
    </b-tabs>
  </div>
  <!-- {{hasilMurid}} -->
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
      date: moment().format('L'),
      nilai: 0,
      statusAbsen: false,
      fields: ['id', 'name', 'Nilai', 'inputnilai'],
      fieldsUas: ['id', 'name', 'NilaiUas', 'inputnilai'],
      fieldsUts: ['id', 'name', 'NilaiUts', 'inputnilai'],
      fields2: ['id', 'name', { key: 'hadir', label: 'absen' }]
    }
  },
  methods: {
    absensi (payload) {
      payload.item.status = payload.field.key
      this.$store.commit('SET_ABSENSI', payload.item)
    },
    updateNilai (payload) {
      this.$store.dispatch('UpdateNilai', payload)
    },
    fetchclass () {
      this.$store.dispatch('Fetchclass')
    },
    fetchTeacher () {
      this.$store.dispatch('fetchTeacher', localStorage.getItem('id'))
      this.$store.dispatch('fetchStudentInClass')
    },
    changeStatus () {
      this.changeStatus = !this.changeStatus
    },
    absensis (event) {
      this.absen.forEach((el, id) => {
        if (el.id === event.id) {
          this.absen.splice(id, 1)
        }
      })
      this.absen.push(event)
    },
    pushAttendance () {
      this.$store.dispatch('setAttendance', this.absen)
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
  },
  components: {
    Input,
    Check
  },
  watch: {
    murid: function (val) {
      console.log(val, 'ini')
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
