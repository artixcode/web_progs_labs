<template>
  <main>
    <h2>Личный кабинет</h2>

    <div class="tabs">
      <button
          class="tab-btn"
          :class="{ active: tab === 'login' }"
          @click="tab = 'login'"
          type="button"
      >
        Вход
      </button>
      <button
          class="tab-btn"
          :class="{ active: tab === 'register' }"
          @click="tab = 'register'"
          type="button"
      >
        Регистрация
      </button>
    </div>

    <div class="form-container">
      <form
          v-if="tab === 'login'"
          class="auth-form"
          @submit.prevent="submitLogin"
      >
        <label>
          <span class="sr-only">Логин</span>
          <input
              v-model="login.username"
              type="text"
              placeholder="Логин"
              required
              autocomplete="username"
          />
        </label>
        <label>
          <span class="sr-only">Пароль</span>
          <input
              v-model="login.password"
              type="password"
              placeholder="Пароль"
              required
              autocomplete="current-password"
          />
        </label>
        <button type="submit">Войти</button>
      </form>

      <form
          v-else
          class="auth-form"
          @submit.prevent="submitRegister"
      >
        <label>
          <span class="sr-only">Логин</span>
          <input
              v-model="register.username"
              type="text"
              placeholder="Логин"
              required
              autocomplete="username"
          />
        </label>
        <label>
          <span class="sr-only">Email</span>
          <input
              v-model="register.email"
              type="email"
              placeholder="Email"
              required
              autocomplete="email"
          />
        </label>
        <label>
          <span class="sr-only">Пароль</span>
          <input
              v-model="register.password"
              type="password"
              placeholder="Пароль"
              required
              autocomplete="new-password"
              minlength="6"
          />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'

const tab = ref('login')
const login = reactive({ username: '', password: '' })
const register = reactive({ username: '', email: '', password: '' })

function submitLogin() {
  alert(`Вход выполнен: ${login.username}`)
}

function submitRegister() {
  alert(`Регистрация: ${register.username}`)
}
</script>

<style scoped>
/* активная вкладка */
.tab-btn.active {
  background: #d35400;
  color: white;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
