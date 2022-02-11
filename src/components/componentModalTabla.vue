<template>
  <div class="modal fade" id="componentModalProducto" tabindex="-1" aria-labelledby="componentModalAlertLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="componentModalProductoLabel">Selecione producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <componentTableProductos :productos="productos" @agregar="agregar" :select='true' />
        </div>
			</div>
    </div>
  </div>
</template>

<script>
import componentTableProductos from './componentTableProductos.vue'
export default {
  name:'componentModalTabla',
  components:{
    componentTableProductos
  },
  props:[
    'productos',
  ],
  methods:{
    agregar(producto){
      this.$emit('agregar',producto)
    }
  },
}
</script>