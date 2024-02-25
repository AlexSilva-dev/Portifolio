<template>
    <div class="container my-5 pt-5">
        <Banner></Banner>
        <AboutMe class="mt-300" id="about-me" data-aos="fade-up-left"
            data-aos-duration="700" data-aos-offset="100"
            v-on:intersection="activateNavbarItem" data-navbar="nav-item-aboutme">
        </AboutMe>

        <Technology class="mt-300" data-aos="fade-up-right" data-aos-duration="700">
        </Technology>

        <Contact class="mt-300" data-aos="fade-up" data-aos-duration="700">
        </Contact>
    </div>
</template>
<script lang="js">
export default {
    mounted() {

    },
    methods: {
        activateNavbarItem(entries, observer) {

        }
    }
}
</script>
<style>
body {
    padding-bottom: 30%;
}

.mt-300 {
    margin-top: 60vh;
}
</style>

