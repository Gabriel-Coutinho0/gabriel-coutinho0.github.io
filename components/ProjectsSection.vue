<template>
  <section id="projects" class="section">
    <p class="tag">Portfólio</p>

    <h2>Projetos em destaque</h2>

    <div class="grid">
      <article v-for="project in projects" :key="project.title" class="card">
        <h3>{{ project.title }}</h3>

        <p>
          {{ project.description }}
        </p>

        <div class="techs">
          <span v-for="tech in project.techs" :key="tech">
            {{ tech }}
          </span>
        </div>

        <a :href="project.link" target="_blank"> Ver projeto → </a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "ARCI Inteligência Imobiliária",
    description:
      "Plataforma voltada para análise de inquilinos e gestão de risco para imobiliárias. Participei do desenvolvimento e evolução do produto, implementando funcionalidades frontend e backend, integrações com APIs, autenticação, dashboards e melhorias focadas em escalabilidade e experiência do usuário.",
    techs: ["Nuxt", "Vue.js", "TypeScript", "Java", "Spring Boot", "MySQL"],
    link: "https://arci.com.br/",
  },
  {
    title: "Sistema de Monitoramento de Áreas Restritas",
    description:
      "Projeto API desenvolvido em parceria com a Altave durante a graduação na FATEC. O sistema utiliza análise de imagens para monitoramento automático de áreas restritas, contribuindo para segurança e controle de acesso.",
    techs: ["Python", "OpenCV", "Flask"],
    link: "https://github.com/4-Fatech/API-6SEM",
  },
];
</script>

<style scoped>
.section {
  padding: 110px 8%;
  background: #0f172a;
  color: #fff;
}

.tag {
  color: #a78bfa;
  font-weight: 700;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(32px, 5vw, 48px);
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  padding: 28px;
  border-radius: 18px;
  background: #1e293b;
  border: 1px solid #334155;
}

.card:hover {
  border-color: #8b5cf6;
  transform: translateY(-6px);
  transition: 0.2s;
}

h3 {
  font-size: 24px;
}

p {
  color: #cbd5e1;
  line-height: 1.7;
}

.techs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.techs span {
  padding: 7px 11px;
  border-radius: 999px;
  background: #312e81;
  color: #ddd6fe;
  font-size: 14px;
}

a {
  color: #a78bfa;
  font-weight: 700;
}
</style>
