<template>
  <section id="projects" class="section section-dark">
    <div class="container">
      <p class="tag">{{ t("projects.tag") }}</p>

      <h2 class="section-title">{{ t("projects.title") }}</h2>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="rt(project.title)"
          class="project-card card hover-card"
        >
          <h3>{{ rt(project.title) }}</h3>

          <p>{{ rt(project.description) }}</p>

          <div class="techs">
            <span v-for="tech in project.techs" :key="tech">
              {{ tech }}
            </span>
          </div>

          <a :href="project.link" target="_blank">
            {{ t("projects.view") }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();

type TranslatedProject = {
  title: string;
  description: string;
};

const translatedProjects = computed(
  () => tm("projects.items") as TranslatedProject[],
);

const projectLinks = [
  {
    techs: ["Nuxt", "Vue.js", "TypeScript", "Java", "Spring Boot", "MySQL"],
    link: "https://arci.com.br/",
  },
  {
    techs: ["Python", "OpenCV", "Flask"],
    link: "https://github.com/4-Fatech/API-6SEM",
  },
];

const projects = computed(() =>
  translatedProjects.value.map((project, index) => ({
    ...project,
    ...projectLinks[index],
  })),
);
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.project-card {
  padding: 28px;
}

h3 {
  margin: 0 0 16px;
  color: var(--color-text-primary);
  font-size: 24px;
}

p {
  color: var(--color-text-secondary);
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
  color: var(--color-primary-light);
  font-weight: 700;
}
</style>
