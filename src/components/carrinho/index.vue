<template>
  <div class="col-md-12">
    <div class="page-header">
      <h1 class="page-title">
        Meu carrinho
      </h1>
    </div>

    <div class="row row-cards row-deck">
      <div class="col-sm-12">
        <div class="card">
          <div id="loading" v-if="loading">
            <pulse-loader id="loading" :loading="loading"></pulse-loader>
          </div>
          
          <h4 id="carrinho-mensagem" v-if="produtos.length == 0 && !loading">O seu carrinho de compras está vazio. <router-link to="produtos" class="link">Conheça nossos produtos</router-link></h4>
          
          <table class="table" v-if="!loading && produtos.length > 0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="produto in produtos" v-bind:key="produto.id">
                <td>{{ produto.id }}</td>
                <td>{{ produto.name }}</td>
                <td>R$ {{ produto.price }}</td>
                <td>{{ produto.quantity }}</td>
                <td><button v-on:click="excluir(produto.id)" class="btn btn-danger btn-sm" title="Excluir"><i class="fe fe-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
          
          <hr/>
          <div class="col-sm-12" v-if="!loading && produtos.length > 0">
            <p>Itens: {{itens}}</p>
            <p>Quantidade: {{quantidade}}</p>
            <p>Total: R$ {{total}}</p>
            <router-link to="checkout" style="margin-bottom: 25px" class="btn btn-success">Avançar <i class="fe fe-arrow-right"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/Pulseloader.vue'
import { HTTP } from '@/helpers/http-common'

export default {
  name: 'Carrinho',
  data () {
    return {
      title: 'Carrinho',
      produtos: [],
      quantidade: 0,
      total: 0,
      itens: 0,
      loading: true
    }
  },
  methods: {
    listar: function(){
      HTTP.get('carts')
        .then(response => response.data)
        .then(response => {
          this.produtos = _.map(response.data.cart.items)
          this.quantidade = response.data.cart.quantity
          this.itens = response.data.cart.count
          this.total = response.data.cart.total
          this.loading = false
        })
        .catch(error => console.log(error))
    },
    excluir: function(id){
      if(confirm('Deseja excluir este produto do seu carrinho?')){
        this.loading = true
        HTTP.delete(`carts/${id}`)
          .then(response => {
            if(response.data.success){
              this.$notify('Produto excluído com sucesso')
              this.listar()
            }
          })
          .catch(error => console.log(error))
      }
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

<style scoped>
#loading{
  margin-top: 20px;
  text-align: center;
}

#carrinho-mensagem{
  padding: 20px;
}

#carrinho-mensagem .link{
  color :#729ef7
}
</style>