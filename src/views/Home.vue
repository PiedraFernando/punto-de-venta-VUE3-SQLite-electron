<template>
  <div>
    <componentBarraBusqueda titulo="Almacen" nombre="Producto" @agregar='openModal'/>
    <button @click="getAllProductos()">Prueba</button>
    <componentModalProducto :producto="producto" @enviar='setNewProducto' :edit="edit" @update="updateProducto"/>
    <div class="container">
      <componentTableProductos :productos='productos' @eliminado='eliminado' @modificar='openModal'/>
    </div>
  </div>
</template>

<script>
import Producto from '../class/Producto'
import componentBarraBusqueda from '../components/componentBarraBusqueda.vue'
import componentModalProducto from '../components/componentModalProducto.vue'
import componentTableProductos from '../components/componentTableProductos.vue'
import * as bootstrap from 'bootstrap'

export default {
  name: 'Almacen',
  components:{
    componentBarraBusqueda,
    componentModalProducto,
    componentTableProductos
  },
  data(){
    return{
      producto: new Producto(),
      productos: null,
      mensajeModal: '',
      edit: false
    }
  },
  created(){
    this.getAllProductos()
  },
  methods:{
    getAllProductos(){
      fetch("http://localhost:5000/api/productos")
        .then(response => response.json())
        .then(data => {
          this.productos = data.result
          this.getAllProductos()
        });
    },
    setNewProducto(){
      fetch("http://localhost:5000/api/productos",{
        method:'POST',
        body: JSON.stringify(this.producto),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(() => {
        alert('Producto agregado correctamente')
      });  
    },
    updateProducto(id){
      fetch("http://localhost:5000/api/productos/" + id,{
        method:'PUT',
        body: JSON.stringify(this.producto),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(() => {
        alert('Producto modificado correctamente')
        this.getAllProductos()
      }); 
    },
    eliminado(){
      this.getAllProductos()
    },
    openModal(producto){
      if(producto){
        this.producto = producto
        this.edit = true
      }else{
        this.producto = new Producto()
        this.edit = false
      }
      var myModal = new bootstrap.Modal(document.getElementById('componentBarraBusqueda'))  
      myModal.toggle()
    }
  },
}
</script>
