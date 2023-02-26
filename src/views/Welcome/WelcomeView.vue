<script setup>
import { onBeforeMount } from "vue"
import { useAppStore } from "@/stores"
import Api from "../../configs/Api"

import Header from "./Components/Header.vue"
import ComplaintModal from "./Components/ComplaintModal.vue"
import StatModal from "./Components/StatModal.vue"
import SupportModal from "./Components/SupportModal.vue"
import Paginator from "./Components/Paginator.vue"
import PostContainer from "./Components/PostContainer.vue"

const store = useAppStore()

async function fetchWelcome() {
  await fetch(
    `${Api.get('/api/welcome')}`
  )
  .then(res => res.json())
  .then(response => {
    store.$patch({
      posts: response.posts,
      locations: response.locations
    })
  });
}

async function fetchPosts(page) {
  await fetch(
    `${Api.get('/api/Post/list?page=' + page)}`
  )
  .then(res => res.json())
  .then(response => {
    store.$patch({
      posts: response
    })
  })
}


onBeforeMount(() => {
  fetchWelcome()
})

</script>


<template>
    <Header />
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-5">
      <div class="container">

        <Paginator :current-page="store.posts.currentPage" :max-page="store.posts.maxPage" @fetch="fetchPosts" />
        <PostContainer :posts="store.posts.items" />
        <Paginator :current-page="store.posts.currentPage" :max-page="store.posts.maxPage" @fetch="fetchPosts" />

      </div>
    </div>

    <ComplaintModal :locations="store.locations" />
    <StatModal />
    <SupportModal />

</template>