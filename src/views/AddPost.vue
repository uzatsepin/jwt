<script setup>
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Button from "primevue/button";

import {createPost} from "../firebase";
import {reactive} from "vue";

const form = reactive({title: '', image: '', date: ''})
const onSubmit = async () => {
    await createPost({...form})
    form.date = ''
    form.image = ''
    form.title = ''
}
</script>
<template>
    <div class="AddPost">
        <div class="AddPost__container">
            <form>
                <div class="AddPost__wrapper">
                    <span class="p-float-label">
                        <InputText id="title" v-model="form.title"/>
                        <label for="title">Title</label>
                    </span>
                    <span class="p-float-label">
                        <InputText id="img" v-model="form.image"/>
                        <label for="img">Image link</label>
                     </span>
                    <Calendar showIcon v-model="form.date"/>
                </div>
                <div class="AddPost__button">
                    <Button label="Primary" raised @click="onSubmit"/>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.AddPost {
    &__container {
        max-width: 500px;
        margin: 0 auto;
    }

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    &__button {
        margin-top: 24px;
    }
}
</style>