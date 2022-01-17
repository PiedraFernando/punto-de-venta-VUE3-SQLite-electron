<template>
  <button @click="eliminar" class="btn btn-danger">
    <i class="bi bi-trash"></i>
  </button>
</template>

<script>
export default {
  name:'componentButtonDelete',
  methods:{
    eliminar(){
      this.$emit("eliminar")
    }
  }
}
</script>