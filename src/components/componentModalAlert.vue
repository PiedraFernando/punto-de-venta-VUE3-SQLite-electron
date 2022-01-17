<template>
  <div class="modal fade" id="componentModalAlert" tabindex="-1" aria-labelledby="componentModalAlertLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="componentModalAlertLabel">Alerta</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
					<p class="h3">{{mensaje}}</p>
        </div>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'componentModalAlert',
  props:[
    'mensaje'
  ]
}
</script>