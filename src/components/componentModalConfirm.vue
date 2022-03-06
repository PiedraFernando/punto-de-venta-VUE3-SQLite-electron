<template>
  <div class="modal" id="modalConfirm" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirmar</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>¿Esta seguro de elminar este elemento?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" @click="confirmar">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirmModal',
  /*mounted(){
    this.modal = new bootstrap.Modal(document.getElementById('componentBarraBusqueda'))  
  },*/
  methods:{
    confirmar(){
      this.$emit('eliminado')
    }
  }
}
</script>

<style>

</style>