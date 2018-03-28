<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="navbar p-0">
          <a class="navbar-brand" href="/">
            <img src="../../assets/brand/tabler.svg" class="navbar-brand-img" alt="tabler.io">
          </a>
          <div class="nav order-lg-2">
            <div class="dropdown ml-3">
              <a href="#" class="nav-link" data-toggle="dropdown">
                <span class="ml-2 d-none d-lg-block">
                  <span class="text-default">Bem-vindo(a)</span>
                </span>
              </a>
            </div>
            <div class="nav-item">
              <button class="btn btn-sm btn-outline-primary" v-on:click="logout">Sair</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-nav d-none d-lg-flex">
      <div class="container">
        <div class="row align-items-center">
          <div class="col">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <router-link to="/pedidos" class="nav-link"><i class="fe fe-list"></i> Pedidos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/produtos" class="nav-link"><i class="fe fe-box"></i> Produtos</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/carrinho" class="nav-link"><i class="fe fe-shopping-cart"></i> Carrinho</router-link>
              </li>
            </ul>
          </div>
          <div class="col-3 ml-auto"></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    logout: function(){
      if(confirm('Deseja sair?')){
        localStorage.clear()
        this.$router.push('/login')
        this.$router.go(this.$route.path)
      }
    }
  }
}
</script>
