<template>
  <section id="about" class="section section-light">
    <div class="container">
      <p class="tag">{{ t("about.tag") }}</p>

      <h2 class="section-title">
        {{ t("about.title") }}
      </h2>

      <div class="about-text">
        <p>{{ t("about.p1") }}</p>
        <p>{{ t("about.p2") }}</p>
        <p>{{ t("about.p3") }}</p>
        <p>{{ t("about.p4") }}</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { t } = useI18n();
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
  max-width: 760px;
  font-size: clamp(32px, 5vw, 52px);
  margin: 12px 0 28px;
}

.text {
  max-width: 900px;
}

p {
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 18px;
}
</style>
