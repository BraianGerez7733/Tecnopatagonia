<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { company, navigation } from '../data/site'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="container-shell pt-4">
      <div
        class="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft sm:px-5"
      >
        <a href="#inicio" class="flex items-center gap-3 text-secondary">
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-lg font-bold text-white">
            TP
          </span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.26em] text-accent">
              Río Grande
            </p>
            <p class="text-base font-bold tracking-[0.08em] sm:text-lg">
              {{ company.name }}
            </p>
          </div>
        </a>

        <nav class="hidden items-center gap-8 lg:flex">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-secondary transition hover:text-primary"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="hidden lg:block">
          <BaseButton :href="company.social.whatsapp" variant="dark" external>
            WhatsApp
          </BaseButton>
        </div>

        <button
          type="button"
          class="grid h-11 w-11 place-items-center rounded-2xl bg-surface text-secondary transition hover:bg-primary hover:text-white lg:hidden"
          aria-label="Abrir menú"
          @click="isOpen = !isOpen"
        >
          <svg v-if="!isOpen" viewBox="0 0 24 24" class="h-5 w-5 fill-current">
            <path d="M4 7h16v2H4V7Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="h-5 w-5 fill-current">
            <path d="m6.7 5.3 5.3 5.3 5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4Z" />
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="transition duration-250 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div
          v-if="isOpen"
          class="glass-panel mt-3 rounded-2xl p-4 shadow-soft lg:hidden"
        >
          <nav class="flex flex-col gap-2">
            <a
              v-for="item in navigation"
              :key="item.href"
              :href="item.href"
              class="rounded-2xl px-4 py-3 text-sm font-medium text-secondary transition hover:bg-surface hover:text-primary"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
          </nav>
          <div class="mt-3">
            <BaseButton :href="company.social.whatsapp" variant="dark" external class="w-full">
              WhatsApp
            </BaseButton>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>
