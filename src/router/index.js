import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'

const routes = [
    {
        path: "/",
        name: "login",
        component: LoginView,
    },
    {
        path: "/daftar",
        name: "daftar",
        component: RegistrationView,
    },
    {
        path: "/home",
        name: "home",
        component: HomeView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router