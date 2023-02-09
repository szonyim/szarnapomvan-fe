<script setup>
  import MaterialButton from "@/components/MaterialButton.vue";
  import MaterialProgress from "@/components/MaterialProgress.vue";
  
</script>

<template>
  <div
      class="modal fade"
      id="statModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Statisztika
          </h5>
          <MaterialButton
            color="none"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </MaterialButton>
        </div>
        <div class="modal-body">
          
          Baranya
          <MaterialProgress class="mb-3" color="primary" :value="50" />
          Budapest
          <MaterialProgress class="mb-3" color="secondary" :value="50" />
          <MaterialProgress class="mb-3" color="success" :value="50" />
          <MaterialProgress class="mb-3" color="info" :value="50" />
          <MaterialProgress class="mb-3" color="warning" :value="50" />
          <MaterialProgress class="mb-3" color="danger" :value="50" />
          <MaterialProgress class="mb-3" color="dark" :value="50" />

        </div>
        <div class="modal-footer justify-content-between">
          <MaterialButton
            variant="gradient"
            color="dark"
            data-bs-dismiss="modal">
            Bezár
          </MaterialButton>
          <MaterialButton variant="gradient" color="success" class="mb-0">
            Mehet
          </MaterialButton>
        </div>
      </div>
    </div>
  </div>
</template>