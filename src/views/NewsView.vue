<script setup>
import Button from 'primevue/button'
</script>

<template>
    <div class="News">
        <div class="News__container">
            <div class="News__item">
                <div class="News__img">
                    <img
                        src="https://today.ua/wp-content/uploads/2023/05/jennifer-lopez-cutout-dress-wedges-lead-84a6a32b6f6847598e298c4f97616ed5a-324x160.jpg"
                        alt="news"
                    />
                </div>
                <div class="News__title">Просто та зі смаком: 54-річна Дженніфер Лопес показала ідеальний образ на кожен день</div>
                <div class="News__button">
                    <a href="#" class="News__button-link">Читати</a>
                </div>
                <div class="News__date">16:44, 03.08.23</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.News {
    &__item {
        border-radius: 8px;
        padding: 12px;
        max-width: 300px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
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
