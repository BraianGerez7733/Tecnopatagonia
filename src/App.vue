<script setup>
import MainHeader from './components/MainHeader.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'
import ChatbotWidget from './components/ChatbotWidget.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ServicesSection from './sections/ServicesSection.vue'
import WorksSection from './sections/WorksSection.vue'
import DifferentialsSection from './sections/DifferentialsSection.vue'
import ContactSection from './sections/ContactSection.vue'
import FooterSection from './sections/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <MainHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <DifferentialsSection />
      <ContactSection />
    </main>
    <FooterSection />
    <ChatbotWidget />
    <FloatingWhatsApp />
  </div>
</template>
