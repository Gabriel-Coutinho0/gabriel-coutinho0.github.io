<template>
  <section class="hero">
    <div class="content">
      <p class="tag">Software Developer</p>

      <h1>Olá, eu sou <span>Gabriel Coutinho</span></h1>

      <p class="description">
        Desenvolvedor Full Stack com experiência em Vue.js, TypeScript, Java,
        Spring Boot, APIs REST e bancos de dados SQL.
      </p>

      <div class="actions">
        <a href="#projects">Ver projetos</a>

        <a href="/Gabriel-Coutinho-CV.pdf" download class="outline">
          Download CV
        </a>

        <a href="#contact" class="outline"> Contato </a>
      </div>

      <div class="stats">
        <div>
          <strong>3+</strong>
          <span>anos de experiência</span>
        </div>

        <div>
          <strong>4</strong>
          <span>experiências/projetos</span>
        </div>

        <div>
          <strong>Full Stack</strong>
          <span>frontend e backend</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 150px 8% 80px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(
      circle at top right,
      rgba(139, 92, 246, 0.25),
      transparent 35%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(59, 130, 246, 0.12),
      transparent 35%
    ),
    #0f172a;
  color: #fff;
}

.content {
  max-width: 900px;
}

.tag {
  color: #a78bfa;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(42px, 7vw, 78px);
  line-height: 1.05;
  margin: 18px 0;
}

h1 span {
  color: #8b5cf6;
}

.description {
  max-width: 720px;
  color: #cbd5e1;
  font-size: 20px;
  line-height: 1.7;
}

.actions {
  margin-top: 34px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.actions a {
  padding: 14px 24px;
  border-radius: 12px;
  background: #8b5cf6;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: 0.2s;
}

.actions a:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(139, 92, 246, 0.35);
}

.actions .outline {
  background: transparent;
  border: 1px solid #8b5cf6;
}

.stats {
  margin-top: 56px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stats div {
  padding: 20px;
  min-width: 180px;
  border-radius: 16px;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid #334155;
}

.stats strong {
  display: block;
  color: #fff;
  font-size: 24px;
}

.stats span {
  color: #94a3b8;
}

@media (max-width: 768px) {
  .hero {
    padding-top: 130px;
  }
}
</style>
