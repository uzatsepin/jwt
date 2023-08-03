<script setup>
import {ref} from 'vue'
import {useAuthStore} from '../stores/auth'
import {useRouter} from 'vue-router'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Message from 'primevue/message'
import LoaderComponent from '../components/LoaderComponent.vue'

const email = ref()
const password = ref()
const authStore = useAuthStore()
const router = useRouter()

const signup = async () => {
    await authStore.auth({email: email.value, password: password.value}, 'signup')
    router.push('/news')
}
</script>

<template>
    <div class="Register">
        <div class="Register__container">
            <h2>Register</h2>
            <form class="flex flex-column gap-3">
                <Message v-if="authStore.error.id === '5'" severity="error">{{ authStore.error.text }}</Message>
                <Message v-if="authStore.error.id === '1'" severity="info">{{ authStore.error.text }}</Message>
                <Message v-if="authStore.successAuth" severity="success">{{ authStore.successAuth }}</Message>
                <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
                    <InputText type="email" placeholder="Your email" v-model="email"/>
                </div>
                <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-at"></i>
            </span>
                    <InputText type="password" placeholder="Your password" v-model="password"/>
                </div>
                <LoaderComponent v-if="authStore.loader"/>
                <div v-else class="flex flex-column gap-3">
                    <Button label="Register" @click="signup"/>
                    <span>Are you ready registered? <router-link to="/login">Login</router-link></span>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
.Register {
    &__container {
        max-width: 500px;
        margin: 0 auto;
    }
}
</style>