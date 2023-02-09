<script setup>
  import FilledInfoCard from "../../../examples/cards/infoCards/FilledInfoCard.vue";

  const props = defineProps(['posts'])
</script>
<template>
  <div class="row">
      <div class="col-lg-12" v-for="post in props.posts">
        <FilledInfoCard
          class="p-4 my-2"
          :color="{ text: 'white', background: 'bg-gradient-success' }"
          :icon="{ component: 'flag', color: 'white' }"
          :title="post.createdBy"
          :description="post.content"
          :action="{
            route: 'javascript:alert(\'Not implemented yet...\')',
            label: { text: 'Hivatkozás másolása', color: 'white' }
          }"
        />
      </div>
    </div>
</template>
