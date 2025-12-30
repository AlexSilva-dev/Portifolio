<template>
  <nav class="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
    <div class="flex items-center justify-between px-5 h-16 max-w-5xl mx-auto">
      <div class="flex items-center gap-2">
        <span class="material-symbols-outlined text-primary text-3xl">terminal</span>
        <span class="text-xl font-bold tracking-tight">Alex Alves</span>
      </div>
      <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <a class="hover:text-primary transition-colors" href="#home">Início</a>
        <a class="hover:text-primary transition-colors" href="#about">Sobre</a>
        <a class="hover:text-primary transition-colors" href="#experience">Experiência</a>
        <a class="hover:text-primary transition-colors" href="#projects">Projetos</a>
        <a class="hover:text-primary transition-colors" href="#skills">Habilidades</a>
        <a class="hover:text-primary transition-colors" href="#certifications">Certificações</a>
        <a class="hover:text-primary transition-colors" href="#contact">Contato</a>
      </div>
      <button
        class="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
        <span class="material-symbols-outlined text-2xl">menu</span>
      </button>
    </div>
  </nav>
</template>
