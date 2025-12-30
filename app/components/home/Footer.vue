<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/5 bg-surface-dark py-8 text-center relative z-10">
    <p class="text-slate-500 text-sm">© {{ currentYear }} Alex Alves. Todos os direitos reservados.</p>
  </footer>
</template>
