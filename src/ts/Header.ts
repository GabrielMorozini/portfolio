import { ref } from 'vue'
import musicList from '../data/music.json'

type Music = {
    title: string
    artist: string
    src: string
}

export function useHeader() {
    const isPlaying = ref(false)
    const currentTrack = ref(0)
    const audio = ref<HTMLAudioElement | null>(null)

    // guarda qual faixa já está carregada no <audio>,
    // para não reiniciar a música ao dar pause/play
    let loadedTrack = -1

    const playMusic = async () => {
        const element = audio.value
        if (!element) return

        const track: Music | undefined = musicList[currentTrack.value]
        if (!track) return

        if (loadedTrack !== currentTrack.value) {
            element.src = track.src
            loadedTrack = currentTrack.value
        }

        try {
            await element.play()
            isPlaying.value = true
        } catch (error) {
            console.error('Não foi possível reproduzir a música:', error)
            isPlaying.value = false
        }
    }

    const pauseMusic = () => {
        if (!audio.value) return

        audio.value.pause()
        isPlaying.value = false
    }

    const toggleMusic = () => {
        if (isPlaying.value) {
            pauseMusic()
        } else {
            playMusic()
        }
    }

    const nextTrack = () => {
        currentTrack.value = (currentTrack.value + 1) % musicList.length
        playMusic()
    }

    const previousTrack = () => {
        currentTrack.value =
            (currentTrack.value - 1 + musicList.length) % musicList.length
        playMusic()
    }

    return {
        musicList,
        currentTrack,
        isPlaying,
        audio,
        toggleMusic,
        nextTrack,
        previousTrack
    }
}