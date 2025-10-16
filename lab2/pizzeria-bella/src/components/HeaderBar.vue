<template>
  <header>
    <h1>Pizzeria Bella</h1>
    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/menu">Меню</RouterLink>
      <RouterLink to="/login">Вход</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
