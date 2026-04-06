<script setup>
defineProps({
  href: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  external: {
    type: Boolean,
    default: false,
  },
})

const variants = {
  primary:
    'bg-accent text-white hover:-translate-y-0.5 hover:bg-[#bc7b03] focus-visible:outline-accent',
  secondary:
    'bg-white/12 text-white ring-1 ring-white/25 hover:-translate-y-0.5 hover:bg-white/18 focus-visible:outline-white',
  dark: 'bg-primary text-white hover:-translate-y-0.5 hover:bg-[#18314f] focus-visible:outline-primary',
  light:
    'bg-white text-primary ring-1 ring-primary/10 hover:-translate-y-0.5 hover:bg-surface focus-visible:outline-primary',
}

const sizes = {
  md: 'px-5 py-3 text-sm sm:text-base',
  lg: 'px-6 py-3.5 text-base',
}
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-[0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
  </a>
</template>
