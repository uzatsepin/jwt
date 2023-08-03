<script setup>
const props = defineProps({
    post: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="NewsItem">
        <div class="NewsItem__img">
            <img
                :src="post.image"
                alt="news"
            />
        </div>
        <div class="NewsItem__title">
            {{ post.title }}
        </div>
        <div class="NewsItem__button">
            <a href="#" class="NewsItem__button-link">Читати</a>
        </div>
        <div class="NewsItem__date">{{ post.date }}</div>
    </div>
</template>

<style lang="scss">
.NewsItem {
    border-radius: 8px;
    padding: 12px;
    max-width: 300px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &__title {
        text-align: center;
        margin-top: 24px;
    }

    &__button {
        margin-top: 24px;
        display: flex;
        justify-content: end;

        &-link {
            text-decoration: none;
            color: #000000;
            padding: 8px 16px;
            border: 1px solid blue;
            border-radius: 8px;
        }
    }

    &__date {
        text-align: right;
        margin-top: 16px;
        font-size: 12px;
    }

    &__img {
        img {
            max-width: -webkit-fill-available;
        }
    }
}
</style>