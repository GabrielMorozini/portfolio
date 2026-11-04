import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'

import egoInitial from '../assets/images/art/pixelart/default.png'
import egoLookRight from '../assets/images/art/pixelart/right.png'
import egoLookLeft from '../assets/images/art/pixelart/left.png'
import egoWear from '../assets/images/art/pixelart/animacao/wear.gif'
import egoFinal from '../assets/images/art/pixelart/glass.png'
import egoUnwear from '../assets/images/art/pixelart/animacao/unwear.gif'

const WEAR_DURATION = 2400
const UNWEAR_DURATION = 2400

const DEAD_ZONE = 0.1

type State = 'idle' | 'wearing' | 'worn' | 'unwearing'
type Look = 'center' | 'left' | 'right'

export default defineComponent({
    name: 'About',
    setup() {
        const state = ref<State>('idle')
        const look = ref<Look>('center')
        const gifKey = ref<number>(0)
        const egoImg = ref<HTMLImageElement | null>(null)
        let timer: ReturnType<typeof setTimeout> | undefined

        const lookImages: Record<Look, string> = {
            center: egoInitial,
            left: egoLookLeft,
            right: egoLookRight,
        }

        const egoSrc = computed<string>(() => {
            switch (state.value) {
                case 'wearing':
                    return `${egoWear}?t=${gifKey.value}`
                case 'worn':
                    return egoFinal
                case 'unwearing':
                    return `${egoUnwear}?t=${gifKey.value}`
                default:
                    return lookImages[look.value]
            }
        })

        const buttonLabel = computed<string>(() => {
            switch (state.value) {
                case 'idle':
                    return 'Become cool'
                case 'worn':
                    return 'Become normal'
                default:
                    return '...'
            }
        })

        const isBusy = computed<boolean>(
            () => state.value === 'wearing' || state.value === 'unwearing'
        )

        const handleMouseMove = (event: MouseEvent): void => {
            if (state.value !== 'idle') return
            if (!egoImg.value) return

            const rect = egoImg.value.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const offset = event.clientX - centerX
            const limit = window.innerWidth * DEAD_ZONE

            let next: Look = 'center'
            if (offset < -limit) next = 'left'
            else if (offset > limit) next = 'right'

            if (next !== look.value) look.value = next
        }

        onMounted(() => {
            ;[egoLookLeft, egoLookRight, egoWear, egoFinal, egoUnwear].forEach((src) => {
                new Image().src = src
            })
            window.addEventListener('mousemove', handleMouseMove)
        })

        onBeforeUnmount(() => {
            window.removeEventListener('mousemove', handleMouseMove)
            if (timer) clearTimeout(timer)
        })

        const toggle = (): void => {
            if (isBusy.value) return

            gifKey.value = Date.now()

            if (state.value === 'idle') {
                state.value = 'wearing'
                timer = setTimeout(() => {
                    state.value = 'worn'
                }, WEAR_DURATION)
            } else if (state.value === 'worn') {
                state.value = 'unwearing'
                timer = setTimeout(() => {
                    state.value = 'idle'
                }, UNWEAR_DURATION)
            }
        }

        return { egoImg, egoSrc, buttonLabel, isBusy, toggle }
    },
})