<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading" 
    :can-cancel="false" 
    :is-full-page="fullPage"></loading>
  </div>
</template>
 
<script>
  import Loading from 'vue-loading-overlay'
  import 'vue-loading-overlay/dist/vue-loading.css'
  
  export default {
    data() {
      return {
          isLoading: true,
          fullPage: true
      }
    },
    components: {
        Loading
    }
  }
</script> 