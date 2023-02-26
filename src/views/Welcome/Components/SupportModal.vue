<script setup>
  import MaterialButton from "@/components/MaterialButton.vue";
  import revolutQR from "@/assets/img/revolut-qr.jpg";

</script>

<template>
  <div
      class="modal fade"
      id="supportModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Légy jófej és hívj meg egy kávéra :)
          </h5>
          <MaterialButton
            color="none"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close">
          </MaterialButton>
        </div>
        <div class="modal-body">
          <p class="text-center">
            Ha tetszett az oldal, és a jövőben is szeretnéd kiadni a feszültséget, küldje egy kis támogatást. <br>
            Az oldal fenntartása saját zsebből megy, így minden forint jól jön.
          </p>

          <div class="text-center">
            <img :src="revolutQR" alt="https://revolut.me/mihlyxhy1" class="revolut-qr"  />
          </div>

          <p class="text-center">
            Használd a QR kódot, vagy a <a class="revolut-link" href="https://revolut.me/mihlyxhy1">https://revolut.me/mihlyxhy1</a> hivatkozást!
          </p>

          <p class="text-center">Hálás köszönet ❤️</p>

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