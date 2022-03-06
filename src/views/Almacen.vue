<template>
  <div class="container mt-3">
    <componentModalConfirm @eliminado='eliminado'/>
    <componentBarraBusqueda titulo="Almacen" nombre="Producto" opcion="Agregar" @agregar='openModal' @buscar="searchProduct"/>
    <div v-if="statusSaved == 'guardado'" class="alert alert-success mt-3 alert-dismissible fade show" role="alert">
      Producto guardado correctamente.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-if="statusSaved == 'modificado'" class="alert alert-success mt-3 alert-dismissible fade show" role="alert">
      Producto guardado correctamente.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div v-if="statusSaved == 'eliminado'" class="alert alert-success mt-3 alert-dismissible fade show" role="alert">
      Producto eliminado correctamente.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <componentModalProducto :producto="producto" @enviar='setNewProducto' :edit="edit" @update="updateProducto"/>
    <div class="container">
      <componentTableProductos :productos='productos' @eliminado='modalConfirm' @modificar='openModal'/>
    </div>
  </div>
</template>

<script>
import Producto from '../class/Producto'
import componentBarraBusqueda from '../components/componentBarraBusqueda.vue'
import componentModalProducto from '../components/componentModalProducto.vue'
import componentTableProductos from '../components/componentTableProductos.vue'
import componentModalConfirm from '../components/componentModalConfirm.vue'
import * as bootstrap from 'bootstrap'

export default {
  name: 'Almacen',
  components:{
    componentBarraBusqueda,
    componentModalProducto,
    componentTableProductos,
    componentModalConfirm,
  },
  data(){
    return{
      producto: new Producto(),
      modal: null,
      productos: null,
      mensajeModal: '',
      edit: false,
      statusSaved: false,
      deleteConfirm: false,
      id: 0,
    }
  },
  created(){
    this.getAllProductos()
  },
  mounted(){
    this.modal = new bootstrap.Modal(document.getElementById('componentBarraBusqueda')) ,
    this.modalConfirmComponent = new bootstrap.Modal(document.getElementById('modalConfirm'))  
  },
  methods:{
    getAllProductos(){ //Obtiene todos los productos y carga en la tabla
      fetch("http://localhost:5000/api/productos")
        .then(response => response.json())
        .then(data => {
          this.productos = data.result
      });
    },
    searchProduct(data){
      fetch("http://localhost:5000/api/productos/" + data)
        .then(response => response.json())
        .then(data => {
          this.productos = data.result
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
        this.limpiarFormulario()
        this.getAllProductos()
        this.statusSaved = 'guardado'
        this.modal.toggle()
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
        this.statusSaved = 'modificado'
        this.getAllProductos()
      });
    },
    modalConfirm(id){
      this.id = id
      this.modalConfirmComponent.toggle()
    },
    eliminado(){ //actualiza los datos despues de eliminar el producto (funcionalidad en la tabla)
      fetch("http://localhost:5000/api/productos/" + this.id,{
        method:'DELETE',
        headers:{
          'Accept': 'application/json',
          'Content-type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(() => {
        this.modalConfirmComponent.toggle()
        this.statusSaved = 'eliminado'
        this.getAllProductos()
      });  
    },
    openModal(producto){ //Abre y cierra el modal
      this.statusSaved = false
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
