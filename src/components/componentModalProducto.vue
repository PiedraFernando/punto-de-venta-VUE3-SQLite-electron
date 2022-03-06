<template>
  <div class="modal fade" id="componentBarraBusqueda" tabindex="-1" aria-labelledby="componentBarraBusquedaLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="componentBarraBusquedaLabel">Agregar producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <div class="mb-3">
                <label for="codigoBarras" class="form-label">Codigo de barras del producto:</label>
                <input type="text" class="form-control" id="codigoBarras" placeholder="El codigo de barras del producto es:" v-model="producto.codigoBarras">
              </div>
            </div>
            <div class="col-4">
              <div class="mb-3">
                <label for="codigo" class="form-label">Codigo del del producto:</label>
                <input type="text" class="form-control" id="codigo" placeholder="El codigo del producto es:" v-model="producto.codigo">
              </div>
            </div>
            <div class="col-4">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre del producto:</label>
                <input type="text" class="form-control" id="nombre" placeholder="El nombre del producto es:" v-model="producto.nombre">
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="descripcion" class="form-label">Descripción:</label>
            <textarea class="form-control" id="descripcion" rows="3" placeholder="La descripción del producto es:" v-model="producto.descripcion"></textarea>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="mb-3">
                <label for="precioCompra" class="form-label">Precio compra:</label>
                <input type="text" class="form-control" id="precioCompra" placeholder="El precio de compra del producto es:" v-model="producto.precioCompra">
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label for="precioVenta" class="form-label">Precio venta:</label>
                <input type="text" class="form-control" id="precioVenta" placeholder="El precio de venta del producto es:" v-model="producto.precioVenta">
              </div>
            </div>
            <div class="mb-3">
              <label for="cantidad" class="form-label">Cantidad Actual:</label>
              <input type="text" class="form-control" id="cantidad" placeholder="Actualmente hay x productos:" v-model="producto.cantidad">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="print">Cerrar</button>
          <div v-if="edit===true">
            <button type="button" class="btn btn-warning" @click="updateProducto(producto.id)">modificar producto</button>
          </div>
          <div v-else>
            <button type="button" class="btn btn-primary" @click="enviarProducto">Guardar producto</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ModalProducto",
  props:[
    'producto',
    'edit',
  ],
  methods: {
    enviarProducto(){
      this.$emit("enviar")
    },
    updateProducto(id){
      this.$emit("update", id)
    }
  }
}
</script>