export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "pt",
    locales: [
      {
        code: "pt",
        name: "Português",
        file: "pt.json",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
    langDir: "../locales",
    strategy: "prefix_except_default",
  },

  app: {
    baseURL: "/",
  },

  nitro: {
    preset: "github_pages",
  },
});
