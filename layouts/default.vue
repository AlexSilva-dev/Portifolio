
import NavbarDefault from '../components/NavbarDefault.vue';
<template>
    <header class="px-5">
        <NavbarDefault></NavbarDefault>
    </header>
    <main class="px-5">
        <slot></slot>
    </main>
</template>

<style scoped></style>