<script setup>
import NewsComponent from '../components/NewsComponent.vue'
import {ref, onMounted} from 'vue'
import {useAuthStore} from '../stores/auth'
import axios from 'axios'

const authStore = useAuthStore()
const news = ref()
const showLoader = ref(false)

const getAllNews = async () => {
    showLoader.value = true
    try {
        const response = await axios.get(`https://jwt-firebase-vue-default-rtdb.europe-west1.firebasedatabase.app/news.json?auth=${authStore.userInfo.token}`)
        news.value = response.data
    } catch (err) {
        console.log(err.response)
    } finally {
        showLoader.value = false
    }
}

onMounted(async () => {
    await getAllNews()
})
</script>

<template>
    <div class="News">
        <div class="News__container">
            <NewsComponent v-for="post in news" :post="post"/>
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
