<script setup>
import { company } from '../data/site'
</script>

<template>
  <a
    :href="company.social.whatsapp"
    target="_blank"
    rel="noreferrer"
    aria-label="Abrir WhatsApp"
    class="fixed bottom-5 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-panel transition duration-300 hover:-translate-y-1 hover:bg-[#bc7b03] sm:right-6"
  >
    <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current">
      <path d="M12 4a8 8 0 0 0-6.83 12.16L4 20l3.95-1.15A8 8 0 1 0 12 4Zm4.18 11.24c-.17.47-.98.9-1.35.96-.35.06-.8.08-1.29-.08-.3-.1-.7-.23-1.2-.45-2.12-.92-3.5-3.07-3.6-3.2-.1-.13-.86-1.14-.86-2.18 0-1.03.54-1.53.73-1.74.19-.21.42-.26.56-.26.14 0 .28 0 .4.01.13 0 .3-.05.47.36.17.42.58 1.45.63 1.56.05.11.08.24.02.37-.06.13-.09.21-.18.32-.09.1-.19.24-.27.32-.09.09-.19.19-.08.37.11.18.5.82 1.07 1.33.73.65 1.35.85 1.54.94.19.1.3.08.41-.05.11-.13.47-.55.59-.74.12-.19.25-.16.41-.09.17.07 1.07.5 1.26.59.19.1.31.14.36.22.05.08.05.48-.12.94Z" />
    </svg>
  </a>
</template>
