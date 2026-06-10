<template>
  <header class="header">
    <a href="#" class="logo">
      <img src="/favicon.ico" alt="Logo Gabriel Coutinho" />

      <span>Gabriel Coutinho</span>
    </a>

    <nav>
      <a href="#about">Sobre</a>
      <a href="#experience">Experiência</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projetos</a>
      <a href="#contact">Contato</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #1e293b;
  z-index: 20;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
}

.logo img {
  width: 36px;
  height: 36px;
  border-radius: 10px;
}

nav {
  display: flex;
  gap: 24px;
}

nav a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 15px;
}

nav a:hover {
  color: #8b5cf6;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }
}
</style>
