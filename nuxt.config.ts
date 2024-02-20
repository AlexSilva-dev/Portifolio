// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@/assets/main.css',

  ],
  // app: {
  //   head: {
  //     link: [
  //       { rel: "shortcut icon", type: "image/png", href: "/favicon.ico" }
  //     ]
  //   }
  // },
})
