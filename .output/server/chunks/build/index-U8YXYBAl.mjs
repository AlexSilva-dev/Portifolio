import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$b = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-dark transition-opacity duration-500" }, _attrs))} data-v-5f8854e5><div class="pong-loader" data-v-5f8854e5><div class="paddle left" data-v-5f8854e5></div><div class="ball" data-v-5f8854e5></div><div class="paddle right" data-v-5f8854e5></div></div><p class="mt-8 text-primary font-display text-lg animate-pulse" data-v-5f8854e5>Carregando...</p></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PongLoader.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-5f8854e5"]]), { __name: "PongLoader" });
const _sfc_main$a = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "min-h-[85vh] flex flex-col justify-center px-6 pt-10 pb-16 relative",
    id: "home"
  }, _attrs))}><div class="space-y-6"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit animate-pulse"><span class="w-2 h-2 rounded-full bg-primary"></span> Disponível para trabalho </div><h1 class="text-5xl sm:text-7xl font-bold leading-tight tracking-tight text-white"><span class="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Alex Alves</span><br><span class="text-primary text-4xl sm:text-6xl block mt-2">Desenvolvedor Full Stack &amp; Kotlin</span></h1><h2 class="text-xl text-slate-400 max-w-xl font-light leading-relaxed"> Com 3 anos de experiência em desenvolvimento web e multiplataforma, criando soluções eficientes e escaláveis. Explore meu portfólio para ver projetos em Vue.js, PHP e Kotlin Multiplatform. </h2><div class="flex flex-col sm:flex-row gap-4 pt-4"><a class="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1" href="#contact"> Entre em Contato <span class="material-symbols-outlined text-sm">arrow_forward</span></a><a class="flex items-center justify-center gap-2 px-8 py-4 bg-surface-card/50 hover:bg-surface-dark text-white border border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-sm" href="#projects"> Ver Projetos <span class="material-symbols-outlined text-sm">visibility</span></a></div></div><div class="absolute right-[-20px] bottom-[10%] w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 rotate-12 blur-md -z-10"></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SessionHero.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$7]]), { __name: "HomeSessionHero" });
