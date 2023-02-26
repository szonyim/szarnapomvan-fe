<script setup>
  import FilledInfoCard from "../../../components/FilledInfoCard.vue";
  import { useAppStore } from "@/stores"

const props = defineProps(['posts'])
const store = useAppStore();

let backgroundClass = (levelId) => {
  switch(levelId) {
    case 0:
      return 'bg-gradient-success';

    case 1:
      return 'bg-gradient-warning';

    case 2:
      return 'bg-gradient-primary';

    case 3:
      return 'bg-gradient-danger';
  }
}

</script>

<template>
  <div class="row">
      <div class="col-lg-6" v-for="post in props.posts">
        <FilledInfoCard
          class="p-3 my-2"
          :color="{ text: 'white', background: backgroundClass(post.badLevel) }"
          :icon="{ component: 'flag', color: 'white' }"
          :name="post.createdBy"
          :content="post.content"
          :details="{
            county: post.location.name,
            level: store.levels[post.badLevel] 
          }"
        />
      </div>
    </div>
</template>
