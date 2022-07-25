<template>
  <div v-if="messaje" id="alertToggle" :class="'alert mt-3 alert-dismissible fade show alert-' + type" role="alert">
    {{messaje}}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>

<script>
  name:"componentAlert"
  export default {
    props:["type", "messaje"]
  }
</script>