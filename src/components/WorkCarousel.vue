<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const current = ref(0)
let timer

const activeItem = computed(() => props.items[current.value])

const next = () => {
  current.value = (current.value + 1) % props.items.length
}

const prev = () => {
  current.value =
    (current.value - 1 + props.items.length) % props.items.length
}

const goTo = (index) => {
  current.value = index
}

onMounted(() => {
  timer = window.setInterval(next, 4800)
})

onBeforeUnmount(() => {
  window.clearInterval(timer)
})
</script>

<template>
  <div class="rounded-[2rem] border border-primary/8 bg-white p-4 shadow-panel sm:p-5">
    <div class="grid gap-5 lg:grid-cols-[1.35fr_0.85fr]">
      <div class="overflow-hidden rounded-[1.5rem] bg-secondary">
        <img
          :src="activeItem.image"
          :alt="activeItem.title"
          class="h-full min-h-[280px] w-full object-cover"
        />
      </div>

      <div class="flex flex-col justify-between rounded-[1.5rem] bg-surface p-6">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
            Trabajos realizados
          </p>
          <h3 class="mt-3 text-2xl font-semibold text-secondary">
            {{ activeItem.title }}
          </h3>
          <p class="mt-4 text-sm leading-7 text-secondary/75">
            {{ activeItem.description }}
          </p>
        </div>

        <div class="mt-8 flex items-center justify-between gap-3">
          <div class="flex gap-2">
            <button
              type="button"
              class="grid h-12 w-12 place-items-center rounded-2xl bg-white text-secondary transition hover:bg-primary hover:text-white"
              aria-label="Imagen anterior"
              @click="prev"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                <path d="m14.7 5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4L8 12l6.7-6.7Z" />
              </svg>
            </button>
            <button
              type="button"
              class="grid h-12 w-12 place-items-center rounded-2xl bg-white text-secondary transition hover:bg-primary hover:text-white"
              aria-label="Imagen siguiente"
              @click="next"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                <path d="m9.3 18.7-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4L16 12l-6.7 6.7Z" />
              </svg>
            </button>
          </div>

          <div class="flex gap-2">
            <button
              v-for="(item, index) in items"
              :key="item.title"
              type="button"
              class="h-2.5 rounded-full transition-all"
              :class="index === current ? 'w-8 bg-accent' : 'w-2.5 bg-primary/20'"
              :aria-label="`Ir a la imagen ${index + 1}`"
              @click="goTo(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
