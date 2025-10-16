<template>
  <main>
    <h2>Наше меню</h2>
    <div class="cards">
      <PizzaCard
          v-for="p in pizzas"
          :key="p.title"
          :image="p.image"
          :title="p.title"
          :desc="p.desc"
      />
    </div>
  </main>
</template>

<script setup>
import PizzaCard from '../components/PizzaCard.vue'

const pizzas = [
  { image: '/images/pizza1.jpg', title: 'Пицца Маргарита', desc: 'Томатный соус, моцарелла, свежий базилик.' },
  { image: '/images/pizza2.jpg', title: 'Пицца Пепперони', desc: 'Пикантная пепперони, сыр моцарелла, томаты.' },
  { image: '/images/pizza3.jpg', title: 'Пицца 4 сыра', desc: 'Моцарелла, пармезан, горгонзола, дор-блю.' }
]
</script>
