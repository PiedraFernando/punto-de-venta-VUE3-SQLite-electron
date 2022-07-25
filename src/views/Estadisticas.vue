<template>
  <div class="container mt-3">
    <h1>Estadisiticas</h1>
    <form @submit.prevent="getVentasInRange" class="row">
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
    <div class="">
      <h2>Ventas:{{this.totalVentas}}</h2>
    </div>
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
          <th scope="col">{{venta.precioventa}}</th>
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
      totalVentas: 0,
      totalGanancias: 0,
    }
  },
  created(){
    //this.getAllVentas();
  },
  methods:{
    getVentasInRange(){
      let data = {
        fechaInicio: new Date(this.fechaInicio).getTime(),
        fechaFin: new Date(this.fechaFin).getTime()
      }
      fetch("http://localhost:5000/api/venta/inRange",{
        method:'POST',
        body: JSON.stringify(data),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        this.ventas = data.res
        this.ventas.forEach((venta) =>{
          this.totalVentas += venta.subtotal;
        })
      });
    },
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
  },
}
</script>
