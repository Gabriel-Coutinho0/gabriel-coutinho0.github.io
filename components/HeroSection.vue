<template>
  <section class="hero">
    <div class="container">
      <p class="tag">Software Developer</p>

      <h1>{{ t("hero.title") }} <span>Gabriel Coutinho</span></h1>

      <p class="description">
        {{ t("hero.description") }}
      </p>

      <p class="stack">
        {{ t("hero.stack") }}
      </p>
      <div class="actions">
        <a href="#projects">{{ t("hero.projects") }}</a>

        <a :href="cvPath" download class="outline">
          {{ t("hero.download") }}
        </a>

        <a href="#contact" class="outline"> {{ t("hero.contact") }} </a>
      </div>

      <div class="stats">
        <div class="card">
          <strong>3+</strong>
          <span>{{ t("hero.experience") }}</span>
        </div>

        <div class="card">
          <strong>Full Stack</strong>
          <span>{{ t("hero.fullstack") }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale  } = useI18n();

const cvPath = computed(() => {
  return locale.value === "en"
    ? "/Gabriel-Coutinho-CV-EN.pdf"
    : "/Gabriel-Coutinho-CV-PT.pdf";
});
</script>
<style scoped>
.hero {
  min-height: 100vh;
  padding: 150px 32px 90px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(
      circle at top right,
      rgba(139, 92, 246, 0.25),
      transparent 35%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(59, 130, 246, 0.12),
      transparent 35%
    ),
    var(--color-bg);
  color: var(--color-text-primary);
}

h1 {
  max-width: 780px;
  font-size: clamp(42px, 7vw, 78px);
  line-height: 1.05;
  margin: 18px 0;
}

h1 span {
  color: var(--color-primary);
}

.description {
  max-width: 720px;
  color: var(--color-text-secondary);
  font-size: 20px;
  line-height: 1.7;
}

.stack {
  margin-top: 18px;
  color: var(--color-primary-light);
  font-weight: 700;
}

.actions {
  margin-top: 34px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.actions a {
  padding: 14px 24px;
  border-radius: var(--radius-md);
  background: var(--color-primary);
  color: #fff;
  font-weight: 700;
  transition: var(--transition-default);
}

.actions a:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(139, 92, 246, 0.35);
}

.actions .outline {
  background: transparent;
  border: 1px solid var(--color-primary);
}

.stats {
  margin-top: 56px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stats div {
  padding: 20px;
  min-width: 190px;
}

.stats strong {
  display: block;
  font-size: 24px;
}

.stats span {
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .hero {
    padding: 130px 24px 80px;
  }

  .actions a,
  .stats div {
    width: 100%;
    text-align: center;
  }
}
</style>
