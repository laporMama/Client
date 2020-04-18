<template>
<div class="outer">
  <div>
    <b-tabs content-class="mt-3">
    <h1>MTK</h1>
      <b-tab title="Nilai" active>
        <b-table fixed responsive :items="items" :fields="fields">
          <template v-slot:cell(name)>
            <b-form-input type="number" max="100" min="0"></b-form-input>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Nilai UTS" active>
        <b-table fixed responsive :items="items" :fields="fields">
          <template v-slot:cell(name)>
            <b-form-input type="number" max="100" min="0"></b-form-input>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Nilai UAS" active>
        <b-table fixed responsive :items="items" :fields="fields">
          <template v-slot:cell(name)>
            <b-form-input type="number" max="100" min="0"></b-form-input>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="absen">
        <b-table fixed responsive :items="items" :fields="fields2">
          <template v-slot:cell(Hadir)="i">
            <b-form-checkbox
            @change="absensi(i)"
            >{{i.field.key}}{{Absen}}</b-form-checkbox>
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
</div>
</template>

<script>
export default {
  data () {
    return {
      absen: [],
      fields: ['id', 'fullname', 'nilai', { key: 'name', label: 'inputNilai' }],
      items: [
        { id: 40, fullname: 'Dickerson', nilai: 4 },
        { id: 49, fullname: 'Dickerson', nilai: 4 }
      ],
      fields2: ['id', 'fullname', { key: 'Hadir', label: 'Hadir' }, { key: 'izin', label: 'Izin' }, { key: 'sakit', label: 'sakit' }, { key: 'aplha', label: 'aplha' }]
    }
  },
  methods: {
    absensi (payload) {
      payload.item.status = payload.field.key
      this.$store.commit('SET_ABSENSI', payload.item)
    }
  },
  computed: {
    Absen () {
      return this.$store.state.absen
    }
  }
}
</script>

<style>
  /* .tabs {
    width: 1100px;
    padding-left:20px ;
  } */
</style>
