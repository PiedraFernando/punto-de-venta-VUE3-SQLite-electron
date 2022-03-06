<template>
  <div class="container mt-3">
    <h1>Estadisiticas</h1>
    <form @submit.prevent="calcularGanancias" class="row">
      <div class="mb-3 col">
        <label for="fechainicio" class="form-label">Fecha inicio</label>
        <input v-model="fechaInicio" type="date" class="form-control">  
      </div>
      <div class="mb-3 col">
        <label for="fechaFin" class="form-label">Fecha fin</label>
        <input v-model="fechaFin" type="date" class="form-control">  
      </div>
      <input type="submit" name="Calcular" class="btn btn-primary">
    </form>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Folio</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio venta</th>
          <th scope="col">Subtotal</th>
          <th scope="col">fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venta in ventas" :key="venta.id">
          <th scope="col">{{venta.folio}}</th>
          <th scope="col">{{venta.nombre}}</th>
          <th scope="col">{{venta.cantidad}}</th>
          <th scope="col">{{venta.precioVenta}}</th>
          <th scope="col">{{venta.subtotal}}</th>
          <th scope="col">{{new Date(parseInt(venta.fecha)).toDateString()}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Venta',
  data(){
    return{
      ventas: [],
      fechaInicio:'',
      fechaFin:'',
    }
  },
  created(){
    this.getAllVentas()
  },
  methods:{
    getAllVentas(){
      fetch("http://localhost:5000/api/venta",{
        method:'GET',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        this.ventas = data.result
      });
    },
    calcularGanancias(){
      console.log(new Date(this.fechaInicio).getTime())
      console.log(new Date(this.fechaFin).getTime())
    }
  },
}
</script>
