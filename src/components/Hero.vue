<template>
    <section class="banner">
        <article class="main-content">

            <p class="eyebrow">
                // FULL STACK DEVELOPER
            </p>

            <h1>Gabriel</h1>

            <h2>Morozini</h2>

            <article>
                <h4 class="typewriter" :aria-label="fullText">
                    <span class="typed" aria-hidden="true">{{ typedText }}<span class="cursor"></span></span>
                </h4>
                <article class="social">
                    <a href="https://github.com/GabrielMorozini" target="_blank">
                        <img src="../assets/images/github.svg" alt="">Github
                    </a>
                    <a href="https://www.linkedin.com/in/gabriel-morozini-2aa28b251" target="_blank">
                        <img src="../assets/images/linkedin-teste.svg" alt="">Linkedin
                    </a>
                    <a href="https://www.instagram.com/dev_morozini/" target="_blank">
                        <img src="../assets/images/instagram.svg" alt="">Instagram
                    </a>
                </article>
            </article>
        </article>
    </section>
</template>

<script lang="ts" src="../ts/Hero.ts"></script>

<style lang="scss" src="../scss/Hero.scss"></style>