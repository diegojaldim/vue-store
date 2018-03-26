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
          <table class="table">
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
                <td><button class="btn btn-danger btn-sm" title="Excluir"><i class="fe fe-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
          <hr>
          <div class="col-sm-12">
            <p>Itens: {{itens}}</p>
            <p>Quantidade: {{quantidade}}</p>
            <p>Total: R$ {{total}}</p>
            <router-link to="checkout" style="margin-bottom: 25px" class="btn btn-success btn-lg">Pagamento</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      field: []
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
        })
        .catch(error => console.log(error))
    },
    atualizar: function(id, value){
      console.log('Aguarde...')
      HTTP.put(`carts/${id}`, {
        quantity: value.toString()
      }).then(response => console.log(response))
        .catch(error => console.log(error))
    }
  },
  created: function(){
    this.listar()
  }
}
</script>
