<script setup>
import BaseButton from '../components/BaseButton.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import StatBadge from '../components/StatBadge.vue'
import { company, heroVisual } from '../data/site'
</script>

<template>
  <section
    id="inicio"
    class="section-anchor relative overflow-hidden pb-10 pt-28 sm:pt-32 lg:pb-16"
  >
    <div class="absolute inset-x-0 top-0 h-[82%] hero-mesh"></div>
    <div class="absolute right-0 top-32 hidden h-56 w-56 rounded-full bg-accent/25 blur-3xl lg:block"></div>
    <div class="container-shell relative">
      <div class="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <RevealOnScroll>
          <div class="max-w-3xl text-white">
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Río Grande, Tierra del Fuego
            </p>
            <h1 class="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {{ company.name }}
            </h1>
            <p class="mt-5 max-w-2xl text-xl font-medium text-white/86 sm:text-2xl">
              {{ company.tagline }}
            </p>
            <p class="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              {{ company.description }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <BaseButton :href="company.social.budget" variant="primary" size="lg" external>
                Solicitar presupuesto
              </BaseButton>
              <BaseButton href="#servicios" variant="secondary" size="lg">
                Ver servicios
              </BaseButton>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <StatBadge title="Atención directa" detail="Contacto ágil para coordinar relevamientos, materiales y consultas reales de obra." />
              <StatBadge title="Respuesta local" detail="Cobertura en Río Grande y la zona con enfoque práctico y compromiso operativo." />
              <StatBadge title="Trabajo responsable" detail="Soluciones concretas para terrenos, exteriores, materiales y mantenimiento general." />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div class="relative mx-auto w-full max-w-xl">
            <div
              class="absolute -left-5 top-10 hidden h-24 w-24 rounded-3xl border border-white/20 bg-white/10 backdrop-blur lg:block"
            ></div>
            <div
              class="absolute -right-4 bottom-10 hidden h-28 w-28 rounded-full border border-accent/30 bg-accent/10 blur-sm lg:block"
            ></div>
            <div class="glass-panel animate-float rounded-[2rem] p-4 shadow-panel">
              <img
                :src="heroVisual"
                alt="Referencia visual de trabajo en obra, maquinaria y materiales para Tecnopatagonia"
                class="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div
              class="absolute -bottom-5 left-4 max-w-xs rounded-3xl border border-white/20 bg-secondary/88 p-5 text-white shadow-panel backdrop-blur"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Identidad fueguina
              </p>
              <p class="mt-2 text-sm leading-6 text-white/78">
                Composición visual de referencia lista para ser reemplazada por fotos reales de Facebook o Instagram sin tocar la estructura del sitio.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
