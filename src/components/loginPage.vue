<template>
  <b-card>
    <b-aspect :aspect="aspect">
      <div class="container atas">
        <div class="title">
          <h1>Welcome to Lapor Mama</h1>
        </div>
        <b-row class="chooseLogin atas">
          <b-col>
            <b-button variant="outline-primary" id="tooltip-target-1" size="lg" :to="{path: '/login'}"  @click.prevent="role('Mama')">Mama</b-button>
            <b-img src="https://i.ibb.co/748qHyq/hiclipart-com.png" fluid-grow alt="Responsive image"></b-img>
          </b-col>
          <div>
            <b-img src="https://i.ibb.co/PTWG4Jt/naninu.jpg" fluid-grow alt="Responsive image"></b-img>
          </div>
          <b-col>
            <b-button variant="outline-primary" id="tooltip-target-2" size="lg" :to="{path: '/login'}" @click.prevent="role('Guru')">Guru</b-button>
            <b-img src="https://i.ibb.co/Vqh2v1B/kissclipart-cartoon-blackboard-clip-art-teacher-3a416c36cf682bfe.png" fluid-grow alt="Responsive image"></b-img>
          </b-col>
        </b-row>
          <b-tooltip target="tooltip-target-1" triggers="hover" placement="topleft">
            Login As Mama
          </b-tooltip>
          <b-tooltip target="tooltip-target-2" triggers="hover" placement="topright">
            Login As Guru
          </b-tooltip>
      </div>
    </b-aspect>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      aspect: '16:9',
      aspects: { text: '3:1 (APS-P)', value: '3:1' }
    }
  },
  methods: {
    role (payload) {
      this.$store.commit('SET_LOGINROLE', payload)
    }
  }
}
</script>

<style>
.atas {
  margin-top: 10vh;
}
</style>
