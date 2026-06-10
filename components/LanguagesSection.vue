<template>
  <section class="section">
    <p class="tag">Idiomas</p>

    <h2>Idiomas</h2>

    <div class="languages">

      <div class="language">
        <span>Inglês</span>

        <div class="level">
          <div class="active"></div>
          <div class="active"></div>
          <div class="active"></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="language">
        <span>Espanhol</span>

        <div class="level">
          <div class="active"></div>
          <div class="active"></div>
          <div class="active"></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 110px 8%;
  background: #111827;
  color: white;
}

.tag {
  color: #a78bfa;
  text-transform: uppercase;
  font-weight: 700;
}

h2 {
  margin-bottom: 40px;
}

.language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin-bottom: 30px;
}

.language span {
  font-size: 22px;
}

.level {
  display: flex;
  gap: 10px;
}

.level div {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #334155;
}

.active {
  background: #5eead4 !important;
}
</style>
