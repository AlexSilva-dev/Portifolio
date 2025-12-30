<script setup lang="ts">
const projectsContainer = ref<HTMLElement | null>(null)

const scrollProjects = (direction: 'left' | 'right') => {
  if (projectsContainer.value) {
    const scrollAmount = 400 // Approximate width of a card
    projectsContainer.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <section class="px-0 scroll-mt-24 relative group/projects" id="projects">
    <div class="flex items-center gap-3 mb-6 px-6">
      <div class="h-8 w-1 bg-primary rounded-full"></div>
      <h3 class="text-2xl font-bold text-white">Projetos</h3>
    </div>

    <div class="relative px-2 sm:px-6 group">
      <!-- Left Arrow -->
      <button @click="scrollProjects('left')"
        class="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface-card/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary hover:border-primary transition-all active:scale-95 shadow-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 disabled:opacity-0">
        <span class="material-symbols-outlined text-3xl">chevron_left</span>
      </button>

      <!-- Projects Container -->
      <div ref="projectsContainer"
        class="flex overflow-x-auto gap-4 px-4 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth">
        
        <!-- Quantum Quarto -->
        <div
          class="min-w-[85vw] sm:min-w-[400px] snap-center bg-surface-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group/card relative">
          <div class="h-48 bg-slate-800 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent opacity-60 z-10"></div>
            <div
              class="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <span class="material-symbols-outlined text-6xl text-white/20">school</span>
            </div>

            <!-- Context Overlay (Hover) -->
            <div class="absolute inset-0 z-20 bg-surface-dark/90 backdrop-blur-lg p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
              <span class="material-symbols-outlined text-primary text-3xl mb-2">psychology</span>
              <h5 class="text-white font-bold text-sm uppercase tracking-widest mb-2">Contexto & Arquitetura</h5>
              <p class="text-slate-200 text-sm leading-relaxed">
                Landing Page em <span class="text-primary font-bold">Vue.js</span> para máxima indexação no Google. 
                Focado em arquitetura limpa e no domínio total do ciclo de vida de um produto.
              </p>
            </div>
          </div>
          
          <div class="p-5 flex flex-col gap-3">
            <h4 class="text-xl font-bold text-white">Quantum Quarto</h4>
            <p class="text-slate-400 text-sm line-clamp-3">App de estudo com IA usando Kotlin Multiplatform (KMP).
              Gera quizzes adaptativos, flashcards e spaced repetition com sync cross-platform (Android, iOS,
              Desktop, Web).</p>

            <div class="flex flex-wrap gap-2 my-1">
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">KMP</span>
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">Compose</span>
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">Ktor</span>
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">PostgreSQL</span>
            </div>
            <div class="flex gap-3 mt-2">
              <a class="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-bold transition-colors"
                href="https://quantumquarto.com" target="_blank">
                <span class="material-symbols-outlined text-base">open_in_new</span> Link
              </a>
            </div>
          </div>
        </div>

        <!-- Check All Pages -->
        <div
          class="min-w-[85vw] sm:min-w-[400px] snap-center bg-surface-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group/card relative">
          <div class="h-48 bg-slate-800 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent opacity-60 z-10"></div>
            <div
              class="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <span class="material-symbols-outlined text-6xl text-white/20">analytics</span>
            </div>

            <!-- Context Overlay (Hover) -->
            <div class="absolute inset-0 z-20 bg-surface-dark/90 backdrop-blur-lg p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0">
              <span class="material-symbols-outlined text-orange-400 text-3xl mb-2">problem</span>
              <h5 class="text-white font-bold text-sm uppercase tracking-widest mb-2">Necessidade Real</h5>
              <p class="text-slate-200 text-sm leading-relaxed">
                Criado para automatizar a análise de saúde de grandes sites, detectando gargalos de performance que afetam diretamente o ranking de SEO.
              </p>
            </div>
          </div>

          <div class="p-5 flex flex-col gap-3">
            <h4 class="text-xl font-bold text-white">Check All Pages</h4>
            <p class="text-slate-400 text-sm line-clamp-3">Ferramenta em Kotlin para análise de performance SEO
              via
              API Google PageSpeed. Processa sitemaps.xml e gera relatórios CSV.</p>

            <div class="flex flex-wrap gap-2 my-1">
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-800/50">Kotlin</span>
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-800/50">APIs
                REST</span>
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-800/50">Gradle</span>
            </div>
            <div class="flex gap-3 mt-2">
              <a class="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-bold transition-colors"
                href="https://github.com/AlexSilva-dev/checkallpages" target="_blank">
                <span class="material-symbols-outlined text-base">code</span> GitHub
              </a>
            </div>
          </div>
        </div>

        <!-- Outros Projetos -->
        <div
          class="min-w-[85vw] sm:min-w-[400px] snap-center bg-surface-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group/card relative">
          <div class="h-48 bg-slate-800 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent opacity-60 z-10"></div>
            <div
              class="w-full h-full bg-gradient-to-br from-slate-800 to-gray-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
              <span class="material-symbols-outlined text-6xl text-white/20">folder_open</span>
            </div>
          </div>
          <div class="p-5 flex flex-col gap-3">
            <h4 class="text-xl font-bold text-white">Outros Projetos</h4>
            <p class="text-slate-400 text-sm line-clamp-3">Repositórios variados com integrações full stack
              (Vue.js,
              PHP, Node.js) e explorações em Kotlin, incluindo autenticação cross-platform e automações.</p>
            <div class="flex flex-wrap gap-2 my-1">
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-gray-700/30 text-gray-300 border border-gray-600/50">Vue.js</span>
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-gray-700/30 text-gray-300 border border-gray-600/50">PHP</span>
              <span
                class="text-xs font-medium px-2 py-1 rounded bg-gray-700/30 text-gray-300 border border-gray-600/50">Node.js</span>
            </div>
            <div class="flex gap-3 mt-2">
              <a class="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-bold transition-colors"
                href="https://github.com/AlexSilva-dev" target="_blank">
                <span class="material-symbols-outlined text-base">code</span> Ver GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Arrow -->
      <button @click="scrollProjects('right')"
        class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface-card/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary hover:border-primary transition-all active:scale-95 shadow-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 disabled:opacity-0">
        <span class="material-symbols-outlined text-3xl">chevron_right</span>
      </button>
    </div>
  </section>
</template>