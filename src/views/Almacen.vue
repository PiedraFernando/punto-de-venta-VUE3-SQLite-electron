<template>
  <div class="container mt-3">
    <componentBarraBusqueda titulo="Almacen" nombre="Producto" opcion="Agregar" @agregar='openModal' @buscar="searchProduct"/>
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
      modal: null,
      productos: null,
      mensajeModal: '',
      edit: false
    }
  },
  created(){
    this.getAllProductos()
  },
  mounted(){
    this.modal = new bootstrap.Modal(document.getElementById('componentBarraBusqueda'))  
  },
  methods:{
    getAllProductos(){ //Obtiene todos los productos y carga en la tabla
      fetch("http://localhost:5000/api/productos")
        .then(response => response.json())
        .then(data => {
          this.productos = data.result
          console.log('Se han cargado todos los productos')
      });
    },
    searchProduct(data){
      fetch("http://localhost:5000/api/productos/" + data)
        .then(response => response.json())
        .then(data => {
          this.productos = data.result
          console.log('Se han cargado los productos buscados')
      });
    },
    setNewProducto(){ //Se registra nuevo producto
      fetch("http://localhost:5000/api/productos",{
        method:'POST',
        body: JSON.stringify(this.producto),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        alert('Producto agregado correctamente')
        this.limpiarFormulario()
        console.log('Producto nuevo registrado')
        this.getAllProductos()
      });  
    },
    updateProducto(id){ //Se actualizo el un producto.
      fetch("http://localhost:5000/api/productos/" + id,{
        method:'PUT',
        body: JSON.stringify(this.producto),
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        alert('Producto modificado correctamente')
        console.log('Producto modificado')
        this.getAllProductos()
      });
    },
    eliminado(){ //actualiza los datos despues de eliminar el producto (funcionalidad en la tabla)
      this.getAllProductos()
    },
    openModal(producto){ //Abre y cierra el modal
      if(producto){
        this.producto = producto
        this.edit = true
      }else{
        this.limpiarFormulario()
        this.edit = false
      }
      this.modal.toggle()
    },
    limpiarFormulario(){
      this.producto = new Producto()
    }
  },
}
</script>
