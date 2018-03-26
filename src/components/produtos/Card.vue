<template>
  <div class="col-sm-3">
    <div class="card">
      <a href="#"><img class="card-img-top" :src="data.imagem" v-bind:alt="data.nome"></a>
      <div class="card-body d-flex flex-column">
        <h4><a href="#">{{data.nome}}</a></h4>
        <div class="text-muted">{{ categorias }}</div>
        <div class="d-flex align-items-center pt-5 mt-auto">
          <div>
            <a href="javascript:void(0)" class="text-default">R$ {{data.preco}}</a>
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
  </div>
</template>

<script>
import { HTTP } from '@/helpers/http-common'
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
        let string = ''
        this.data.categorias.map(item => {
          string += `- ${item.nome}`
        })
        return string
      }
  },
  methods: {
    add: function(){
      this.loading.button = true
      HTTP.post('carts', {
        id: this.data.id,
        name: this.data.nome,
        price: this.data.preco,
        quantity: 1
      })
      .then(response => {
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
