<script setup>

import MaterialButton from "@/components/MaterialButton.vue";
import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
import logo from "@/assets/img/logos/szarnapomvan.png"
</script>

<template>
  <div
    class="page-header"
    :style="`background-image: url(${vueMkHeader})`"
    loading="lazy"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-7 text-center mx-auto position-relative">
          <div class="mb-3">
            <img :src="logo" /> </div>
          <h1
            class=" pt-1 mt-n5 me-2"
            :style="{ display: 'inline-block ' }"
          >
            szarnapomvan.hu
          </h1>
          <p class="lead px-5 mt-3 mb-5" :style="{ fontWeight: '500' }">
            Eleged van? Besokalltál? Ne habozz! <br/>
            Itt az idő, hogy kiadd magadból és megváltozik a világ!
          </p>

          <MaterialButton 
            variant="gradient" 
            color="danger" 
            size="lg" 
            class="w-auto me-2"
            data-bs-toggle="modal"
            data-bs-target="#complaintModal">
              Elmondom a bánatom!
            </MaterialButton>

          <MaterialButton 
            variant="outline" 
            color="info" 
            size="lg" 
            class="w-auto me-2"
            data-bs-toggle="modal"
            data-bs-target="#statModal">
              Statisztika
            </MaterialButton>
        </div>
      </div>
    </div>
  </div>

</template>