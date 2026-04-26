<script setup>
import { ref } from 'vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/site'

const showPavingVideo = ref(false)

function openServiceVideo(service) {
  if (service.title === 'Colocación de adoquines') {
    showPavingVideo.value = true
  }
}
</script>

<template>
  <section id="servicios" class="section-anchor section-padding bg-white">
    <div class="container-shell">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Servicios"
          title="Nuestros servicios"
          description="Soluciones concretas para obra, terreno y espacios exteriores"
        />
      </RevealOnScroll>

      <div class="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <RevealOnScroll v-for="service in services" :key="service.title">
          <button
            type="button"
            class="h-full w-full text-left"
            :class="service.title === 'Colocación de adoquines' ? 'cursor-pointer' : 'cursor-default'"
            @click="openServiceVideo(service)"
          >
            <ServiceCard
              :title="service.title"
              :description="service.description"
              :icon="service.icon"
            />
          </button>
        </RevealOnScroll>
      </div>
    </div>

    <div
      v-if="showPavingVideo"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
      @click.self="showPavingVideo = false"
    >
      <div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-secondary shadow-panel">
        <button
          type="button"
          class="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-xl font-bold text-white transition hover:bg-black"
          aria-label="Cerrar video"
          @click="showPavingVideo = false"
        >
          ×
        </button>

        <div class="aspect-video w-full overflow-hidden bg-black">
          <iframe
            class="h-full w-full"
            src="https://www.youtube.com/embed/OaDwNc950zY?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
            title="Colocación de adoquines - Tecnopatagonia"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        </div>

        <div class="p-5 text-white">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Trabajo real
          </p>
          <h3 class="mt-2 text-xl font-bold">Colocación de adoquines</h3>
          <p class="mt-2 text-sm leading-6 text-white/75">
            Mirá una referencia visual del servicio sin salir de la página.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
