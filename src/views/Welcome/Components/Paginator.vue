<script setup>
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";

const props = defineProps(['currentPage', 'maxPage']);

</script>

<template>
  <div class="row justify-space-between py-2">
    <div class="col-1 mx-auto">
      <MaterialPagination>
        <MaterialPaginationItem prev @click="$emit('fetch', `${props.currentPage - 1}`)"/>
        <MaterialPaginationItem v-for="page in props.maxPage" :label="page" @click="$emit('fetch', page)" :active="props.currentPage == page" />
        <MaterialPaginationItem next @click="$emit('fetch', `${props.currentPage + 1}`)"/>
      </MaterialPagination>
    </div>
  </div>
</template>