<template>
  <section id="certifications" class="section section-light">
    <div class="container">
      <p class="tag">{{ t("certifications.tag") }}</p>

      <h2 class="section-title">
        {{ t("certifications.title") }}
      </h2>

      <div class="certifications-grid">
        <article
          v-for="certification in certifications"
          :key="rt(certification.title)"
          class="certification-card card hover-card"
        >
          <h3>{{ rt(certification.title) }}</h3>

          <p class="issuer">
            {{ rt(certification.issuer) }}
          </p>

          <p class="date">
            {{ rt(certification.date) }}
          </p>

          <a
            href="https://www.linkedin.com/in/gabrielcoutinhosilva/details/certifications/"
            target="_blank"
          >
            {{ t("certifications.view") }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();

type Certification = {
  title: string;
  issuer: string;
  date: string;
};

const certifications = computed(
  () => tm("certifications.items") as Certification[],
);
</script>

<style scoped>
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.certification-card {
  padding: 24px;
}

.certification-card h3 {
  margin: 0 0 10px;
  color: var(--color-text-primary);
  font-size: 20px;
}

.issuer {
  margin: 0;
  color: var(--color-primary-light);
  font-weight: 700;
}

.date {
  margin: 8px 0 20px;
  color: var(--color-text-secondary);
}

.certification-card a {
  color: var(--color-primary-light);
  font-weight: 700;
}

.certification-card a:hover {
  color: var(--color-text-primary);
}
</style>
