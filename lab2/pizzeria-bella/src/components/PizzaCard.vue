<template>
  <div class="card">
    <img :src="image" :alt="title">
    <h3>{{ title }}</h3>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  desc:  { type: String, required: true }
})
</script>
