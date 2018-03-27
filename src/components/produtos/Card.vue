<template>
  <div class="card">
    <router-link :to="to">
      <div class="imagem-produto" :style="background" ></div>
    </router-link>
    <div class="card-body">
      <h4><router-link :to="to">{{data.nome}}</router-link></h4>
      <div class="text-muted">{{ categorias }}</div>
      <div class="d-flex align-items-center pt-5 mt-auto">
        <div>
          R$ {{data.preco}}
        </div>
        <div class="ml-auto text-muted">
          <pulse-loader :loading="loading.button"></pulse-loader>
          <button v-if="!loading.button" class="btn btn-success" title="Adicionar produto ao carrinho" v-on:click="add" >
            <i class="fe fe-shopping-cart mr-1"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/helpers/http-common'
import { categoriasLista, add } from '@/helpers/produtos'
import PulseLoader from 'vue-spinner/src/Pulseloader.vue'

export default {
  name: 'ProdutoCard',
  props: ['data'],
  data () {
    return {
      loading: {
        button: false
      }
    }
  },
  computed: {
    categorias: function(){
      return categoriasLista(this.data.categorias)
    },
    background: function(){
      return  `background-image: url('${this.data.imagem}')`
    },
    to: function(){
      return `produtos/${this.data.id}`
    }
  },
  methods: {
    
    add: function(){
      this.loading.button = true
      add({
        id: this.data.id,
        nome: this.data.nome,
        preco: this.data.preco,
        quantidade: 1
      }).then(response => {
        this.loading.button = false
        if(response.data.success){
          this.$notify('Produto adicionado com sucesso!')  
        }
      })
      .catch(error => console.log(error))
    }
  },
  components: {
    PulseLoader
  }
}
</script>

<style scopped>
  .imagem-produto{
    border: 1px solid #fff;
    height: 180px;
    background-position: center;
    background-size: cover;
  }
</style>












