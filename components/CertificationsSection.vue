<template>
  <section id="certifications" class="section section-light">
    <div class="container">
      <p class="tag">Certificações</p>

      <h2 class="section-title">Licenças e certificados</h2>

      <div class="certifications-grid">
        <article
          v-for="certification in certifications"
          :key="certification.title"
          class="certification-card card hover-card"
        >
          <h3>{{ certification.title }}</h3>

          <p class="issuer">
            {{ certification.issuer }}
          </p>

          <p class="date">
            {{ certification.date }}
          </p>

          <a
            v-if="certification.link"
            :href="certification.link"
            target="_blank"
          >
            Ver credencial →
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const certifications = [
  {
    title: "Test of English for International Communication (TOEIC)",
    issuer: "ETS",
    date: "Emitido em maio de 2024",
    link: "https://www.linkedin.com/in/gabrielcoutinhosilva/details/certifications/",
  },
  {
    title: "Vue3: Avançando no Framework",
    issuer: "Alura",
    date: "Emitido em março de 2024",
    link: "https://www.linkedin.com/in/gabrielcoutinhosilva/details/certifications/",
  },
  {
    title: "Vue3: Explorando o Framework",
    issuer: "Alura",
    date: "Emitido em dezembro de 2023",
    link: "https://www.linkedin.com/in/gabrielcoutinhosilva/details/certifications/",
  },
  {
    title: "CSS: Construindo Layouts com Grid",
    issuer: "Alura",
    date: "Emitido em abril de 2023",
    link: "https://www.linkedin.com/in/gabrielcoutinhosilva/details/certifications/",
  },
  {
    title: "CSS: Flexbox e Layouts Responsivos",
    issuer: "Alura",
    date: "Emitido em março de 2023",
    link: "https://www.linkedin.com/in/gabrielcoutinhosilva/details/certifications/",
  },
  {
    title: "TypeScript parte 1: Evoluindo seu JavaScript",
    issuer: "Alura",
    date: "Emitido em março de 2023",
    link: "https://www.linkedin.com/in/gabrielcoutinhosilva/details/certifications/",
  },
];
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
