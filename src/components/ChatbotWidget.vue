<script setup>
import { ref } from 'vue'
import { quickActions } from '../data/site'

const isOpen = ref(false)
</script>

<template>
  <div class="fixed bottom-24 right-4 z-50 sm:right-6">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-3 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-3 opacity-0"
    >
      <div
        v-if="isOpen"
        class="mb-4 w-[min(92vw,340px)] rounded-3xl border border-primary/10 bg-white p-5 shadow-panel"
      >
        <div class="mb-4 flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Asistente rápido
            </p>
            <h3 class="mt-1 text-lg font-semibold text-secondary">
              Hola. ¿Sobre qué querés consultar?
            </h3>
          </div>
          <button
            type="button"
            class="rounded-full bg-surface p-2 text-secondary transition hover:bg-primary hover:text-white"
            aria-label="Cerrar asistente"
            @click="isOpen = false"
          >
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current">
              <path d="M6.7 5.3 12 10.6l5.3-5.3 1.4 1.4L13.4 12l5.3 5.3-1.4 1.4L12 13.4l-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4Z" />
            </svg>
          </button>
        </div>
        <div class="space-y-2">
          <a
            v-for="action in quickActions"
            :key="action.label"
            :href="action.href"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-between rounded-2xl border border-primary/8 bg-surface px-4 py-3 text-sm font-medium text-secondary transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white hover:text-primary"
          >
            <span>{{ action.label }}</span>
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-accent">
              <path d="M12 4a8 8 0 0 0-6.83 12.16L4 20l3.95-1.15A8 8 0 1 0 12 4Zm4.18 11.24c-.17.47-.98.9-1.35.96-.35.06-.8.08-1.29-.08-.3-.1-.7-.23-1.2-.45-2.12-.92-3.5-3.07-3.6-3.2-.1-.13-.86-1.14-.86-2.18 0-1.03.54-1.53.73-1.74.19-.21.42-.26.56-.26.14 0 .28 0 .4.01.13 0 .3-.05.47.36.17.42.58 1.45.63 1.56.05.11.08.24.02.37-.06.13-.09.21-.18.32-.09.1-.19.24-.27.32-.09.09-.19.19-.08.37.11.18.5.82 1.07 1.33.73.65 1.35.85 1.54.94.19.1.3.08.41-.05.11-.13.47-.55.59-.74.12-.19.25-.16.41-.09.17.07 1.07.5 1.26.59.19.1.31.14.36.22.05.08.05.48-.12.94Z" />
            </svg>
          </a>
        </div>
      </div>
    </transition>

    <button
      type="button"
      class="soft-ring flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-secondary"
      @click="isOpen = !isOpen"
    >
      <span class="grid h-10 w-10 place-items-center rounded-full bg-accent text-white">
        <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
          <path d="M12 3C6.48 3 2 6.94 2 11.8c0 2.7 1.4 5.13 3.6 6.74V22l3.1-1.72c1.01.28 2.12.42 3.3.42 5.52 0 10-3.94 10-8.8S17.52 3 12 3Zm-4.5 9.4h9v1.6h-9v-1.6Zm0-3h9V11h-9V9.4Zm6 6h-6v-1.6h6v1.6Z" />
        </svg>
      </span>
      <span>Asistente rápido</span>
    </button>
  </div>
</template>
