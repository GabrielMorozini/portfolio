import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

const FULL_TEXT = 'Full Stack Developer, Beginner Game Developer, and Cybersecurity Learner'
const START_DELAY = 600 // espera antes de começar a digitar (ms)
const TYPE_SPEED = 55 // tempo base entre letras (ms)

export default defineComponent({
    name: 'Hero',
    setup() {
        const fullText = FULL_TEXT
        const typedText = ref<string>('')
        let timer: ReturnType<typeof setTimeout> | undefined

        const typeNext = (): void => {
            if (typedText.value.length >= FULL_TEXT.length) return

            typedText.value = FULL_TEXT.slice(0, typedText.value.length + 1)

            // Pequena variação no ritmo para parecer digitação humana
            const delay = TYPE_SPEED + Math.random() * 60
            timer = setTimeout(typeNext, delay)
        }

        onMounted(() => {
            // Respeita quem prefere menos animação
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                typedText.value = FULL_TEXT
                return
            }
            timer = setTimeout(typeNext, START_DELAY)
        })

        onBeforeUnmount(() => {
            if (timer) clearTimeout(timer)
        })

        return { fullText, typedText }
    },
})