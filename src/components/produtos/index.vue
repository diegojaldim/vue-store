<template>
    <div>
      <div class="page-header">
        <h1 class="page-title">
          Produtos
        </h1>
      </div>

      <div class="row row-cards row-deck">
        <produto-card v-bind:data="produto" v-for="produto in produtos" v-bind:key="produto.id"></produto-card>
      </div>

    </div>
</template>

<script>
import ProdutoCard from '@/components/produtos/Card'
import { request } from '@/helpers/Http'

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
      request('produtos')
        .then(response => response.data)
        .then(response => this.produtos = response.data)
        .catch(error => console.log(error))
    }
  },
  created: function(){
    this.listar()
  },
  components: {
    ProdutoCard
  }
}
</script>
