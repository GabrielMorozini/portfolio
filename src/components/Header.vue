<script setup lang="ts">
import { useHeader } from '../ts/Header'

const {
    musicList,
    currentTrack,
    isPlaying,
    audio,
    progress,
    toggleMusic,
    nextTrack,
    previousTrack,
    updateProgress
} = useHeader()
</script>

<template>
    <header class="header">
        <section class="music-player" :class="{ 'is-playing': isPlaying }" aria-label="Player de música">
            <div class="cassette">
                <img src="../assets/images/f720df37ff3964df6e4b92146a1fe97e.gif" alt="">
            </div>

            <div class="music-info" aria-live="polite">
                <p class="music-label">// NOW PLAYING</p>
                <p class="music-title">{{ musicList[currentTrack]?.title }}</p>
                <p class="music-artist">{{ musicList[currentTrack]?.artist }}</p>
            </div>

            <div class="music-controls" role="group" aria-label="Controles do player">
                <button type="button" class="control-button" aria-label="Música anterior" @click="previousTrack">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M6 6h2v12H6zM9.5 12 18 18V6z" />
                    </svg>
                </button>

                <button type="button" class="play-button"
                    :aria-label="isPlaying ? 'Pausar música' : 'Reproduzir música'" @click="toggleMusic">
                    <svg v-if="!isPlaying" class="icon-play" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <svg v-else class="icon-pause" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                    </svg>
                </button>

                <button type="button" class="control-button" aria-label="Próxima música" @click="nextTrack">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z" />
                    </svg>
                </button>
            </div>

            <progress class="music-progress" :value="progress" max="100" aria-label="Progresso da música"></progress>

            <audio ref="audio" preload="metadata" @ended="nextTrack" @timeupdate="updateProgress"></audio>
        </section>

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