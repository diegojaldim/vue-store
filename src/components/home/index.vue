<template>
  <div>
    <div class="col-md-12">
      <div class="card">
        <div class="card-status bg-green"></div>
        <div class="card-header">
          <h2 class="card-title">{{ title }}</h2>
          <div class="card-options">
            <a href="#" class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>
            <a href="#" class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a>
          </div>
        </div>
        <div class="card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Bem vindo(a) a Loja Virtual desenvolvida em Vue.js'
    }
  }
}
</script>
