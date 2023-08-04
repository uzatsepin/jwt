<script setup>
import {useAuthStore} from "../stores/auth";
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
    <div class="Header">
        <div class="Header__container">
            <div class="Header__logo">
                <img src="../images/logo.svg" alt="logo">
                <p>News</p>
            </div>
            <div class="Header__menu">
                <router-link class="Header__menu-link" to="/">Home</router-link>
                <router-link class="Header__menu-link" to="/login" v-if="!token">Login</router-link>
                <router-link class="Header__menu-link" to="/register" v-if="token">Register</router-link>
                <router-link class="Header__menu-link" to="/news" v-if="token">News</router-link>
                <router-link class="Header__menu-link" to="/addpost" v-if="token">AddPost</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "../scss/styles";

.Header {
    border-bottom: 1px solid darkgray;
    max-width: 1310px;
    padding: 8px 15px;
    margin: 0 auto;

    &__logo {
        display: flex;
        align-items: center;

        & p {
            margin-left: 10px;
        }
    }

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
