<template>
  <section id="contact" class="section">
    <p class="tag">Contato</p>

    <h2>Vamos conversar?</h2>

    <p class="description">
      Estou aberto a oportunidades, projetos e conexões profissionais.
    </p>

    <div class="contact-card">
      <div class="contact-item">
        <span class="icon">📍</span>
        <p>Caçapava, SP - Brasil</p>
      </div>

      <div class="contact-item">
        <span class="icon">✉️</span>
        <a href="mailto:gabrielcoutinho2011@gmail.com">
          gabrielcoutinho2011@gmail.com
        </a>
      </div>

      <div class="contact-item">
        <span class="icon">📞</span>
        <a href="tel:+5512991767150"> +55 12 99176-7150 </a>
      </div>

      <div class="contact-item">
        <span class="icon">🐙</span>
        <a href="https://github.com/Gabriel-Coutinho0" target="_blank">
          github.com/Gabriel-Coutinho0
        </a>
      </div>

      <div class="contact-item">
        <span class="icon">💼</span>
        <a
          href="https://www.linkedin.com/in/gabrielcoutinhosilva/"
          target="_blank"
        >
          linkedin.com/in/gabrielcoutinhosilva
        </a>
      </div>
    </div>

    <div class="links">
      <a href="mailto:gabrielcoutinho2011@gmail.com">Email</a>

      <a href="https://github.com/Gabriel-Coutinho0" target="_blank">
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/gabrielcoutinhosilva/"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 110px 8%;
  background: #111827;
  color: #fff;
  text-align: center;
}

.tag {
  color: #a78bfa;
  font-weight: 700;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(32px, 5vw, 52px);
  margin: 12px 0;
}

.description {
  color: #cbd5e1;
  font-size: 18px;
}

.contact-card {
  max-width: 620px;
  margin: 42px auto 0;
  padding: 32px;
  border-radius: 22px;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid #334155;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  text-align: left;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.15);
  font-size: 18px;
}

.contact-item p,
.contact-item a {
  margin: 0;
  color: #cbd5e1;
  font-size: 17px;
  text-decoration: none;
}

.contact-item a:hover {
  color: #a78bfa;
}

.links {
  margin-top: 34px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.links a {
  padding: 14px 24px;
  border-radius: 12px;
  background: #8b5cf6;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  transition: 0.2s;
}

.links a:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(139, 92, 246, 0.35);
}

@media (max-width: 600px) {
  .contact-card {
    padding: 24px;
  }

  .contact-item {
    align-items: flex-start;
  }

  .contact-item p,
  .contact-item a {
    font-size: 15px;
    word-break: break-word;
  }
}
</style>
