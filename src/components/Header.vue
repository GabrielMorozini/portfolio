<script setup lang="ts">
import { useHeader } from '../ts/Header'

const {
    musicList,
    currentTrack,
    isPlaying,
    audio,
    toggleMusic,
    nextTrack,
    previousTrack
} = useHeader()
</script>

<template>
    <header class="header">
        <aside class="music-player" aria-label="Player de música">

            <figure class="cassette">
                <img src="../assets/images/f720df37ff3964df6e4b92146a1fe97e.gif" alt="Cassete animado">
            </figure>

            <section class="music-info">
                <small>// NOW PLAYING</small>
                <strong>{{ musicList[currentTrack]?.title }}</strong>
                <p>{{ musicList[currentTrack]?.artist }}</p>
            </section>

            <div class="music-controls">
                <button type="button" class="control-button" aria-label="Música anterior" @click="previousTrack">
                    ⏮
                </button>

                <button type="button" class="play-button"
                    :aria-label="isPlaying ? 'Pausar música' : 'Reproduzir música'" @click="toggleMusic">
                    {{ isPlaying ? '⏸' : '▶' }}
                </button>

                <button type="button" class="control-button" aria-label="Próxima música" @click="nextTrack">
                    ⏭
                </button>
            </div>

            <!-- o ref="audio" liga este elemento ao ref do composable -->
            <audio ref="audio" @ended="nextTrack"></audio>

        </aside>

        <nav class="header__nav" aria-label="Navegação principal">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" src="../scss/Header.scss"></style>