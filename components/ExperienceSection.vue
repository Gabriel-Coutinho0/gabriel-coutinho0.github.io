<template>
  <section id="experience" class="section section-dark">
    <div class="container">
      <p class="tag">{{ t("experience.tag") }}</p>

      <h2 class="section-title">{{ t("experience.title") }}</h2>

      <div class="timeline">
        <article
          v-for="job in jobs"
          :key="rt(job.role) + rt(job.company)"
          class="item card hover-card"
        >
          <span class="period">{{ rt(job.period) }}</span>

          <h3>{{ rt(job.role) }}</h3>

          <strong>{{ rt(job.company) }}</strong>

          <p>{{ rt(job.description) }}</p>

          <div class="techs">
            <span v-for="tech in job.techs" :key="rt(tech)">
              {{ rt(tech) }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();

type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
  techs: string[];
};

const jobs = computed(() => tm("experience.jobs") as Job[]);
</script>

<style scoped>
.timeline {
  display: grid;
  gap: 24px;
  margin-top: 40px;
}

.item {
  position: relative;
  padding: 28px;
}

.period {
  color: var(--color-primary-light);
  font-weight: 700;
}

h3 {
  margin: 12px 0 6px;
  color: var(--color-text-primary);
  font-size: 24px;
}

strong {
  color: #e2e8f0;
}

p {
  color: var(--color-text-secondary);
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
