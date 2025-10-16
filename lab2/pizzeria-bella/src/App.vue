<template>
  <div id="app">
    <HeaderBar />
    <router-view />
    <footer>
      <p>&copy; 2025 Pizzeria Bella</p>
    </footer>
  </div>
</template>

<script setup>
import HeaderBar from './components/HeaderBar.vue'
</script>
