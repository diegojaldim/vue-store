<template>
  <div class="page">
      <div class="page-main">
          <div class="header">
              <div class="container">
                <div class="navbar p-0">
                  <a class="navbar-brand" href="/">
                    <img src="./assets/brand/tabler.svg" class="navbar-brand-img" alt="tabler.io">
                  </a>
                  <div class="nav order-lg-2">
                    <div class="nav-item">
                      <a href="https://github.com/tabler/tabler" class="btn btn-sm btn-outline-primary" target="_blank">Source code</a>
                    </div>
                    <div class="dropdown d-none d-md-flex">
                      <a class="nav-link icon" data-toggle="dropdown">
                        <i class="fe fe-message-square"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto asperiores dolorem, est fugiat in maxime natus officia velit voluptas! Ab asperiores
                        delectus dolore dolores maxime nesciunt qui quia totam.
                      </div>
                    </div>
                    <div class="dropdown d-none d-md-flex">
                      <a class="nav-link icon" data-toggle="dropdown">
                        <i class="fe fe-bell"></i>
                        <span class="nav-unread"></span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto asperiores dolorem, est fugiat in maxime natus officia velit voluptas! Ab asperiores
                        delectus dolore dolores maxime nesciunt qui quia totam.
                      </div>
                    </div>
                    <div class="dropdown ml-3">
                      <a href="#" class="nav-link" data-toggle="dropdown">
                        <span class="avatar" style="background-image: url(./assets/images/faces/female/25.jpg)"></span>
                        <span class="ml-2 d-none d-lg-block">
                          <span class="text-default">Jane Pearson</span>
                          <small class="text-muted d-block mt-1">Administrator</small>
                        </span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">
                          <span>Profile</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span>Settings</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span class="float-right"><span class="badge badge-primary">6</span></span>
                          <span>Inbox</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <span>Message</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Need help? </a>
                        <a class="dropdown-item" href="#">Sign out</a>
                      </div>
                    </div>
                  </div>
                  <div class="collapse navbar-collapse order-lg-1" id="navbarToggler">
                    <ul class="navbar-nav mt-2 mt-lg-0 mx-0 mx-lg-2">
                      <li class="nav-item"><a href="#" class="nav-link">Dashboard</a></li>
                      <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Projects</a>
                        <div class="dropdown-menu mt-2 text-color" role="menu">
                          <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-tag"></i> Action </a>
                          <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-pencil"></i> Another action </a>
                          <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-reply"></i> Something else here</a>
                          <div class="dropdown-divider"></div>
                          <a href="#" class="dropdown-item"><i class="dropdown-icon fa fa-ellipsis-h"></i> Separated link</a>
                        </div>
                      </li>
                    </ul>
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
                    <router-link to="/" class="nav-link"><i class="fe fe-home"></i> Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/produtos" class="nav-link"><i class="fe fe-box"></i> Produtos</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/carrinho" class="nav-link"><i class="fe fe-shopping-cart"></i> Carrinho</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pedidos" class="nav-link"><i class="fe fe-list"></i> Pedidos</router-link>
                  </li>
                </ul>
              </div>
              <div class="col-3 ml-auto">
                <form class="input-icon">
                  <input type="search" class="form-control header-search" placeholder="Procurar..." tabindex="1">
                  <div class="input-icon-addon">
                    <i class="fe fe-search"></i>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="app" class="page-content">
          <div class="container">
            <router-view/>
            <notifications/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
