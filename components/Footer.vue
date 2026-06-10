<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <h3>Gabriel Coutinho</h3>

          <p>Software Developer · Full Stack · Vue.js · TypeScript · Java</p>
        </div>

        <div class="socials">
          <a href="mailto:gabrielcoutinho2011@gmail.com" aria-label="Email">
            <Icon icon="fa6-solid:envelope" />
          </a>

          <a
            href="https://github.com/Gabriel-Coutinho0"
            target="_blank"
            aria-label="GitHub"
          >
            <Icon icon="fa6-brands:github" />
          </a>

          <a
            href="https://www.linkedin.com/in/gabrielcoutinhosilva/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Icon icon="fa6-brands:linkedin" />
          </a>

          <a
            href="https://wa.me/5512991767150"
            target="_blank"
            aria-label="WhatsApp"
          >
            <Icon icon="fa6-brands:whatsapp" />
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>
          © {{ currentYear }} Gabriel Coutinho. {{ t('footer.text') }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  background: #0b1120;
  border-top: 1px solid #1e293b;
  padding: 40px 32px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}

.footer h3 {
  color: white;
  margin-bottom: 10px;
}

.footer p {
  color: #94a3b8;
  line-height: 1.7;
}

.socials {
  display: flex;
  gap: 18px;
  align-items: center;
}

.socials a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cbd5e1;
  font-size: 20px;
  transition: 0.2s;
}

.socials a:hover {
  background: #8b5cf6;
  color: #fff;
  transform: translateY(-4px);
}

.footer-bottom {
  margin-top: 35px;
  padding-top: 25px;
  border-top: 1px solid #1e293b;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  color: #64748b;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-top,
  .footer-bottom {
    text-align: center;
    justify-content: center;
  }

  .socials {
    justify-content: center;
  }
}
</style>
