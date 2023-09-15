<template>
    <div class="navbar">
        <theme-and-lang-switcher/>
        <Header/>
    </div>

    <slot/>
</template>

<script setup lang="ts">
import ThemeAndLangSwitcher from '../components/ThemeAndLangSwitcher.vue';
import Header from '../components/Header.vue'

</script>

<style scoped>

.navbar {
    position: fixed;
    width: 100%;
    background: white;
}

</style>