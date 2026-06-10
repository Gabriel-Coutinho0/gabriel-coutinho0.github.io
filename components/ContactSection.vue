<template>
  <section id="contact" class="section section-light">
    <div class="container contact-container">
      <p class="tag">{{ t("contact.tag") }}</p>
      <h2 class="section-title">{{ t("contact.title") }}</h2>
      <p class="section-description">{{ t("contact.description") }}</p>

      <div class="contact-card card">
        <a class="contact-item" href="mailto:gabrielcoutinho2011@gmail.com">
          <span class="icon">
            <Icon icon="fa6-solid:envelope" />
          </span>

          <span>gabrielcoutinho2011@gmail.com</span>
        </a>

        <a
          class="contact-item"
          href="https://wa.me/5512991767150"
          target="_blank"
        >
          <span class="icon">
            <Icon icon="fa6-brands:whatsapp" />
          </span>

          <span>WhatsApp: +55 12 99176-7150</span>
        </a>

        <a
          class="contact-item"
          href="https://github.com/Gabriel-Coutinho0"
          target="_blank"
        >
          <span class="icon">
            <Icon icon="fa6-brands:github" />
          </span>

          <span>github.com/Gabriel-Coutinho0</span>
        </a>

        <a
          class="contact-item"
          href="https://www.linkedin.com/in/gabrielcoutinhosilva/"
          target="_blank"
        >
          <span class="icon">
            <Icon icon="fa6-brands:linkedin" />
          </span>

          <span>linkedin.com/in/gabrielcoutinhosilva</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const { t } = useI18n();
</script>

<style scoped>
.contact-container {
  text-align: center;
}

.contact-card {
  max-width: 620px;
  margin: 42px auto 0;
  padding: 32px;
  text-align: left;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.contact-item {
  display: grid;
  grid-template-columns: 44px 1fr;
  align-items: center;
  column-gap: 18px;
  margin-bottom: 24px;
  color: var(--color-text-secondary);
  transition: var(--transition-default);
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item:hover {
  color: var(--color-primary-light);
  transform: translateX(4px);
}

.icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.18);
  color: var(--color-primary-light);
  font-size: 18px;
}

.icon svg {
  width: 18px;
  height: 18px;
}

.contact-item span:last-child {
  display: block;
  font-size: 17px;
  line-height: 1.4;
  word-break: break-word;
}

@media (max-width: 600px) {
  .contact-card {
    padding: 24px;
  }

  .contact-item {
    grid-template-columns: 40px 1fr;
    column-gap: 14px;
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  .contact-item span:last-child {
    font-size: 15px;
  }
}
</style>
