import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import _ from './icons'
import PrimeVue from 'primevue/config'
import router from '../src/router'
import 'primevue/resources/themes/lara-light-indigo/theme.css'    
import 'primevue/resources/primevue.min.css'
import App from './App.vue'
import '../node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
const pinia = createPinia()

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
