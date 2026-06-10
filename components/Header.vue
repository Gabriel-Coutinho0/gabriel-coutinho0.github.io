<template>
  <header class="header">
    <NuxtLink :to="localePath('/')" class="logo" @click="goToTop">
      <img src="/favicon.ico" alt="Logo Gabriel Coutinho" />
      <span>Gabriel Coutinho</span>
    </NuxtLink>

    <nav>
      <a href="#about" :class="{ active: activeSection === 'about' }">
        {{ t("nav.about") }}
      </a>

      <a href="#experience" :class="{ active: activeSection === 'experience' }">
        {{ t("nav.experience") }}
      </a>

      <a href="#skills" :class="{ active: activeSection === 'skills' }">
        {{ t("nav.skills") }}
      </a>

      <a
        href="#certifications"
        :class="{ active: activeSection === 'certifications' }"
      >
        {{ t("nav.certifications") }}
      </a>

      <a href="#projects" :class="{ active: activeSection === 'projects' }">
        {{ t("nav.projects") }}
      </a>

      <a href="#contact" :class="{ active: activeSection === 'contact' }">
        {{ t("nav.contact") }}
      </a>
    </nav>
    <div class="language-switcher">
      <NuxtLink
        :to="getLanguagePath('pt')"
        :class="{ active: locale === 'pt' }"
      >
        🇧🇷 PT
      </NuxtLink>

      <span>|</span>

      <NuxtLink
        :to="getLanguagePath('en')"
        :class="{ active: locale === 'en' }"
      >
        🇺🇸 EN
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();

const { activeSection, scrollToTop } = useActiveSection([
  "about",
  "experience",
  "skills",
  "certifications",
  "projects",
  "contact",
]);

function getLanguagePath(lang: "pt" | "en") {
  const hash = route.hash || "";

  if (lang === "pt") {
    return `/${hash}`;
  }

  return `/en${hash}`;
}

function goToTop(event: MouseEvent) {
  event.preventDefault();
  scrollToTop();
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  z-index: 20;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: 700;
}

.logo img {
  width: 36px;
  height: 36px;
  border-radius: 10px;
}

nav {
  display: flex;
  gap: 22px;
}

nav a,
.language-switcher a,
.language-switcher span {
  color: var(--color-text-secondary);
  font-weight: 600;
}

nav a:hover,
.language-switcher a:hover {
  color: var(--color-primary-light);
}
nav a.active {
  color: var(--color-primary-light);
  position: relative;
}

nav a.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: var(--color-primary-light);
}

.language-switcher {
  display: flex;
  gap: 8px;
  align-items: center;
}

.router-link-active {
  color: var(--color-primary-light);
}

.language-switcher a.active {
  color: var(--color-primary-light);
  font-weight: 800;
}

@media (max-width: 900px) {
  nav {
    display: none;
  }
}
</style>
