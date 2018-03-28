<template>
  <div>
    <div class="row">
      <div class="col col-login mx-auto">
        <div class="text-center mb-6">
          <img src="../../assets/brand/tabler.svg" class="h-6" alt="">
        </div>
        <form class="card" v-on:submit.prevent="login">
          <div class="card-body p-6">
            <div class="card-title text-center">Login</div>
            <div v-if="alerta != ''" class="alert alert-danger">{{ alerta }}</div>
            <div class="form-group">
              <label class="form-label">E-mail</label>
              <input type="email" :class="form.email.class" v-model="form.email.value" name="email">
            </div>
            <div class="form-group">
              <label class="form-label">
                Senha
              </label>
              <input type="password" :class="form.password.class" v-model="form.password.value" name="senha">
            </div>
            <div class="form-footer text-center">
              <pulse-loader :loading="loading" ></pulse-loader>
              <button type="submit" v-if="!loading" class="btn btn-primary btn-block btn-lg"><i class="fe fe-lock"></i> Entrar</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted">
          Não possui registro? <a href="./register.html">Crie uma conta</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/helpers/http-common'
import PulseLoader from 'vue-spinner/src/Pulseloader.vue'

export default {
  name: 'Login',
  data () {
    return {
      alerta: '',
      loading: false,
      form: {
        email: {
          value: '',
          class: 'form-control'
        },
        password: {
          value: '',
          class: 'form-control'
        }
      }
    }
  },
  methods: {
    login: function(){
      let valid = true

      this.alerta = ''
      this.form.email.class = 'form-control'
      this.form.password.class = 'form-control'

      if(!this.form.email.value){
        valid = false
        this.form.email.class = 'form-control is-invalid'
      }

      if(!this.form.password.value){
        valid = false
        this.form.password.class = 'form-control is-invalid'
      }

      if(!valid){
        this.alerta = 'Revise os campos em vermelho'
      }else{
        this.loading = true
        HTTP.post('login', {
          email: this.form.email.value,
          password: this.form.password.value
        }).then(response => response.data)
          .then(response => {
            localStorage.setItem('token', response.success.token)
            this.loading = false
            this.$router.push('/pedidos')
            this.$router.go(this.$route.path)
          })
          .catch(error => {
            this.alerta = 'Login ou senha inválido'
            this.loading = false
          })
      }
    }
  },
  components: {
    PulseLoader
  }
}
</script>
