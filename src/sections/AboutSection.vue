<script setup>
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { about, company, highlights } from '../data/site'
</script>

<template>
  <section id="nosotros" class="section-anchor section-padding">
    <div class="container-shell">
      <div class="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <RevealOnScroll>
          <div class="rounded-[2rem] bg-secondary p-8 text-white shadow-panel">
            <SectionHeading
              eyebrow="Empresa local"
              :title="about.title"
              light
            />
            <p class="mt-8 text-base leading-8 text-white/78">
              {{ about.text }}
            </p>
            <p class="mt-6 text-base leading-8 text-white/78">
              {{ about.textSecondary }}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div class="grid gap-5">
            <div class="rounded-[2rem] border border-primary/8 bg-white p-8 shadow-soft">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Presencia local real
              </p>
              <h3 class="mt-3 text-2xl font-semibold text-secondary sm:text-3xl">
                Tecnopatagonia acompaña obras, terrenos y necesidades concretas de Río Grande.
              </h3>
              <p class="mt-4 text-base leading-8 text-secondary/75">
                Desde su base operativa en {{ company.address }}, la empresa trabaja con cercanía, lectura práctica del terreno y respuesta directa para proyectos particulares, tareas exteriores, provisión de materiales y apoyo general en obra.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              <div
                v-for="item in highlights"
                :key="item"
                class="rounded-[1.75rem] border border-primary/8 bg-surface p-6 shadow-soft"
              >
                <div class="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white">
                  <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                    <path d="M12 3 3 8v6c0 5 3.8 8.8 9 10 5.2-1.2 9-5 9-10V8l-9-5Zm-1.2 13.4-3.3-3.3 1.4-1.4 1.9 1.9 4.8-4.8 1.4 1.4-6.2 6.2Z" />
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-secondary">
                  {{ item }}
                </h4>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