const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "px-6 scroll-mt-24",
    id: "about"
  }, _attrs))}><div class="bg-surface-card border border-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-md relative overflow-hidden"><div class="absolute top-0 right-0 p-4 opacity-10"><span class="material-symbols-outlined text-8xl text-white">person</span></div><h3 class="text-primary font-bold tracking-widest uppercase text-sm mb-4">Sobre</h3><p class="text-slate-300 text-lg leading-relaxed"> Sou desenvolvedor com 3 anos de experiência no mercado, focado em soluções full stack e multiplataforma. Atuei em uma startup de que o produto principal é o controle de estoque (ERP e PDV), atuei nela usando PHP (com framework Laminas) e Vue.js para o produto principal, além de n8n para automatizações e Wordpress para o site institucional. E também desenvolvo projetos pessoais em Kotlin Multiplatform para apps cross-device. Graduando em Sistemas de Informação pela Universidade Federal Fluminense, priorizo código limpo, aprendizado contínuo e colaboração em equipes. Aberto a oportunidades em desenvolvimento web ou mobile. </p></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SessionAbout.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]), { __name: "HomeSessionAbout" });
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "px-6 scroll-mt-24",
    id: "experience"
  }, _attrs))}><div class="flex items-center gap-3 mb-6"><div class="h-8 w-1 bg-primary rounded-full"></div><h3 class="text-2xl font-bold text-white">Experiência</h3></div><div class="space-y-6 relative border-l-2 border-white/10 ml-3 pl-8 py-2"><div class="relative"><div class="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-surface-dark border-4 border-primary shadow-[0_0_10px_rgba(19,91,236,0.5)]"></div><div class="bg-surface-card rounded-xl p-5 border border-white/5 hover:border-primary/30 transition-colors"><span class="text-primary text-sm font-bold mb-1 block">2025 – Presente</span><h4 class="text-xl font-bold text-white mb-1">Freelance/Autônomo</h4><p class="text-slate-400 text-sm mb-3">Desenvolvedor Independente</p><p class="text-slate-300 text-sm leading-relaxed"> Crio integrações e automações com n8n, WordPress e ferramentas de IA, focando em soluções personalizadas para clientes. </p></div></div><div class="relative"><div class="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-surface-dark border-4 border-slate-600"></div><div class="bg-surface-card rounded-xl p-5 border border-white/5 hover:border-primary/30 transition-colors"><span class="text-slate-400 text-sm font-bold mb-1 block">Janeiro 2023 – Julho 2025 (2 anos 7 meses)</span><h4 class="text-xl font-bold text-white mb-1">Desenvolvedor Full Stack</h4><p class="text-slate-400 text-sm mb-3">Tedsys</p><p class="text-slate-300 text-sm leading-relaxed"> Atuei no desenvolvimento e manutenção de ERP com PHP (Laminas) e Vue.js no front-end. Contribuí para integrações de APIs e otimização de processos, usando N8N ou código. Além de atuar na manutenção do site institucional e otimização de SEO e perfomance do site. Atuei bastante colaborando com equipes multidisciplinares para coletar requisitos e entender demandas e necessidades. </p></div></div><div class="relative"><div class="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-surface-dark border-4 border-slate-600"></div><div class="bg-surface-card rounded-xl p-5 border border-white/5 hover:border-primary/30 transition-colors"><span class="text-slate-400 text-sm font-bold mb-1 block">Julho 2018 – Dezembro 2019 (1 ano 6 meses)</span><h4 class="text-xl font-bold text-white mb-1">Autônomo – Manutenção de Celulares</h4><p class="text-slate-300 text-sm leading-relaxed"> Realizei reparos técnicos em dispositivos, desenvolvendo habilidades em diagnóstico e resolução de problemas. </p></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SessionExperience.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]), { __name: "HomeSessionExperience" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SessionProjects",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "px-0 scroll-mt-24 relative group/projects",
        id: "projects"
      }, _attrs))}><div class="flex items-center gap-3 mb-6 px-6"><div class="h-8 w-1 bg-primary rounded-full"></div><h3 class="text-2xl font-bold text-white">Projetos</h3></div><div class="relative px-2 sm:px-6 group"><button class="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface-card/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary hover:border-primary transition-all active:scale-95 shadow-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 disabled:opacity-0"><span class="material-symbols-outlined text-3xl">chevron_left</span></button><div class="flex overflow-x-auto gap-4 px-4 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"><div class="min-w-[85vw] sm:min-w-[400px] snap-center bg-surface-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group/card relative"><div class="h-48 bg-slate-800 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent opacity-60 z-10"></div><div class="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center"><span class="material-symbols-outlined text-6xl text-white/20">school</span></div><div class="absolute inset-0 z-20 bg-surface-dark/90 backdrop-blur-lg p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0"><span class="material-symbols-outlined text-primary text-3xl mb-2">psychology</span><h5 class="text-white font-bold text-sm uppercase tracking-widest mb-2">Contexto &amp; Arquitetura</h5><p class="text-slate-200 text-sm leading-relaxed"> Landing Page em <span class="text-primary font-bold">Vue.js</span> para máxima indexação no Google. Focado em arquitetura limpa e no domínio total do ciclo de vida de um produto. </p></div></div><div class="p-5 flex flex-col gap-3"><h4 class="text-xl font-bold text-white">Quantum Quarto</h4><p class="text-slate-400 text-sm line-clamp-3">App de estudo com IA usando Kotlin Multiplatform (KMP). Gera quizzes adaptativos, flashcards e spaced repetition com sync cross-platform (Android, iOS, Desktop, Web).</p><div class="flex flex-wrap gap-2 my-1"><span class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">KMP</span><span class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">Compose</span><span class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">Ktor</span><span class="text-xs font-medium px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-800/50">PostgreSQL</span></div><div class="flex gap-3 mt-2"><a class="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-bold transition-colors" href="https://quantumquarto.com" target="_blank"><span class="material-symbols-outlined text-base">open_in_new</span> Link </a></div></div></div><div class="min-w-[85vw] sm:min-w-[400px] snap-center bg-surface-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group/card relative"><div class="h-48 bg-slate-800 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent opacity-60 z-10"></div><div class="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center"><span class="material-symbols-outlined text-6xl text-white/20">analytics</span></div><div class="absolute inset-0 z-20 bg-surface-dark/90 backdrop-blur-lg p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0"><span class="material-symbols-outlined text-orange-400 text-3xl mb-2">problem</span><h5 class="text-white font-bold text-sm uppercase tracking-widest mb-2">Necessidade Real</h5><p class="text-slate-200 text-sm leading-relaxed"> Criado para automatizar a análise de saúde de grandes sites, detectando gargalos de performance que afetam diretamente o ranking de SEO. </p></div></div><div class="p-5 flex flex-col gap-3"><h4 class="text-xl font-bold text-white">Check All Pages</h4><p class="text-slate-400 text-sm line-clamp-3">Ferramenta em Kotlin para análise de performance SEO via API Google PageSpeed. Processa sitemaps.xml e gera relatórios CSV.</p><div class="flex flex-wrap gap-2 my-1"><span class="text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-800/50">Kotlin</span><span class="text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-800/50">APIs REST</span><span class="text-xs font-medium px-2 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-800/50">Gradle</span></div><div class="flex gap-3 mt-2"><a class="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-bold transition-colors" href="https://github.com/AlexSilva-dev/checkallpages" target="_blank"><span class="material-symbols-outlined text-base">code</span> GitHub </a></div></div></div><div class="min-w-[85vw] sm:min-w-[400px] snap-center bg-surface-card rounded-2xl overflow-hidden border border-white/5 shadow-lg group/card relative"><div class="h-48 bg-slate-800 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent opacity-60 z-10"></div><div class="w-full h-full bg-gradient-to-br from-slate-800 to-gray-900 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center"><span class="material-symbols-outlined text-6xl text-white/20">folder_open</span></div></div><div class="p-5 flex flex-col gap-3"><h4 class="text-xl font-bold text-white">Outros Projetos</h4><p class="text-slate-400 text-sm line-clamp-3">Repositórios variados com integrações full stack (Vue.js, PHP, Node.js) e explorações em Kotlin, incluindo autenticação cross-platform e automações.</p><div class="flex flex-wrap gap-2 my-1"><span class="text-xs font-medium px-2 py-1 rounded bg-gray-700/30 text-gray-300 border border-gray-600/50">Vue.js</span><span class="text-xs font-medium px-2 py-1 rounded bg-gray-700/30 text-gray-300 border border-gray-600/50">PHP</span><span class="text-xs font-medium px-2 py-1 rounded bg-gray-700/30 text-gray-300 border border-gray-600/50">Node.js</span></div><div class="flex gap-3 mt-2"><a class="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-bold transition-colors" href="https://github.com/AlexSilva-dev" target="_blank"><span class="material-symbols-outlined text-base">code</span> Ver GitHub </a></div></div></div></div><button class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-surface-card/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-primary hover:border-primary transition-all active:scale-95 shadow-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 disabled:opacity-0"><span class="material-symbols-outlined text-3xl">chevron_right</span></button></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SessionProjects.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$7, { __name: "HomeSessionProjects" });
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative py-24 flex flex-col items-center" }, _attrs))} data-v-4d503a0a><div class="organic-blob bg-primary w-[500px] h-[400px] top-0 left-1/2 -translate-x-1/2 opacity-20" data-v-4d503a0a></div><div class="organic-blob bg-purple-600 w-[600px] h-[500px] top-[30%] left-1/2 -translate-x-1/2 opacity-20" data-v-4d503a0a></div><div class="organic-blob bg-accent w-[500px] h-[400px] bottom-[10%] left-1/2 -translate-x-1/2 opacity-20" data-v-4d503a0a></div><div class="hex-grid w-full max-w-4xl mx-auto flex flex-col gap-32" data-v-4d503a0a><div class="relative w-full flex flex-col items-center" data-v-4d503a0a><div class="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-mono text-primary/40 rotate-[-90deg] whitespace-nowrap tracking-widest uppercase font-bold" data-v-4d503a0a> Languages</div><div class="hex-row" data-v-4d503a0a><div class="hexagon-wrapper" data-v-4d503a0a><div class="hexagon hex-core" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-primary mb-3" data-v-4d503a0a>code</span><span class="text-white text-lg font-bold" data-v-4d503a0a>Kotlin</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-primary w-full" data-v-4d503a0a></div></div></div></div></div><div class="hexagon-wrapper mt-16" data-v-4d503a0a><div class="hexagon hex-core" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-blue-400 mb-3" data-v-4d503a0a>coffee</span><span class="text-white text-lg font-bold" data-v-4d503a0a>Java</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-blue-400 w-full" data-v-4d503a0a></div></div></div></div></div></div><div class="hex-row" data-v-4d503a0a><div class="hexagon-wrapper -mt-2" data-v-4d503a0a><div class="hexagon hex-core" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-yellow-400 mb-3" data-v-4d503a0a>javascript</span><span class="text-white text-lg font-bold" data-v-4d503a0a>Javascript</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-yellow-400 w-full" data-v-4d503a0a></div></div></div></div></div></div></div><div class="relative w-full flex justify-center" data-v-4d503a0a><div class="absolute -right-12 top-1/2 -translate-y-1/2 text-sm font-mono text-purple-500/40 rotate-90 whitespace-nowrap tracking-widest uppercase font-bold" data-v-4d503a0a> Multiplatform</div><div class="hex-row items-start" data-v-4d503a0a><div class="hexagon-wrapper mt-16" data-v-4d503a0a><div class="hexagon hex-kmp" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-5xl text-green-400 mb-3" data-v-4d503a0a>widgets</span><span class="text-white text-lg font-bold" data-v-4d503a0a>Compose</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-green-400 w-full" data-v-4d503a0a></div></div></div></div></div><div class="hexagon-wrapper z-10 -mt-2" data-v-4d503a0a><div class="hexagon hex-kmp" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-7xl text-purple-500 mb-3" data-v-4d503a0a>layers</span><span class="text-white text-xl font-bold uppercase tracking-tighter" data-v-4d503a0a>KMP</span><span class="text-[12px] text-slate-400 italic font-medium" data-v-4d503a0a>Unified</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-purple-500 w-full" data-v-4d503a0a></div></div></div></div></div><div class="hexagon-wrapper mt-16" data-v-4d503a0a><div class="hexagon hex-kmp" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-5xl text-orange-400 mb-3" data-v-4d503a0a>http</span><span class="text-white text-lg font-bold" data-v-4d503a0a>Ktor</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-orange-400 w-full" data-v-4d503a0a></div></div></div></div></div></div></div><div class="relative w-full flex flex-col items-center" data-v-4d503a0a><div class="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-mono text-accent/40 rotate-[-90deg] whitespace-nowrap tracking-widest uppercase font-bold" data-v-4d503a0a> Backend</div><div class="hex-row" data-v-4d503a0a><div class="hexagon-wrapper" data-v-4d503a0a><div class="hexagon hex-fs" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-green-500 mb-3" data-v-4d503a0a>spa</span><span class="text-white text-lg font-bold leading-tight" data-v-4d503a0a>Spring<br data-v-4d503a0a>Boot</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-green-500 w-full" data-v-4d503a0a></div></div></div></div></div><div class="hexagon-wrapper mt-16" data-v-4d503a0a><div class="hexagon hex-fs" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-orange-400 mb-3" data-v-4d503a0a>http</span><span class="text-white text-lg font-bold" data-v-4d503a0a>Ktor</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-orange-400 w-full" data-v-4d503a0a></div></div></div></div></div></div><div class="hex-row" data-v-4d503a0a><div class="hexagon-wrapper -mt-2" data-v-4d503a0a><div class="hexagon hex-fs" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-accent mb-3" data-v-4d503a0a>deployed_code</span><span class="text-white text-lg font-bold" data-v-4d503a0a>Docker</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-accent w-full" data-v-4d503a0a></div></div></div></div></div><div class="hexagon-wrapper mt-14 -ml-4" data-v-4d503a0a><div class="hexagon hex-fs" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-orange-400 mb-3" data-v-4d503a0a>database</span><span class="text-white text-lg font-bold" data-v-4d503a0a>SQL</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-orange-400 w-full" data-v-4d503a0a></div></div></div></div></div></div></div><div class="relative w-full flex flex-col items-center" data-v-4d503a0a><div class="absolute -right-12 top-1/2 -translate-y-1/2 text-sm font-mono text-green-400/40 rotate-90 whitespace-nowrap tracking-widest uppercase font-bold" data-v-4d503a0a> Best Practices</div><div class="hex-row" data-v-4d503a0a><div class="hexagon-wrapper" data-v-4d503a0a><div class="hexagon hex-bp" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-green-400 mb-3" data-v-4d503a0a>architecture</span><span class="text-white text-sm font-bold leading-tight" data-v-4d503a0a>Clean<br data-v-4d503a0a>Arch</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-green-400 w-full" data-v-4d503a0a></div></div></div></div></div><div class="hexagon-wrapper mt-16" data-v-4d503a0a><div class="hexagon hex-bp" data-v-4d503a0a><div class="hex-content" data-v-4d503a0a><span class="material-symbols-outlined text-6xl text-green-400 mb-3" data-v-4d503a0a>verified</span><span class="text-white text-sm font-bold leading-tight" data-v-4d503a0a>SOLID</span><div class="prof-bar-mini" data-v-4d503a0a><div class="prof-fill-mini bg-green-400 w-full" data-v-4d503a0a></div></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/components/SkillsGraph.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-4d503a0a"]]), { __name: "HomeComponentsSkillsGraph" });
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_HomeComponentsSkillsGraph = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "px-6 scroll-mt-24",
    id: "skills"
  }, _attrs))}><div class="flex items-center gap-3 mb-6"><div class="h-8 w-1 bg-primary rounded-full"></div><h3 class="text-2xl font-bold text-white">Habilidades</h3></div>`);
  _push(ssrRenderComponent(_component_HomeComponentsSkillsGraph, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SessionSkills.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]), { __name: "HomeSessionSkills" });
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "px-6 scroll-mt-24",
    id: "certifications"
  }, _attrs))}><div class="flex items-center gap-3 mb-6"><div class="h-8 w-1 bg-primary rounded-full"></div><h3 class="text-2xl font-bold text-white">Certificações</h3></div><div class="space-y-4"><div class="flex items-start gap-4 bg-surface-card p-4 rounded-xl border border-white/5"><div class="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0 mt-1"><span class="material-symbols-outlined">school</span></div><div><h4 class="text-white font-bold text-sm">Introduction to Android Mobile Application Development</h4><p class="text-slate-400 text-xs mt-1">Meta/Coursera, Jan 2023</p><p class="text-slate-500 text-xs mt-1">Curso introdutório em desenvolvimento Android, com foco em Android Studio e apps básicos.</p></div></div><div class="flex items-start gap-4 bg-surface-card p-4 rounded-xl border border-white/5"><div class="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 mt-1"><span class="material-symbols-outlined">code</span></div><div><h4 class="text-white font-bold text-sm">Java Básico [40 Horas]</h4><p class="text-slate-400 text-xs mt-1">Curso em Vídeo, Mar 2021</p><p class="text-slate-500 text-xs mt-1">Fundamentos de Java, incluindo sintaxe, loops e métodos.</p></div></div><div class="flex items-start gap-4 bg-surface-card p-4 rounded-xl border border-white/5"><div class="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 shrink-0 mt-1"><span class="material-symbols-outlined">data_object</span></div><div><h4 class="text-white font-bold text-sm">Java POO [40 Horas]</h4><p class="text-slate-400 text-xs mt-1">Curso em Vídeo, Mar 2022</p><p class="text-slate-500 text-xs mt-1">Programação Orientada a Objetos em Java, cobrindo classes, herança e polimorfismo.</p></div></div><div class="flex items-start gap-4 bg-surface-card p-4 rounded-xl border border-white/5"><div class="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-500 shrink-0 mt-1"><span class="material-symbols-outlined">database</span></div><div><h4 class="text-white font-bold text-sm">MySQL [40 Horas]</h4><p class="text-slate-400 text-xs mt-1">Curso em Vídeo, Ago 2022</p><p class="text-slate-500 text-xs mt-1">Bancos de dados relacionais com MySQL, incluindo SQL queries e modelagem.</p></div></div><div class="flex items-start gap-4 bg-surface-card p-4 rounded-xl border border-white/5"><div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500 shrink-0 mt-1"><span class="material-symbols-outlined">table_chart</span></div><div><h4 class="text-white font-bold text-sm">Excel [40 Horas]</h4><p class="text-slate-400 text-xs mt-1">Curso em Vídeo, Set 2022</p><p class="text-slate-500 text-xs mt-1">Ferramentas de produtividade com Excel, incluindo fórmulas e gráficos.</p></div></div><div class="flex items-start gap-4 bg-surface-card p-4 rounded-xl border border-white/5"><div class="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500 shrink-0 mt-1"><span class="material-symbols-outlined">phonelink_setup</span></div><div><h4 class="text-white font-bold text-sm">Reparo e Manutenção de Celular</h4><p class="text-slate-400 text-xs mt-1">Certificação técnica</p><p class="text-slate-500 text-xs mt-1">Habilidades em diagnóstico e reparo de dispositivos móveis.</p></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SessionCertifications.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "HomeSessionCertifications" });
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "px-6 pb-20 scroll-mt-24",
    id: "contact"
  }, _attrs))}><div class="bg-gradient-to-b from-surface-card to-background-dark border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group"><div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div><div class="max-w-2xl mx-auto text-center relative z-10"><h2 class="text-4xl font-bold text-white mb-4 tracking-tight">Vamos conversar?</h2><p class="text-slate-400 text-lg mb-12"> Estou disponível para novos projetos e oportunidades em <span class="text-white font-bold">Full Stack</span> ou <span class="text-white font-bold">Kotlin</span>. Escolha a melhor forma de me encontrar: </p><div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><a href="https://api.whatsapp.com/send/?phone=5521985380869&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 group/link"><div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 group-hover/link:scale-110 transition-transform"><span class="material-symbols-outlined text-2xl">chat</span></div><div class="text-left"><span class="block text-white font-bold text-sm">WhatsApp</span><span class="text-slate-400 text-xs">Conversa direta</span></div></a><a href="mailto:aleque@outlook.com" class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group/link"><div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover/link:scale-110 transition-transform"><span class="material-symbols-outlined text-2xl">mail</span></div><div class="text-left"><span class="block text-white font-bold text-sm">E-mail</span><span class="text-slate-400 text-xs">aleque@outlook.com</span></div></a><a href="https://linkedin.com/in/alex-da-silva1" target="_blank" class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600/10 hover:border-blue-600/50 transition-all duration-300 group/link"><div class="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover/link:scale-110 transition-transform"><span class="material-symbols-outlined text-2xl">work</span></div><div class="text-left"><span class="block text-white font-bold text-sm">LinkedIn</span><span class="text-slate-400 text-xs">Conexão profissional</span></div></a><a href="https://github.com/AlexSilva-dev" target="_blank" class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-slate-400/10 hover:border-slate-400/50 transition-all duration-300 group/link"><div class="w-12 h-12 rounded-xl bg-slate-400/20 flex items-center justify-center text-slate-300 group-hover/link:scale-110 transition-transform"><span class="material-symbols-outlined text-2xl">code</span></div><div class="text-left"><span class="block text-white font-bold text-sm">GitHub</span><span class="text-slate-400 text-xs">Meus repositórios</span></div></a></div><div class="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4"><p class="text-slate-500 text-sm italic">&quot;Codificando o futuro, um commit de cada vez.&quot;</p></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/SessionContact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeSessionContact" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "border-t border-white/5 bg-surface-dark py-8 text-center relative z-10" }, _attrs))}><p class="text-slate-500 text-sm">© ${ssrInterpolate(unref(currentYear))} Alex Alves. Todos os direitos reservados.</p></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = Object.assign(_sfc_main$2, { __name: "HomeFooter" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 w-full z-50 glass-nav border-b border-white/5" }, _attrs))}><div class="flex items-center justify-between px-5 h-16 max-w-5xl mx-auto"><div class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-3xl">terminal</span><span class="text-xl font-bold tracking-tight">Alex Alves</span></div><div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300"><a class="hover:text-primary transition-colors" href="#home">Início</a><a class="hover:text-primary transition-colors" href="#about">Sobre</a><a class="hover:text-primary transition-colors" href="#experience">Experiência</a><a class="hover:text-primary transition-colors" href="#projects">Projetos</a><a class="hover:text-primary transition-colors" href="#skills">Habilidades</a><a class="hover:text-primary transition-colors" href="#certifications">Certificações</a><a class="hover:text-primary transition-colors" href="#contact">Contato</a></div><button class="flex md:hidden items-center justify-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"><span class="material-symbols-outlined text-2xl">menu</span></button></div></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "HomeHeader" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(true);
    useHead({
      title: "Alex Alves - Portfólio",
      meta: [
        { name: "description", content: "Portfólio de Alex Alves - Desenvolvedor Full Stack & Kotlin" },
        { name: "theme-color", content: "#0f172a" }
      ],
      bodyAttrs: {
        class: "bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden transition-colors duration-300"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PongLoader = __nuxt_component_0$1;
      const _component_HomeSessionHero = __nuxt_component_1;
      const _component_HomeSessionAbout = __nuxt_component_2;
      const _component_HomeSessionExperience = __nuxt_component_3;
      const _component_HomeSessionProjects = __nuxt_component_4;
      const _component_HomeSessionSkills = __nuxt_component_5;
      const _component_HomeSessionCertifications = __nuxt_component_6;
      const _component_HomeSessionContact = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}>`);
      if (unref(isLoading)) {
        _push(ssrRenderComponent(_component_PongLoader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "opacity-0": unref(isLoading), "opacity-100": !unref(isLoading) }, "transition-opacity duration-700"])}" style="${ssrRenderStyle(!unref(isLoading) ? null : { display: "none" })}"><div class="fixed inset-0 overflow-hidden pointer-events-none z-0"><div class="blob-bg bg-primary w-96 h-96 rounded-full top-[-100px] right-[-100px]"></div><div class="blob-bg bg-accent w-80 h-80 rounded-full bottom-[-100px] left-[-100px]"></div><div class="blob-bg bg-purple-600 w-64 h-64 rounded-full top-[40%] left-[20%] opacity-20"></div></div><div class="fixed inset-0 bg-tech-grid opacity-20 pointer-events-none z-0"></div>`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(`<main class="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-8 pb-20 pt-16">`);
      _push(ssrRenderComponent(_component_HomeSessionHero, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSessionAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSessionExperience, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSessionProjects, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSessionSkills, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSessionCertifications, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSessionContact, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-U8YXYBAl.mjs.map
