<template>
  <div class="row">
    <h3 class="col-lg-3 col-sm-12">{{titulo}}</h3>
    <input type="text" v-model="nombreBuscar" :placeholder="'Buscar ' + nombre" class="col-lg-4 col-sm-12">
    <button class="btn btn-primary col-lg-1 col-sm-12" @click="buscar">Buscar</button>
    <div class="col-1"></div>
    <button class="btn btn-success col-lg-3 col-sm-12" @click="agregar">Agregar {{nombre}}</button>
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
    'extra'
  ],
  methods: {
    agregar(){
      this.$emit("agregar")
    },
    buscar(){
      this.$emit("buscar",this.nombreBuscar)
    },
    btnExtra(){
      this.$emit("extra")
    }  
  },
}
</script>

<style scoped>
    
</style>