<template>
    <div class="page-header-container el-with-border">
        <h1 id="page-header" class="page-header">
            Czaplinski.co
        </h1>
    </div>   
</template>

<script setup>

const { $gsap } = useNuxtApp()

onMounted(() => {

    const pageHeader = document.getElementById('page-header')
    const startTrigger = document.querySelector('.hello-section__header')



    $gsap.to(pageHeader, {
    yoyo: true,
    
    css: {
        fontSize: '1rem',
    },
    scrollTrigger: {
        trigger: pageHeader,
        start: "30%", 
        end: "top 20%", 
        scrub: 1,
    }

});

})





</script>

<style lang="scss" scoped>

@import "../assets/scss/main.scss";

.page-header-container {
    border-bottom: 2px solid;


}

.page-header {
    font-weight: 500;
    font-size: 2rem;
    color: $black;
    text-align: center;

    &__small {
        font-size: 0.5rem !important;
    }

}


@media only screen and (min-width: 768px) {

    .page-header {
    font-size: 2.5rem;

}

}
</style>