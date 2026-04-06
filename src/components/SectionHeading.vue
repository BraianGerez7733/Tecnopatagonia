<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  light: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="max-w-3xl">
    <p
      v-if="eyebrow"
      class="text-xs font-semibold uppercase tracking-[0.28em]"
      :class="light ? 'text-accent' : 'text-accent'"
    >
      {{ eyebrow }}
    </p>
    <h2
      class="industrial-divider mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
      :class="light ? 'text-white' : 'text-secondary'"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-8 text-base leading-7 sm:text-lg"
      :class="light ? 'text-white/80' : 'text-secondary/75'"
    >
      {{ description }}
    </p>
  </div>
</template>
