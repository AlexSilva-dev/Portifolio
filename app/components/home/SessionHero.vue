<template>
  <section class="min-h-[85vh] flex flex-col justify-center px-6 pt-10 pb-16 relative" id="home">
    <div class="space-y-6">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit animate-pulse">
        <span class="w-2 h-2 rounded-full bg-primary"></span>
        Disponível para trabalho
      </div>
      <h1 class="text-5xl sm:text-7xl font-bold leading-tight tracking-tight text-white">
        <span class="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Alex Alves</span> 
        <br />
        <span class="text-primary text-4xl sm:text-6xl block mt-2">Desenvolvedor Full Stack & Kotlin</span>
      </h1>
      <h2 class="text-xl text-slate-400 max-w-xl font-light leading-relaxed">
        Com 3 anos de experiência em desenvolvimento web e multiplataforma, criando soluções eficientes e
        escaláveis. Explore meu portfólio para ver projetos em Vue.js, PHP e Kotlin Multiplatform.
      </h2>
      <div class="flex flex-col sm:flex-row gap-4 pt-4">
        <a class="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1"
          href="#contact">
          Entre em Contato
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
        <a class="flex items-center justify-center gap-2 px-8 py-4 bg-surface-card/50 hover:bg-surface-dark text-white border border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
          href="#projects">
          Ver Projetos
          <span class="material-symbols-outlined text-sm">visibility</span>
        </a>
      </div>
    </div>
    <div
      class="absolute right-[-20px] bottom-[10%] w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 rotate-12 blur-md -z-10">
    </div>
  </section>
</template>
