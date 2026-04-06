<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isVisible = ref(false)
const node = ref(null)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer?.disconnect()
      }
    },
    { threshold: 0.16 },
  )

  if (node.value) observer.observe(node.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="node"
    class="transition-all duration-700 ease-out"
    :class="isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
  >
    <slot />
  </div>
</template>
