<template>
  <NuxtPage />
</template>
<script setup>
useHead({
  title: "Gabriel Coutinho | Full Stack Developer",

  meta: [
    {
      name: "description",
      content:
        "Portfólio profissional de Gabriel Coutinho, Full Stack Developer especializado em Vue.js, TypeScript, Java e Spring Boot.",
    },
    {
      property: "og:title",
      content: "Gabriel Coutinho | Full Stack Developer",
    },
    {
      property: "og:description",
      content: "Portfólio profissional de Gabriel Coutinho.",
    },
    {
      property: "og:image",
      content: "/favicon.ico",
    },
  ],

  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #0f172a;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}
</style>
