<template>
  <div class="row">
    <h3 class="col-lg-3 col-sm-12">{{titulo}}</h3>
    <template v-if="opcion">
      <input type="text" v-model="nombreBuscar" @keyup.enter="buscar" :placeholder="'Buscar ' + nombre" class="col-lg-4 col-sm-12">
      <button class="btn btn-primary col-lg-1 col-sm-12" @click="buscar">Buscar</button>
      <div class="col-1"></div>
      <button class="btn btn-success col-lg-3 col-sm-12" @click="agregar">{{opcion}} {{nombre}}</button>
    </template>
    <template v-else>
      <input type="text" v-model="nombreBuscar" @keyup.enter="buscar" :placeholder="'Buscar ' + nombre" class="col-lg-7 col-sm-12">
      <button class="btn btn-primary col-lg-1 col-sm-12" @click="buscar">Buscar</button>
    </template>
  </div>
</template>

<script>
export default {
  name:"componenteBarraBusqueda",
  data(){
    return{
      nombreBuscar:""
    }
  },
  props:[
    'titulo',
    'nombre',
    'extra',
    'opcion'
  ],
  methods: {
    agregar(){
      this.$emit("agregar")
    },
    buscar(){
      this.$emit("buscar",this.nombreBuscar)
      this.nombreBuscar = ""
    },
    btnExtra(){
      this.$emit("extra")
    }  
  },
}
</script>

<style scoped>
    
</style>