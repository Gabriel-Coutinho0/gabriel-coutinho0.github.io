<template>
  <section id="about" class="section">
    <p class="tag">Sobre mim</p>
    <h2>Desenvolvedor focado em soluções web modernas.</h2>

    <div class="text">
      <p>
        Sou Desenvolvedor de Software formado em Análise e Desenvolvimento de
        Sistemas pela FATEC São José dos Campos.
      </p>

      <p>
        Tenho experiência em desenvolvimento full stack, atuando com frontend,
        backend, APIs REST, banco de dados e manutenção de sistemas críticos.
      </p>

      <p>
        Trabalho principalmente com Vue.js, TypeScript, Java, Spring Boot,
        JavaScript, PostgreSQL e MySQL, sempre buscando entregar soluções
        escaláveis, confiáveis e alinhadas às necessidades do negócio.
      </p>
    </div>
  </section>
</template>

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
