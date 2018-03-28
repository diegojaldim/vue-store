<template>
  <div>
    <div class="row">
      <div class="col col-login mx-auto">
        <div class="text-center mb-6">
          <img src="../../assets/brand/tabler.svg" class="h-6" alt="">
        </div>
        <form class="card" v-on:submit.prevent="cadastrar">
          <div class="card-body p-6">
            <div class="card-title text-center">Cadastre-se</div>
            <div v-if="alerta != ''" class="alert alert-danger">{{ alerta }}</div>
            <div class="form-group">
              <label class="form-label">Nome</label>
              <input type="text" :class="form.name .class" v-model="form.name.value" name="nome">
            </div>
            <div class="form-group">
              <label class="form-label">E-mail</label>
              <input type="email" :class="form.email.class" v-model="form.email.value" name="email">
            </div>
            <div class="form-group">
              <label class="form-label">Senha</label>
              <input type="password" :class="form.password.class" v-model="form.password.value" name="senha">
            </div>
            <div class="form-group">
              <label class="form-label">Confirmar Senha</label>
              <input type="password" :class="form.c_password.class" v-model="form.c_password.value" name="c_senha">
            </div>
            <div class="form-footer text-center">
              <pulse-loader :loading="loading" ></pulse-loader>
              <button type="submit" v-if="!loading" class="btn btn-primary btn-block btn-lg"><i class="fe fe-user"></i> Cadastrar</button>
            </div>
          </div>
        </form>
        <div class="text-center text-muted">
          <router-link to="login"><i class="fe fe-arrow-left"></i> Voltar</router-link>
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
        name: {
          value: '',
          class: 'form-control'
        },
        email: {
          value: '',
          class: 'form-control'
        },
        password: {
          value: '',
          class: 'form-control'
        },
        c_password: {
          value: '',
          class: 'form-control'
        }
      }
    }
  },
  methods: {
    cadastrar: function(){
      let valid = true

      this.alerta = ''
      this.form.name.class = 'form-control'
      this.form.email.class = 'form-control'
      this.form.password.class = 'form-control'
      this.form.c_password.class = 'form-control'

      if(!this.form.name.value){
        valid = false
        this.form.name.class = 'form-control is-invalid'
      }

      if(!this.form.email.value){
        valid = false
        this.form.email.class = 'form-control is-invalid'
      }

      if(!this.form.password.value){
        valid = false
        this.form.password.class = 'form-control is-invalid'
      }

      if(!this.form.c_password.value){
        valid = false
        this.form.c_password.class = 'form-control is-invalid'
      }

      if(!valid){
        this.alerta = 'Revise os campos em vermelho'
      }else{
        this.loading = true
        HTTP.post('register', {
          name: this.form.name.value,
          email: this.form.email.value,
          password: this.form.password.value,
          c_password: this.form.c_password.value
        })
        .then(response => response.data)
        .then(response => {
          localStorage.setItem('token', response.success.token)
          this.loading = false
          this.$router.push('/pedidos')
          this.$router.go(this.$route.path)
        })
        .catch(error => console.log(error))
      }
    }
  },
  components: {
    PulseLoader
  }
}
</script>
