<template>
  <button @click="agregar" class="btn btn-success">
    <i class="bi bi-plus-circle"></i>
  </button>
</template>

<script>
export default {
  name:'componentButtonAdd',
  methods:{
    agregar(){
      this.$emit("agregar")
    }
  }
}
</script>