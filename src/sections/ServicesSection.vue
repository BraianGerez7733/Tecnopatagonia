<script setup>
import { ref } from 'vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/site'

const activeVideo = ref(null)

const serviceVideos = {
  'Colocación de adoquines': {
    title: 'Colocación de adoquines',
    label: 'Trabajo real',
    description: 'Mirá una referencia visual del servicio sin salir de la página.',
    youtubeId: 'OaDwNc950zY',
  },
}

function openServiceVideo(service) {
  const video = serviceVideos[service.title]
  if (video) {
    activeVideo.value = video
  }
}

function closeVideo() {
  activeVideo.value = null
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

      <RevealOnScroll>
        <div class="mt-8 rounded-3xl border border-accent/20 bg-accent/10 p-5 text-secondary shadow-soft">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Videos de trabajos
          </p>
          <p class="mt-2 text-base leading-7 text-secondary/78">
            Tocá las tarjetas que indiquen <strong>“Ver video”</strong> para mirar ejemplos reales de nuestros servicios dentro de esta misma página.
          </p>
        </div>
      </RevealOnScroll>

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <RevealOnScroll v-for="service in services" :key="service.title">
          <button
            type="button"
            class="group h-full w-full text-left"
            :class="serviceVideos[service.title] ? 'cursor-pointer' : 'cursor-default'"
            @click="openServiceVideo(service)"
          >
            <ServiceCard
              :title="service.title"
              :description="service.description"
              :icon="service.icon"
            />
            <div
              v-if="serviceVideos[service.title]"
              class="pointer-events-none -mt-16 ml-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-panel transition group-hover:scale-105"
            >
              ▶ Ver video
            </div>
          </button>
        </RevealOnScroll>
      </div>
    </div>

    <div
      v-if="activeVideo"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
      @click.self="closeVideo"
    >
      <div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-secondary shadow-panel">
        <button
          type="button"
          class="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-xl font-bold text-white transition hover:bg-black"
          aria-label="Cerrar video"
          @click="closeVideo"
        >
          ×
        </button>

        <div class="aspect-video w-full overflow-hidden bg-black">
          <iframe
            class="h-full w-full"
            :src="`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`"
            :title="`${activeVideo.title} - Tecnopatagonia`"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen
          ></iframe>
        </div>

        <div class="p-5 text-white">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {{ activeVideo.label }}
          </p>
          <h3 class="mt-2 text-xl font-bold">{{ activeVideo.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-white/75">
            {{ activeVideo.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
