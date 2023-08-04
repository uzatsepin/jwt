<script setup>
import NewsComponent from '../components/NewsComponent.vue'
import {ref, onMounted} from 'vue'
import {useAuthStore} from '../stores/auth'
import axios from 'axios'
import {useLoadPosts} from "../firebase";

const authStore = useAuthStore()

const news = ref()
const showLoader = ref(false)
const posts = useLoadPosts();

</script>

<template>
    <div class="News">
        <div class="News__container">
            <NewsComponent v-for="post in posts" :post="post"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.News {
    &__container {
        display: flex;
        gap: 24px;
        flex-wrap: wrap;
        @media screen and (max-width: 767px) {
            justify-content: center;
        }
    }
}
</style>
