<template>
    <section class="about">
        <article class="about-me">
            <h3>Who am i?</h3>
            <p>I am a student of Systems Analysis and Development and Internet Systems Technology, Full Stack developer
                and Internet Computer technician. I'm also an expert in cybersecurity and game development.

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