<script setup>
import BaseButton from '../components/BaseButton.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { company, differentiators } from '../data/site'
</script>

<template>
  <section class="section-padding">
    <div class="container-shell">
      <div class="hero-mesh overflow-hidden rounded-[2.5rem] px-6 py-10 text-white shadow-panel sm:px-8 lg:px-10 lg:py-12">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Diferenciales"
            title="Por qué elegirnos"
            description="Trabajamos con enfoque práctico, atención directa y compromiso real con cada proyecto, brindando respuestas concretas para distintas necesidades de obra y terreno."
            light
          />
        </RevealOnScroll>

        <div class="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <RevealOnScroll v-for="item in differentiators" :key="item">
            <div class="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div class="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-accent text-white">
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                  <path d="M12 2 4 5v6c0 5.05 3.41 9.71 8 11 4.59-1.29 8-5.95 8-11V5l-8-3Zm-1 14-3-3 1.41-1.41L11 13.17l4.59-4.58L17 10l-6 6Z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white">
                {{ item }}
              </h3>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <BaseButton :href="company.social.whatsapp" variant="primary" size="lg" external>
              Consultar por WhatsApp
            </BaseButton>
            <BaseButton href="#contacto" variant="secondary" size="lg">
              Ver contacto
            </BaseButton>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
