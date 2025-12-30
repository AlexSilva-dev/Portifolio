<script setup lang="ts">
import Footer from '~/components/home/Footer.vue'
import Header from '~/components/home/Header.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

useHead({
  title: 'Alex Alves - Portfólio',
  meta: [
    { name: 'description', content: 'Portfólio de Alex Alves - Desenvolvedor Full Stack & Kotlin' },
    { name: 'theme-color', content: '#0f172a' }
  ],
  bodyAttrs: {
    class: 'bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300'
  }
})
</script>

<template>
  <div class="min-h-screen">
    <Transition name="fade">
      <PongLoader v-if="isLoading" />
    </Transition>

    <div v-show="!isLoading" class="transition-opacity duration-700"
      :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }">
      <!-- Background Elements -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div class="blob-bg bg-primary w-96 h-96 rounded-full top-[-100px] right-[-100px]"></div>
        <div class="blob-bg bg-accent w-80 h-80 rounded-full bottom-[-100px] left-[-100px]"></div>
        <div class="blob-bg bg-purple-600 w-64 h-64 rounded-full top-[40%] left-[20%] opacity-20"></div>
      </div>
      <div class="fixed inset-0 bg-tech-grid opacity-20 pointer-events-none z-0"></div>

      <Header />

      <main class="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-8 pb-20 pt-16">
        <HomeSessionHero />
        <HomeSessionAbout />
        <HomeSessionExperience />
        <HomeSessionProjects />
        <HomeSessionSkills />
        <HomeSessionCertifications />
        <HomeSessionContact />
      </main>

      <Footer />
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
