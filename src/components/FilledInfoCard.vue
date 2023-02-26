<script setup>
defineProps({
  color: {
    text: String,
    background: {
      validator(value) {
        return [
          "primary",
          "secondary",
          "info",
          "success",
          "warning",
          "error",
          "light",
          "dark",
          "white",
        ].includes(value);
      },
    },
    default() {
      return {
        text: "",
        background: "bg-gray-100",
      };
    },
  },
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  details: {
    type: Object,
    required: true,
    county: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
});
</script>
<template>
  <div
    class="info-horizontal border-radius-xl bg-gradient-success p-1 my-1"
    :class="`${color.background ?? ''}`"
  >
      <h5 :class="`text-${color.text ?? ''}`">{{ name }}</h5>
      <hr class="bg-white my-2">
      <p :class="`text-${color.text ?? ''}`">
        {{ content }}
      </p>

      <div class="row white">
        <div class="col-7">Honnan: {{ details.county }}</div>
        <div class="col-5">
          Hangulat: {{ details.level.text }}
        </div>
      </div>
      
  </div>
</template>
