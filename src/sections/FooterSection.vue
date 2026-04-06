<script setup>
import { company, navigation } from '../data/site'
</script>

<template>
  <footer class="bg-secondary py-10 text-white">
    <div class="container-shell">
      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            TECNOPATAGONIA
          </p>
          <p class="mt-4 max-w-md text-sm leading-7 text-white/75">
            Soluciones en movimientos de suelo, materiales y obra para Río Grande y la zona.
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Navegación
          </p>
          <div class="mt-4 flex flex-col gap-3">
            <a
              v-for="item in navigation"
              :key="item.href"
              :href="item.href"
              class="text-sm text-white/75 transition hover:text-accent"
            >
              {{ item.label }}
            </a>
          </div>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Accesos directos
          </p>
          <div class="mt-4 flex flex-col gap-3">
            <a :href="company.social.whatsapp" target="_blank" rel="noreferrer" class="text-sm text-white/75 transition hover:text-accent">
              WhatsApp
            </a>
            <a :href="company.social.facebook" target="_blank" rel="noreferrer" class="text-sm text-white/75 transition hover:text-accent">
              Facebook
            </a>
            <a :href="company.social.instagram" target="_blank" rel="noreferrer" class="text-sm text-white/75 transition hover:text-accent">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
        © Tecnopatagonia – Río Grande, Tierra del Fuego
      </div>
    </div>
  </footer>
</template>
