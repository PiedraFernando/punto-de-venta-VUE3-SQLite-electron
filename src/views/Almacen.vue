<template>
  <div class="container mt-3">
    <componentModalConfirm @eliminado='eliminado'/>
    <componentModalProducto :producto="producto" @enviar='setNewProducto' :edit="edit" @update="updateProducto"/>
    <componentBarraBusqueda titulo="Almacen" nombre="Producto" @buscar="searchProduct">
      <button class="btn btn-success me-3" @click='openModal(null)'>Agregar</button>
      <button class="btn btn-warning me-3" @click='faltantes'>Ver faltantes</button>
    </componentBarraBusqueda>
    <componentAlert :type="alertType" :messaje="alertMessaje" />
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
import componentAlert from '../components/componentAlert.vue'
import * as bootstrap from 'bootstrap'

export default {
  name: 'Almacen',
  components:{
    componentBarraBusqueda,
    componentTableProductos,
    componentModalProducto,
    componentModalConfirm,
    componentAlert
  },
  data(){
    return{
      alertMessaje:"",
      alertType:"",
      producto: new Producto(),
      modal: null,
      productos: null,
      mensajeModal: '',
      edit: false,
      deleteConfirm: false,
      id: 0,
    }
  },
  created(){
    this.getAllProductos()
  },
  mounted(){
    this.modal = new bootstrap.Modal(document.getElementById('componentBarraBusqueda')),
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
    getFaltantes(){ //Obtiene productos que tengan menos cantidad que la cantidad aviso
      fetch("http://localhost:5000/api/productos/faltantes")
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
        this.alertType="success"
        this.alertMessaje="Producto guardado correctamente"
        this.modal.toggle()
      });
    },
    updateProducto(id){ //Se actualizo un producto.
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
        this.alertType="success"
        this.alertMessaje="Producto actualizado correctamente"
        this.modal.toggle()
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
        this.alertType="success"
        this.alertMessaje="Producto eliminado correctamente"
        this.getAllProductos()
      });
    },
    openModal(producto){ //Abre y cierra el modal
      this.alertMessaje=""
      this.alertType=""
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
