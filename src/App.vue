<script setup>
import {RouterView} from 'vue-router'
import Header from "./components/Header.vue";
</script>

<template>
    <Header/>
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

</style>
