<template>
  <section class="px-6 pb-20 scroll-mt-24" id="contact">
    <div
      class="bg-gradient-to-b from-surface-card to-background-dark border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
      <!-- Elemento decorativo de fundo -->
      <div
        class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700">
      </div>

      <div class="max-w-2xl mx-auto text-center relative z-10">
        <h2 class="text-4xl font-bold text-white mb-4 tracking-tight">Vamos conversar?</h2>
        <p class="text-slate-400 text-lg mb-12">
          Estou disponível para novos projetos e oportunidades em <span class="text-white font-bold">Full Stack</span>
          ou <span class="text-white font-bold">Kotlin</span>. Escolha a melhor forma de me encontrar:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- WhatsApp -->
          <a href="https://api.whatsapp.com/send/?phone=5521985380869&text&type=phone_number&app_absent=0"
            target="_blank"
            class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 group/link">
            <div
              class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 group-hover/link:scale-110 transition-transform">
              <span class="material-symbols-outlined text-2xl">chat</span>
            </div>
            <div class="text-left">
              <span class="block text-white font-bold text-sm">WhatsApp</span>
              <span class="text-slate-400 text-xs">Conversa direta</span>
            </div>
          </a>

          <!-- E-mail -->
          <a href="mailto:aleque@outlook.com"
            class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group/link">
            <div
              class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover/link:scale-110 transition-transform">
              <span class="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div class="text-left">
              <span class="block text-white font-bold text-sm">E-mail</span>
              <span class="text-slate-400 text-xs">aleque@outlook.com</span>
            </div>
          </a>

          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/alex-da-silva1" target="_blank"
            class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600/10 hover:border-blue-600/50 transition-all duration-300 group/link">
            <div
              class="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover/link:scale-110 transition-transform">
              <span class="material-symbols-outlined text-2xl">work</span>
            </div>
            <div class="text-left">
              <span class="block text-white font-bold text-sm">LinkedIn</span>
              <span class="text-slate-400 text-xs">Conexão profissional</span>
            </div>
          </a>

          <!-- GitHub -->
          <a href="https://github.com/AlexSilva-dev" target="_blank"
            class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-slate-400/10 hover:border-slate-400/50 transition-all duration-300 group/link">
            <div
              class="w-12 h-12 rounded-xl bg-slate-400/20 flex items-center justify-center text-slate-300 group-hover/link:scale-110 transition-transform">
              <span class="material-symbols-outlined text-2xl">code</span>
            </div>
            <div class="text-left">
              <span class="block text-white font-bold text-sm">GitHub</span>
              <span class="text-slate-400 text-xs">Meus repositórios</span>
            </div>
          </a>
        </div>

        <div class="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          <p class="text-slate-500 text-sm italic">"Codificando o futuro, um commit de cada vez."</p>
        </div>
      </div>
    </div>
  </section>
</template>
