<script setup>
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import WorkCarousel from '../components/WorkCarousel.vue'
import { gallery } from '../data/site'
</script>

<template>
  <section id="trabajos" class="section-anchor section-padding">
    <div class="container-shell">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Galería"
          title="Trabajos realizados"
          description="Conocé algunas de las soluciones, materiales y tareas que forman parte del trabajo diario de Tecnopatagonia en Río Grande y la zona."
        />
      </RevealOnScroll>

      <div class="mt-14">
        <RevealOnScroll>
          <WorkCarousel :items="gallery" />
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
