<template>
  <section class="section">
    <div class="container">
      <p class="tag">Idiomas</p>

      <h2>Idiomas</h2>

      <div class="language">
        <span>Inglês</span>
        <strong>Intermediário</strong>
      </div>
      <div class="language">
        <span>Espanhol</span>
        <strong>Intermediário</strong>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 90px 32px;
  background: #0f172a;
  color: #fff;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.tag {
  color: #a78bfa;
  font-weight: 700;
  text-transform: uppercase;
}

h2 {
  font-size: clamp(28px, 4vw, 42px);
  margin: 12px 0 28px;
}

.language {
  max-width: 420px;
  padding: 24px;
  border-radius: 18px;
  background: #1e293b;
  border: 1px solid #334155;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language span {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.language strong {
  color: #a78bfa;
}
</style>
