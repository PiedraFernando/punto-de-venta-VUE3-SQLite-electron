<template>
  <button @click="modificar" class="btn btn-warning">
    <i class="bi bi-pencil"></i>
  </button>
</template>

<script>
export default {
  name:'componentButtonModify',
  methods:{
    modificar(){
      this.$emit("modificar")
    }
  }
}
</script>