// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@/assets/main.css',
    'animate.css/animate.min.css',
    // 'aos/dist/aos.css',
    // 'aos/dist/aos.js'
  ],
  modules: [
    'nuxt-aos'
  ],
  
  app: {
    // baseURL: '/Portifolio/', // baseURL: '/<repository>/'
    // buildAssetsDir: 'assets'
  //   head: {
  //     link: [
  //       { rel: "shortcut icon", type: "image/png", href: "/favicon.ico" }
  //     ]
  //   }
  },
})
