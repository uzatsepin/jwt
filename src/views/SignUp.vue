<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import LoaderComponent from '../components/LoaderComponent.vue'

const email = ref()
const password = ref()
const authStore = useAuthStore()

const signup = async () => {
    await authStore.signup({ email: email.value, password: password.value })
}
</script>

<template>
    <h2>Sign Up</h2>
    <form class="flex flex-column gap-3">
        <Message v-if="authStore.error" severity="warn">{{ authStore.error }}</Message>
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
            <Button label="Signup" @click="signup" />
            <span>Are you ready registered? <router-link to="/signin">Sign In</router-link></span>
        </div>
    </form>
</template>
