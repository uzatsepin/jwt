import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import './api'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
