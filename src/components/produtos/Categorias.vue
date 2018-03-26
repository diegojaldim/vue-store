<template>
  <div class="list-group">
    <pulse-loader :loading="loading"></pulse-loader>    
    <router-link to="produtos" v-for="item in lista" v-bind:key="item.id" class="list-group-item list-group-item-action">{{item.nome}}</router-link>
  </div>
</template>

<script>
import { HTTP } from '@/helpers/http-common'
import PulseLoader from 'vue-spinner/src/Pulseloader.vue'

export default {
  name: 'Categorias',
  data () {
    return {
      lista: [],
      loading: true
    }
  },
  methods: {
    listar: function() {
      HTTP.get('categorias')
        .then(response => response.data.data)
        .then(response => {
          this.lista = response
          this.loading = false
        })
        .catch(error => console.log(error))
    }
  },
  created: function(){
    this.listar()
  },
  components: {
    PulseLoader
  }
}
</script>
