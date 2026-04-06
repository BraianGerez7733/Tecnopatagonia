<script setup>
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { services } from '../data/site'
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
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
          />
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
