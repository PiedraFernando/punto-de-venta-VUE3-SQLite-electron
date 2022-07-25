<template>
  <div class="container mt-3">
    <componentBarraBusqueda titulo="Ventas" nombre="producto" @buscar='searchProduct'/>
    <div class="container">
      <componentModalTabla :productos="productosBuscados" @agregar="agregar"/>
      <componentTableVenta :productos='productos'/>
      <div class="d-flex justify-content-between">
        <p class="h2">Total:${{calcularTotal}}</p>
        <button class="btn btn-success btn-lg" @click="vender">Cobrar</button>
      </div>
    </div>
  </div>
</template>


<script>
import componentBarraBusqueda from '../components/componentBarraBusqueda.vue'
import componentTableVenta from '../components/componentTableVenta.vue'
import componentModalTabla from '../components/componentModalTabla.vue'
import * as bootstrap from 'bootstrap'

export default {
  name: 'Venta',
  components:{
    componentBarraBusqueda,
    componentTableVenta,
    componentModalTabla
  },
  data(){
    return{
      productos: [],
      productosBuscados:[],
      modal:null,
      total:0
    }
  },
  mounted(){
    this.modal = new bootstrap.Modal(document.getElementById('componentModalProducto'))  
  },
  computed:{
    calcularTotal(){
      this.total = 0
      this.productos.forEach((producto) =>{
        this.total = parseInt(this.total) + parseInt(producto.cantidad) * parseInt(producto.precioVenta)
      })
      return this.total
    }
  },
  methods:{
    searchProduct(data){
      fetch("http://localhost:5000/api/productos/" + data)
        .then(response => response.json())
        .then(data => {
          this.productosBuscados = data.result
          if(this.productosBuscados.length > 1){
            this.modal.toggle()
          }else if(this.productosBuscados.length == 1){
            this.productosBuscados[0].cantidad=1
            this.productos.push(this.productosBuscados[0])
          }else{
          }
      });
    },
    vender(){ //Se registra nuevo producto
      fetch("http://localhost:5000/api/venta",{
        method:'POST',
        body: JSON.stringify(this.productos),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => this.productos = [])
    },
    agregar(producto){
      this.modal.toggle()
      producto.cantidad = 1
      this.productos.push(producto)
    },
  },
}
</script>
