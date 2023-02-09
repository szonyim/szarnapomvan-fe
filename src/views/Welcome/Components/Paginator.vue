<script setup>
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";
</script>

<template>
  <div class="row justify-space-between py-2">
    <div class="col-1 mx-auto">
      <MaterialPagination>
        <MaterialPaginationItem prev @click="$emit('fetch', 'BACKWARD')"/>
        <MaterialPaginationItem next @click="$emit('fetch', 'FORWARD')"/>
      </MaterialPagination>
    </div>
  </div>
</template>