<template>
  <div class="row">
    <div class="col-lg-5">
      <div class="card card-profile">
        <div class="card-header produto-imagem" :style="background"></div>
        <div class="card-body text-center">
          <h3 class="mb-3">{{nome}}</h3>
          <h4>R$ {{preco}}</h4>
          <p class="mb-4">
            {{categoriasListaHtml}}
          </p>
          
          <div class="row">
            <div class="col-sm-4 offset-sm-4">
              <input type="number" class="form-control" name="quantidade" v-model="quantidade" >
            </div>
            <hr>
            <div class="col-sm-12">
              <pulse-loader :loading="loading.button"></pulse-loader>
              <button v-if="!loading.button && id != ''" class="btn btn-success" v-on:click="add">
                <span class="fe fe-shopping-cart"></span> Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7">
      <div class="card">
        <div class="card-body">
          <h4>Descrição</h4>
          <p>{{descricao}}</p>
          <router-link to="/produtos"><i class="fe fe-arrow-left"></i> Voltar</router-link>
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
  name: 'Detalhes',
  data () {
    return {
      id: '',
      nome: '',
      descricao: '',
      categorias: [],
      imagem: '',
      preco: '',
      quantidade: 1,
      loading: {
        button: false
      }
    }
  },
  methods: {
    detalhes: function(){
      const id = this.$route.params.id
      HTTP.get(`produtos/${id}`)
        .then(response => response.data.data)
        .then(response => {
          console.log(response)
          this.id = response.id
          this.nome = response.nome
          this.descricao = response.descricao
          this.categorias = response.categorias
          this.imagem = response.imagem
          this.preco = response.preco
        })
        .catch(error => console.log(error))
    },
    add: function(){
      this.loading.button = true
      add({
        id: this.id,
        nome: this.nome,
        preco: this.preco,
        quantidade: this.quantidade
      }).then(response => {
        this.loading.button = false
        if(response.data.success){
          this.quantidade = 1
          this.$notify('Produto adicionado com sucesso!')  
        }
      })
      .catch(error => console.log(error))
    }
  },
  created: function(){
    this.detalhes()
  },
  computed: {
    categoriasListaHtml: function(){
      return categoriasLista(this.categorias)
    },
    background: function(){
      return `background-image: url(${this.imagem});`
    }
  },
  components: {
    PulseLoader
  }
}
</script>

<style scoped>
  .produto-imagem{
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #FFFFFF;
  }
</style>
