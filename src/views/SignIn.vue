<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import LoaderComponent from '../components/LoaderComponent.vue'

const email = ref()
const password = ref()
const authStore = useAuthStore()
const router = useRouter()

const signin = async () => {
    await authStore.auth({ email: email.value, password: password.value })
    router.push('/news')
}
</script>

<template>
    <h2>Sign In</h2>
    <form class="flex flex-column gap-3">
        <Message v-if="authStore.error.id === '8'" :severity="authStore.error.severity">{{ authStore.error.text }}</Message>
        <Message v-if="authStore.error.id === '9'" :severity="authStore.error.severity">{{ authStore.error.text }}</Message>
        <Message v-if="authStore.error.id === '10'" :severity="authStore.error.severity">{{ authStore.error.text }}</Message>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText type="email" placeholder="Your email" v-model="email" />
        </div>
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-at"></i>
            </span>
            <InputText type="password" placeholder="Your password" v-model="password" />
        </div>
        <LoaderComponent v-if="authStore.loader" />
        <div v-else class="flex flex-column gap-3">
            <Button label="SignIn" @click="signin" />
            <span>Are you not registered yet? <router-link to="/signup">Sign Up</router-link></span>
        </div>
    </form>
</template>
