<template>
  <div class="row">
    <div class="col-sm-8">
      <form class="card" v-on:submit.prevent="checkout">
        <div class="card-header">
          <h3 class="card-title">Checkout</h3>
        </div>
        <div class="card-body">
          <div v-if="alerta != ''" class="alert alert-danger">{{ alerta }}</div>
          
          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label">Endereço de entrega</label>
                <input type="text" :class="form.endereco.class" name="endereco" v-model="form.endereco.value" placeholder="Digite aqui o endereço de entrega do seu produto">
              </div>
            </div>
            <hr>
            <div class="col-md-12">
              <pulse-loader :loading="loading.checkout" v-if="loading.checkout"></pulse-loader>
              <button class="btn btn-success" type="submit" v-if="!loading.checkout">Efetuar pagamento</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="col-sm-4">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Detalhes do pedido</h3>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <pulse-loader class="text-center" :loading="loading.detalhes"></pulse-loader>
              <div v-if="!loading.detalhes">
                <p>Itens: {{itens}}</p>
                <p>Quantidade: {{quantity}}</p>
                <p>Total: R$ {{total}}</p>
              </div>
            </div>
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
  name: 'Checkout',
  data () {
    return {
      itens: 0,
      quantidade: 0,
      total: 0,
      alerta: '',
      loading: {
        detalhes: true,
        checkout: false
      },
      form: {
        endereco: {
          value: '',
          class: 'form-control'
        }
      },
    }
  },
  methods: {
    cart: function(){
      HTTP.get('carts')
        .then(response => response.data.data.cart)
        .then(cart => {
          this.itens = cart.count
          this.quantity = cart.quantity
          this.total = cart.total
          this.loading.detalhes = false
        })
        .catch(error => console.log(error))
    },
    checkout: function(){
      let valid = true

      this.form.endereco.class = 'form-control'
      this.alerta = ''

      if(!this.form.endereco.value){
        this.form.endereco.class = 'form-control is-invalid'
        valid = false
      }

      if(!valid){
        this.alerta = 'Revise os campos em vermelho'
      }else{
        this.loading.checkout = true
        
        HTTP.post('pedidos', {
          endereco_entrega: this.form.endereco.value,
        }).then(response => response.data)
          .then(response => {
            if(response.success){
              this.$notify('Pedido efetuado com sucesso')
              this.$router.push('/pedidos')
            }
          })
          .catch(error => console.log(error))
      }
    }
  },
  created: function(){
    this.cart()
  },
  components: {
    PulseLoader
  }
}
</script>