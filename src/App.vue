<script setup>
import {RouterView} from 'vue-router'
import {useAuthStore} from "./stores/auth";
import {computed} from "vue";

const authStore = useAuthStore();

const token = computed(() => {
    return authStore.userInfo.token
})

const checkUser = () => {
    const tokens = JSON.parse(localStorage.getItem('userTokens'))
    if (tokens) {
        authStore.userInfo.token = tokens.token;
        authStore.userInfo.refreshToken = tokens.refreshToken;
        authStore.userInfo.expiresIn = tokens.expiresIn
    }
}

checkUser()
</script>

<template>
    <div class="menu">
        <router-link class="menu__link" to="/">Home</router-link>
        <router-link class="menu__link" to="/login" v-if="!token">Login</router-link>
        <router-link class="menu__link" to="/register" v-if="token">Register</router-link>
        <router-link class="menu__link" to="/news" v-if="token">News</router-link>
        <router-link class="menu__link" to="/addpost" v-if="token">AddPost</router-link>
    </div>
    <div class="container">
        <RouterView/>
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 1310px;
    padding: 0 15px;
    margin: 0 auto;
    font-family: Helvetica, sans-serif;
}

.menu {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 16px;
    font-size: 20px;

    &__link {
        color: #000000;
        text-decoration: none;
        padding-bottom: 5px;
        border-bottom: 1px solid transparent;
        transition: all 250ms ease-in-out;

        &:hover {
            color: #0a0e9f;
            border-bottom: 1px solid #0a0e9f;

        }
    }
}

</style>
