<template>
    <div class="hello-section">

        <h2 class="hello-section__header">Hello</h2>

        <p class="hello-section__paragraph hello-section__paragraph--big">
        I am Michal Czaplinski. A Warsaw-based Junior <b><i>Front End Developer</i></b> specializing in JavaScript with a <b><i>marketing/branding/design </i></b> background.

        </p>

        <p class="hello-section__paragraph hello-section__paragraph--small">
        When creating websites, I take care not only about their aesthetics, but also about their functionality,  which is meant to contribute to achieving your business goals. Currently I work with <span class="hello-section__paragraph--highlighted">Vue.JS, GSAP, TypeScript and Nuxt</span>, crafting interactive online experiences.
 <br/> <br/>
    I operate both as a freelancer and within teams. <a href="#contact" class="hello-section__link">Get in touch</a> with me so that we can create something exceptional together.

        </p>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

@import "../assets/scss/main.scss";

.hello-section {

    &__header {
font-size: 4rem;
font-weight: 500;
margin: 0;


}

&__paragraph {

&--big {
    font-size: 0.9rem;
}

&--small {
    font-size: 0.7rem;
}

&--highlighted {
    font-weight: 900;
    font-style: italic;
}
}

&__link {
color: black;
font-weight: 900;
font-style: italic;
}


}

@media only screen and (min-width: 768px) {

    .hello-section {

max-width: $global-width;
margin-bottom: 280px;

&__header {
font-size: 5rem;

}


}




}



</style> 