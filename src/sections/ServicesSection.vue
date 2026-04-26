<script setup>
import { computed, ref } from 'vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/site'

const activeVideo = ref(null)
const activeGallery = ref(null)
const activeGalleryIndex = ref(0)

const serviceVideos = {
  'Colocación de adoquines': {
    title: 'Colocación de adoquines',
    label: 'Trabajo real',
    description: 'Mirá una referencia visual del servicio sin salir de la página.',
    youtubeId: 'OaDwNc950zY',
  },
}

const serviceGalleries = {
  'Venta de áridos': {
    title: 'Venta de áridos',
    label: 'Galería de materiales',
    description: 'Deslizá o tocá las flechas para ver las fotos disponibles.',
    images: [
      {
        src: '/img_2_1777174504595.jpg',
        alt: 'Bolsón de material árido de Tecnopatagonia',
      },
      {
        src: '/img_3_1777174519586.jpg',
        alt: 'Bolsón con piedra y áridos para obra',
      },
    ],
  },
}

const currentGalleryImage = computed(() => {
  if (!activeGallery.value) return null
  return activeGallery.value.images[activeGalleryIndex.value]
})

function hasMedia(service) {
  return Boolean(serviceVideos[service.title] || serviceGalleries[service.title])
}

function openServiceMedia(service) {
  const video = serviceVideos[service.title]
  const gallery = serviceGalleries[service.title]

  if (video) {
    activeVideo.value = video
    return
  }

  if (gallery) {
    activeGallery.value = gallery
    activeGalleryIndex.value = 0
  }
}

function closeVideo() {
  activeVideo.value = null
}

function closeGallery() {
  activeGallery.value = null
  activeGalleryIndex.value = 0
}

function nextGalleryImage() {
  if (!activeGallery.value) return
  activeGalleryIndex.value =
    (activeGalleryIndex.value + 1) % activeGallery.value.images.length
}

function previousGalleryImage() {
  if (!activeGallery.value) return
  activeGalleryIndex.value =
    activeGalleryIndex.value === 0
      ? activeGallery.value.images.length - 1
      : activeGalleryIndex.value - 1
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
            Trabajos reales
          </p>
          <p class="mt-2 text-base leading-7 text-secondary/78">
            Tocá las tarjetas que indiquen <strong>“Ver video”</strong> o <strong>“Ver fotos”</strong> para mirar ejemplos dentro de esta misma página.
          </p>
        </div>
      </RevealOnScroll>

      <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <RevealOnScroll v-for="service in services" :key="service.title">
          <button
            type="button"
            class="group h-full w-full text-left"
            :class="hasMedia(service) ? 'cursor-pointer' : 'cursor-default'"
            @click="openServiceMedia(service)"
          >
            <ServiceCard
              :title="service.title"
              :description="service.description"
              :icon="service.icon"
            />
            <div
              v-if="hasMedia(service)"
              class="pointer-events-none -mt-16 ml-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-panel transition group-hover:scale-105"
            >
              {{ serviceVideos[service.title] ? '▶ Ver video' : '▣ Ver fotos' }}
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

    <div
      v-if="activeGallery"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
      @click.self="closeGallery"
    >
      <div class="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-secondary shadow-panel">
        <button
          type="button"
          class="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/65 text-xl font-bold text-white transition hover:bg-black"
          aria-label="Cerrar galería"
          @click="closeGallery"
        >
          ×
        </button>

        <div class="relative aspect-square w-full overflow-hidden bg-black">
          <img
            v-if="currentGalleryImage"
            :src="currentGalleryImage.src"
            :alt="currentGalleryImage.alt"
            class="h-full w-full object-cover"
          />

          <button
            type="button"
            class="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-2xl font-bold text-white transition hover:bg-black"
            aria-label="Foto anterior"
            @click="previousGalleryImage"
          >
            ‹
          </button>
          <button
            type="button"
            class="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-2xl font-bold text-white transition hover:bg-black"
            aria-label="Foto siguiente"
            @click="nextGalleryImage"
          >
            ›
          </button>
        </div>

        <div class="p-5 text-white">
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {{ activeGallery.label }}
          </p>
          <h3 class="mt-2 text-xl font-bold">{{ activeGallery.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-white/75">
            {{ activeGallery.description }}
          </p>
          <div class="mt-4 flex justify-center gap-2">
            <button
              v-for="(_, index) in activeGallery.images"
              :key="index"
              type="button"
              class="h-2 rounded-full transition-all"
              :class="index === activeGalleryIndex ? 'w-8 bg-accent' : 'w-2 bg-white/35'"
              :aria-label="`Ver foto ${index + 1}`"
              @click="activeGalleryIndex = index"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
