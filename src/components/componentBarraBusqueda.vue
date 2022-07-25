<template>
  <div class="d-flex">
    <h3 class="me-3">{{titulo}}</h3>
    <div class="d-flex w-100 justify-content-center">
      <input class="w-50 me-3 form-control" type="text" v-model="nombreBuscar" @keyup.enter="buscar" :placeholder="'Buscar ' + nombre">
      <button class="btn btn-primary me-3" @click="buscar">Buscar</button>
      <slot></slot>
    </div>
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
  ],
  methods: {
    buscar(){
      this.$emit("buscar",this.nombreBuscar)
      this.nombreBuscar = ""
    },
  },
}
</script>