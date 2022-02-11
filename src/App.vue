<template>
  <div id="nav">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tlapaleria Piedra</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Almacen</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ventas">Ventas</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/estadisticas">Estadisticas</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  </div>
  <router-view/>
</template>

<script>
  require('./backend/server')
</script>

<style>

#nav a.router-link-exact-active {
  color: white;
}

</style>
