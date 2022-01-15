<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button  @click="getProductos()">Esto es un prueba</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods:{
    getProductos(){
      console.log('prueba')
      fetch("/api/productos")
        .then(response => response.json())
        .then(data => console.log(data));
    }
  },
  components: {
    HelloWorld
  }
}
</script>
