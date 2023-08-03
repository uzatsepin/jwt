import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import PrimeVue from 'primevue/config'
import {initializeApp} from 'firebase/app'

import App from './App.vue'
import router from './router'
// import './api'

const firebaseConfig = {
    apiKey: 'AIzaSyB_mtOBnKdoCOgEOJjeDsu0DF80jZ8az4w',
    authDomain: 'jwt-firebase-vue.firebaseapp.com',
    projectId: 'jwt-firebase-vue',
    storageBucket: 'jwt-firebase-vue.appspot.com',
    messagingSenderId: '135078178271',
    appId: '1:135078178271:web:1d9ff431227c583c32686a'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
