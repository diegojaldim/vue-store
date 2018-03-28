<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Pedidos</h3>
        </div>
        <div class="card-body">
          <pulse-loader :loading="loading" class="text-center"></pulse-loader>
          <table class="table" v-if="!loading">
            <thead>
              <tr>
                <th>ID</th>
                <th>Endereço de entrega</th>
                <th>Status de pagamento</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in lista" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.endereco_entrega}}</td>
                <td>{{item.status.nome}}</td>
                <td>
                  <router-link :to="to(item.id)" class="btn btn-primary" title="Detalhes do pedido"><i class="fe fe-info"></i></router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/helpers/http-common'
import PulseLoader from 'vue-spinner/src/Pulseloader.vue'

export default {
  name: 'Pedidos',
  data () {
    return {
      lista: [],
      loading: true
    }
  },
  methods: {
    listar: function(){
      HTTP.get('pedidos')
        .then(response => response.data)
        .then(response => {
          this.lista = response.data
          this.loading = false
        })
        .catch(error => console.log(error))
    },
    to: function(id){
      return `/pedidos/${id}`
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