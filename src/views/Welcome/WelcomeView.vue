<script setup>
import { onBeforeMount, onMounted, onUnmounted } from "vue"
import { useAppStore } from "@/stores"
import Api from "../../configs/Api";


import Header from "./Components/Header.vue"
import ComplaintModal from "./Components/ComplaintModal.vue"
import StatModal from "./Components/StatModal.vue"
import Paginator from "./Components/Paginator.vue"
import PostContainer from "./Components/PostContainer.vue"

const body = document.getElementsByTagName("body")[0]
const store = useAppStore()

async function fetchWelcome() {
  await fetch(
    `${Api.createUrl('/api/welcome')}`
  )
  .then(res => res.json())
  .then(response => {
    store.$patch({
      posts: response.posts,
      locations: response.locations
    })
  });
}

async function fetchPosts(direction) {
  const response = await fetch(
    `https://localhost:7175/api/Post/list?take=25`
  )
  posts.value = await response.json()
}

onBeforeMount(() => {
  fetchWelcome()
})

onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});

onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});

</script>


<template>
    <Header />
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <div class="container">

        <Paginator @fetch="fetchPosts" />
        <PostContainer :posts="store.posts" />
        <Paginator @fetch="fetchPosts" />

      </div>
    </div>

    <ComplaintModal :locations="store.locations" />
    <StatModal />

</template>