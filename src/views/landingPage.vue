<template>
<div class="outer">
  <b-col  cols="2">
    <div class="sidenav">
      <b-navbar-brand>Kelas</b-navbar-brand>
      <b-navbar-toggle target="navbar-toggle-collapse" class="kelas">
        <template v-slot:default="{ expanded }">
          <b>Kelas IX </b><b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-navbar-nav>
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-dropdown-item :to="{path: '/teacher/IX/A'}">A</b-dropdown-item>
          <b-dropdown-item :to="{path: '/teacher/IX/B'}">B</b-dropdown-item>
        </b-collapse>
      </b-navbar-nav>
      <b-navbar-toggle target="navbar-toggle-collapse2" class="kelas">
        <template v-slot:default="{ expanded }">
          <b>Kelas VIII </b><b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-navbar-nav>
        <b-collapse id="navbar-toggle-collapse2" is-nav>
          <b-dropdown-item :to="{path: '/teacher/IX/A'}">A</b-dropdown-item>
          <b-dropdown-item :to="{path: '/teacher/IX/B'}">B</b-dropdown-item>
        </b-collapse>
      </b-navbar-nav>
      <b-navbar-toggle target="navbar-toggle-collapse3" class="kelas">
        <template v-slot:default="{ expanded }">
          <b>Kelas VII </b><b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>
      <b-navbar-nav>
        <b-collapse id="navbar-toggle-collapse3" is-nav>
          <b-dropdown-item :to="{path: '/teacher/IX/A'}">A</b-dropdown-item>
          <b-dropdown-item :to="{path: '/teacher/IX/B'}">B</b-dropdown-item>
        </b-collapse>
      </b-navbar-nav>
    </div>
  </b-col>
  <b-col cols="10">
    <div class="main">
      <router-view />
    </div>
  </b-col>
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
  .sidenav {
    display: flex;
    flex-direction: column;
  }
  .class {
    margin-top: 50px;
  }
  .outer {
    display: flex;
  }
  /* .tabs {
    width: 1100px;
    padding-left:20px ;
  } */
</style>
