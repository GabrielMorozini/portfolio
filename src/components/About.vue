<template>
    <section class="about">
        <article class="about-me">
            <h3>Who am i?</h3>
            <p>I am an Internet Computer Technician graduated from Colégio Estadual Ana Vanda Bassara, I am a full stack
                developer, an ADS student at Uninter and a TSI student at UTFPR, and I am learning cybersecurity and
                game development independently. </p>
            <p>
                I have a great affection for older and some newer video games and for art with a retrofuturistic sci-fi
                aesthetic from the 70s. I really enjoy stories in general, meeting different cultures, discovering and
                learning new things, and always striving to exercise my creativity. I often do pixel art, explore tools,
                CTF online and test Operating Systems</p>
        </article>
        <article class="me">
            <img src="../assets/images/monitor.png" class="monitor" alt="Monitor">
            <img ref="egoImg" :src="egoSrc" class="ego" alt="Ego">
            <button class="btn" :disabled="isBusy" @click="toggle">{{ buttonLabel }}</button>
        </article>
    </section>
</template>

<script lang="ts" src="../ts/About.ts"></script>

<style lang="scss" src="../scss/About.scss"></style>