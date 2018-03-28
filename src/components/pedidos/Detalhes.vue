<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <h1 class="card-title">Pedido {{info.id}}</h1>
        </div>
        <div class="card-body">
          <pulse-loader :loading="loading" class="text-center"></pulse-loader>
          
          <div v-if="!loading">
            <p><router-link to="/pedidos"><i class="fe fe-arrow-left"></i> Voltar</router-link></p>

            <p>Status: {{info.status.nome}}</p>
            <p>Endereço de entrega: {{info.endereco_entrega}}</p>
            <p>Total: R$ {{info.total}}</p>
            <hr>
            <p>Produtos</p>
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in info.items" v-bind:key="item.id">
                  <td>{{item.produto.id}}</td>
                  <td>{{item.produto.nome}}</td>
                  <td>R$ {{item.produto.preco}}</td>
                </tr>
              </tbody>
            </table>

            <p><router-link to="/pedidos"><i class="fe fe-arrow-left"></i> Voltar</router-link></p>
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
  name: 'Detalhes',
  data () {
    return {
      loading: true,
      info: {}
    }
  },
  methods: {
    detalhes: function(){
      const id = this.$route.params.id
      HTTP.get(`pedidos/${id}`)
        .then(response => response.data.data)
        .then(response => {
          console.log(response)
          this.info = response
          this.loading = false
        })
        .catch(error => console.log(error))
    }
  },
  created: function(){
    this.detalhes()
  },
  components: {
    PulseLoader
  }
}
</script>