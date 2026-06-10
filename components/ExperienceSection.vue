<template>
  <section id="experience" class="section">
    <p class="tag">Carreira</p>
    <h2>Experiência profissional</h2>

    <div class="timeline">
      <article v-for="job in jobs" :key="job.company + job.role" class="item">
        <span class="period">{{ job.period }}</span>
        <h3>{{ job.role }}</h3>
        <strong>{{ job.company }}</strong>
        <p>{{ job.description }}</p>

        <div class="techs">
          <span v-for="tech in job.techs" :key="tech">{{ tech }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const jobs = [
  {
    role: "Desenvolvedor Front-end Sênior",
    company: "ARCI Inteligência Imobiliária",
    period: "Mar 2026 - Atual",
    description:
      "Desenvolvimento e evolução de plataformas para o mercado imobiliário, com implementação de funcionalidades, sustentação de sistemas críticos, revisão técnica de código e apoio em decisões de arquitetura.",
    techs: ["Vue.js", "TypeScript", "APIs", "Banco de dados"],
  },
  {
    role: "Desenvolvedor Pleno",
    company: "ImovPago",
    period: "Set 2025 - Fev 2026",
    description:
      "Atuação full stack com desenvolvimento frontend, regras de negócio, APIs, modelagem de banco de dados, melhorias contínuas e suporte à produção.",
    techs: ["Vue.js", "TypeScript", "Backend", "SQL"],
  },
  {
    role: "Desenvolvedor Júnior",
    company: "UC Technology do Brasil",
    period: "Jun 2025 - Set 2025",
    description:
      "Desenvolvimento e manutenção de aplicações web, integração de APIs, prototipação e participação no levantamento de requisitos.",
    techs: ["Frontend", "Backend", "APIs"],
  },
  {
    role: "Auxiliar de Desenvolvimento",
    company: "UC Technology do Brasil",
    period: "Jun 2023 - Jun 2025",
    description:
      "Apoio no desenvolvimento frontend e backend, levantamento de requisitos e prototipação de soluções.",
    techs: ["Web", "Prototipação", "Requisitos"],
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

.timeline {
  display: grid;
  gap: 24px;
}

.item {
  position: relative;
  padding: 28px;
  border-radius: 18px;
  background: #1e293b;
  border: 1px solid #334155;
}

.item:hover {
  border-color: #8b5cf6;
}

.period {
  color: #a78bfa;
  font-weight: 700;
}

h3 {
  margin: 12px 0 6px;
  font-size: 24px;
}

strong {
  color: #e2e8f0;
}

p {
  color: #cbd5e1;
  line-height: 1.7;
}

.techs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.techs span {
  padding: 7px 12px;
  border-radius: 999px;
  background: #312e81;
  color: #ddd6fe;
  font-size: 14px;
}
</style>
