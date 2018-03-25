<template>
    <div>
      <div class="page-header">
        <h1 class="page-title">
          Produtos
        </h1>
      </div>

      <div class="row row-cards row-deck">
        
        <ProdutoCard />
      
      </div>

    </div>
</template>

<script>
import ProdutoCard from '@/components/produtos/Card'

export default {
  name: 'Produtos',
  data () {
    return {
      title: 'Produtos',
      produtos: [],
      loading: true
    }
  },
  computed: {
    image: function(){
      return require('@/assets/images/photos/david-klaasen-54203-500.jpg')
    }  
  },
  methods: {
    /*listar: function() {
      get('produtos')
        .then(response => response.data)
        .then(response => {
          this.produtos = response.data
          this.loading = false
        })
        .catch(error => console.log(error))
    }*/
  },
  created: function(){
    // this.listar()
  },
  components: {
    ProdutoCard
  }
}
</script>
