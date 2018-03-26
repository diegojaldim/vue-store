<template>
  <div class="col-md-12">
    <div class="page-header">
      <h1 class="page-title">
        Produtos
      </h1>
    </div>

    <div class="row row-cards row-deck">
      <div class="col-md-12 text-center">
        <pulse-loader :loading="loading"></pulse-loader>
      </div>
      
      <produto-card v-bind:data="produto" v-for="produto in produtos" v-bind:key="produto.id"></produto-card>
    </div>
  </div>
</template>

<script>
import ProdutoCard from '@/components/produtos/Card'
import PulseLoader from 'vue-spinner/src/Pulseloader.vue'
import { HTTP } from '@/helpers/http-common'

export default {
  name: 'Produtos',
  data () {
    return {
      title: 'Produtos',
      produtos: [],
      loading: true
    }
  },
  methods: {
    listar: function() {
      HTTP.get('produtos')
        .then(response => response.data)
        .then(response => {
          this.produtos = response.data
          this.loading = false
        })
        .catch(error => console.log(error))
    }
  },
  created: function(){
    this.listar()
  },
  components: {
    ProdutoCard,
    PulseLoader
  }
}
</script>
