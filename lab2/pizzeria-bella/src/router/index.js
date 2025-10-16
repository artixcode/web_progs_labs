import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Login from '../views/Login.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/menu', name: 'menu', component: Menu },
    { path: '/login', name: 'login', component: Login }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ top: 0 })
})

export default router
