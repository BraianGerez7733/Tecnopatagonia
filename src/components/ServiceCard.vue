<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'terrain',
  },
})

const icons = {
  terrain:
    'M4 16 9 9l3 4 3-2 5 5H4Zm0 4h16v-2H4v2Z',
  level:
    'M4 12h16v2H4v-2Zm3-5h10v2H7V7Zm-2 10h14v2H5v-2Z',
  layers:
    'm12 4 8 4-8 4-8-4 8-4Zm-8 7 8 4 8-4v3l-8 4-8-4v-3Z',
  cut:
    'M6 6h6v2H6V6Zm0 4h12v2H6v-2Zm0 4h9v2H6v-2Zm0 4h12v2H6v-2Z',
  leaf:
    'M18 5c-5 .2-9 3.7-9 8.2V19h2v-2.7c4.5 0 8-3.5 8-8V5h-1Z',
  aggregate:
    'M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  blocks:
    'M4 6h7v5H4V6Zm9 0h7v5h-7V6ZM4 13h7v5H4v-5Zm9 0h7v5h-7v-5Z',
  paving:
    'M4 9h5v5H4V9Zm6-3h5v5h-5V6Zm6 3h4v5h-4V9Zm-6 6h5v5h-5v-5Z',
  tools:
    'm14 4 6 6-1.4 1.4-1.8-1.8-3.4 3.4 1.8 1.8-1.4 1.4-6-6L14 4Zm-8 8 3 3-4 4H2v-3l4-4Z',
}
</script>

<template>
  <article
    class="group h-full rounded-3xl border border-primary/8 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-panel"
  >
    <div
      class="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white transition duration-300 group-hover:bg-accent"
    >
      <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current">
        <path :d="icons[props.icon]" />
      </svg>
    </div>
    <h3 class="text-xl font-semibold tracking-tight text-secondary">
      {{ title }}
    </h3>
    <p class="mt-3 text-sm leading-6 text-secondary/75">
      {{ description }}
    </p>
  </article>
</template>
