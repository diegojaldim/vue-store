<template>
  <div>
    
    <div class="row" style="margin-bottom:25px;">
      <div class="col-lg-8">  
        <h1 class="page-title">Produtos</h1>
      </div>
      <div class="col-lg-4">
        <form v-on:submit.prevent="listar">
          <div class="input-group">
            <input type="text" class="form-control" v-model="busca" placeholder="Digite o nome do produto..." >
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="submit"><i class="fe fe-search"></i> Buscar</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <categorias />
      </div>
      
      <div  class="col-sm-9">
        <div class="row">
          <div class="col-md-12 text-center">
            <pulse-loader :loading="loading"></pulse-loader>
          </div>
          <div class="col-sm-4" v-for="produto in produtos" v-bind:key="produto.id">
            <produto-card v-bind:data="produto"></produto-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProdutoCard from '@/components/produtos/Card'
import PulseLoader from 'vue-spinner/src/Pulseloader.vue'
import Categorias from '@/components/produtos/Categorias'
import { HTTP } from '@/helpers/http-common'

export default {
  name: 'Produtos',
  data () {
    return {
      title: 'Produtos',
      produtos: [],
      loading: true,
      busca: ''
    }
  },
  methods: {
    listar: function() {
      this.produtos = []
      this.loading = true
      const busca = this.busca
      HTTP.get(`produtos?search=${busca}`)
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
    PulseLoader,
    Categorias
  }
}
</script>
