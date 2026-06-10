<template>
  <section id="skills" class="section">
    <p class="tag">Tecnologias</p>
    <h2>Skills</h2>

    <div class="grid">
      <article v-for="group in skills" :key="group.title" class="card">
        <h3>{{ group.title }}</h3>

        <div class="items">
          <span v-for="item in group.items" :key="item">{{ item }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    title: "Frontend",
    items: ["Vue.js", "React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Banco de dados",
    items: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "Docker", "Linux", "VS Code"],
  },
];
</script>

<style scoped>
.section {
  padding: 110px 8%;
  background: #111827;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.card {
  padding: 28px;
  border-radius: 18px;
  background: #1e293b;
  border: 1px solid #334155;
}

.card:hover {
  transform: translateY(-6px);
  transition: 0.2s;
  border-color: #8b5cf6;
}

h3 {
  font-size: 24px;
  margin-bottom: 18px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.items span {
  padding: 8px 12px;
  border-radius: 999px;
  background: #312e81;
  color: #ddd6fe;
}
</style>
