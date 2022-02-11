<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">codigo</th>
        <th scope="col">Nombre</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Precio venta</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="producto of productos" :key="producto.id">
        <td>{{producto.codigo}}</td>
        <td>{{producto.nombre}}</td>
        <td>{{producto.descripcion}}</td>
        <td>{{producto.precioVenta}}</td>
        <td>{{producto.cantidad}}</td>
        <td>
          <template v-if="select">
            <componentButtonAdd @agregar='agregar(producto)'/>
          </template>
          <template v-else>
            <componentButtonDelete @eliminar='eliminar(producto.id)' class="me-1"/>
            <componentButtonModify @modificar='modificar(producto)'/>
          </template>
        </td>
      </tr>
    </tbody>
  </table>  
</template>

<script>
import componentButtonDelete from './componentButtonDelete.vue'
import componentButtonModify from './componentButtonModify.vue'
import componentButtonAdd from './componentButtonAdd.vue'
export default {
  name:'camponentTabalaProductos',
  components:{
    componentButtonDelete,
    componentButtonModify,
    componentButtonAdd
  },
  props:[
    'productos',
    'select'
  ],
  methods:{
    eliminar(id){ //elimina un producto
      if(confirm("¿Esta seguro de eliminar este producto?")){
        fetch("http://localhost:5000/api/productos/" + id,{
          method:'DELETE',
          headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
          }
        })
        .then(response => response.json())
        .then(() => {
          alert('Producto eliminado correctamente')
          console.log('Producto eliminado')
          this.$emit('eliminado')
        });  
      }
    },
    modificar(producto){
      this.$emit('modificar',producto)
    },
    agregar(producto){
      this.$emit('agregar',producto)
    }
  }
}
</script>