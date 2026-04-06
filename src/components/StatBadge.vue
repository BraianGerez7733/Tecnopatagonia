<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
    <p class="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
      {{ title }}
    </p>
    <p class="mt-2 text-sm leading-6 text-white/80">
      {{ detail }}
    </p>
  </div>
</template>
