<template>
  <section id="skills" class="section section-light">
    <div class="container">
      <p class="tag">
        {{ t("skills.tag") }}
      </p>

      <h2 class="section-title">
        {{ t("skills.title") }}
      </h2>
      <div class="skills-grid">
        <article
          v-for="group in skills"
          :key="group.title"
          class="skill-card card hover-card"
        >
          <h3>{{ group.title }}</h3>

          <div class="items">
            <div
              v-for="item in group.items"
              :key="item.name"
              class="skill-item"
            >
              <Icon :icon="item.icon" class="skill-icon" />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { t } = useI18n();

const skills = computed(() => [
  {
    title: t("skills.frontend"),
    items: [
      { name: "Vue.js", icon: "logos:vue" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
    ],
  },
  {
    title: t("skills.backend"),
    items: [
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "REST APIs", icon: "mdi:api" },
      {name: "Node", icon:"devicon:nodejs"}
    ],
  },
  {
    title: t("skills.database"),
    items: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "SQL", icon: "mdi:database" },
    ],
  },
  {
    title: t("skills.tools"),
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
    ],
  },
]);
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.skill-card {
  padding: 28px;
}

.skill-card h3 {
  margin: 0 0 24px;
  color: var(--color-text-primary);
  font-size: 22px;
}

.items {
  display: grid;
  gap: 14px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-secondary);
  font-weight: 600;
}

.skill-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .skill-card {
    padding: 24px;
  }
}
</style>
