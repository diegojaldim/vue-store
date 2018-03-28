<template>
  <div class="page">
    <header-app v-if="header" />
    <div class="page-main">
      <div id="app" class="page-content">
        <div class="container">
          <router-view/>
          <notifications/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/header'

export default {
  name: 'App',
  data(){
    return {
      header: false
    }
  },
  created: function(){
    if(localStorage.getItem('token')){
      this.header = true
    }
  },
  components: {
    HeaderApp
  }
}
</script>
