<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">codigo</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio venta</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Subtotal</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="producto of productos" :key="producto.id">
        <td>{{producto.codigo}}</td>
        <td>{{producto.nombre}}</td>
        <td>{{producto.precioVenta}}</td>
        <td>
          <input type="text" v-model="producto.cantidad">
        </td>
        <td>{{producto.precioVenta * producto.cantidad}}</td>
        <td>
          <componentButtonDelete @eliminar='eliminar(producto)' class="me-1"/>
        </td>
      </tr>
    </tbody>
  </table>  
</template>

<script>
import componentButtonDelete from './componentButtonDelete.vue'
export default {
  name:'camponentTabalaVenta',
  components:{
    componentButtonDelete,
  },
  props:[
    'productos',
  ],
  methods:{
    eliminar(producto){ //elimina un producto
      let index = this.productos.indexOf(producto)
      this.productos.splice(index,1)
    },
  }
}
</script>