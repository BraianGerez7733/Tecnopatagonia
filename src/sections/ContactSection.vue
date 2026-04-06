<script setup>
import BaseButton from '../components/BaseButton.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { company } from '../data/site'
</script>

<template>
  <section id="contacto" class="section-anchor section-padding bg-white">
    <div class="container-shell">
      <div class="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <RevealOnScroll>
          <div>
            <SectionHeading
              eyebrow="Contacto"
              title="Contacto"
              description="Si querés consultar por servicios, materiales o presupuestos, podés comunicarte directamente. Tecnopatagonia brinda atención en Río Grande y la zona, con respuesta rápida y trato directo."
            />

            <div class="mt-10 grid gap-4">
              <div class="rounded-[1.75rem] bg-surface p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Dirección
                </p>
                <p class="mt-3 text-lg font-semibold text-secondary">
                  {{ company.address }}
                </p>
              </div>

              <div class="rounded-[1.75rem] bg-surface p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Teléfonos
                </p>
                <p class="mt-3 text-lg font-semibold text-secondary">
                  {{ company.phones.join(' / ') }}
                </p>
              </div>
            </div>

            <div class="mt-8 grid gap-3 sm:grid-cols-3">
              <BaseButton :href="company.social.whatsapp" variant="dark" size="lg" external>
                WhatsApp
              </BaseButton>
              <BaseButton :href="company.social.facebook" variant="light" size="lg" external>
                Facebook
              </BaseButton>
              <BaseButton :href="company.social.instagram" variant="light" size="lg" external>
                Instagram
              </BaseButton>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div class="overflow-hidden rounded-[2rem] border border-primary/8 bg-surface p-3 shadow-panel">
            <iframe
              :src="company.mapsEmbed"
              title="Mapa de Tecnopatagonia"
              class="h-[420px] w-full rounded-[1.5rem] border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
