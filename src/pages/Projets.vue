<template>
  <main>
    <section id="projets" class="projets-page">
      <h2>Mes Projets</h2>
      
      <div class="projets-grid">
        <router-link to="/projets/metropole" class="projet-item">
          <div class="projet-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="projet-content">
            <h3>MÉTROPOLE MÉDITERRANÉENNE</h3>
            <p class="projet-categorie">2024 - LUNGOMARE DI BAGNOLI</p>
            <p class="projet-description-preview">TRAVAIL RÉALISÉ EN TRÎNOME</p>
          </div>
        </router-link>

        <router-link to="/projets/impact-2024" class="projet-item">
          <div class="projet-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="projet-content">
            <h3>CONCOURS IMPACT 2024</h3>
            <p class="projet-categorie">2024 - L'ATELIER DES CIMES</p>
            <p class="projet-description-preview">TRAVAIL RÉALISÉ EN BINÔME</p>
          </div>
        </router-link>

        <router-link to="/projets/logements-beziers" class="projet-item">
          <div class="projet-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="projet-content">
            <h3>LOGEMENTS COLLECTIFS À BÉZIERS</h3>
            <p class="projet-categorie">2024 - PROMENADE À BEZIERS</p>
            <p class="projet-description-preview">TRAVAIL RÉALISÉ SEULE</p>
          </div>
        </router-link>

        <router-link to="/projets/base-nautique" class="projet-item">
          <div class="projet-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="projet-content">
            <h3>BASE NAUTIQUE</h3>
            <p class="projet-categorie">2023 - AU FIL DE L'EAU</p>
            <p class="projet-description-preview">TRAVAIL RÉALISÉ SEULE</p>
          </div>
        </router-link>

        <router-link to="/projets/habitat-intermediaire" class="projet-item">
          <div class="projet-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="projet-content">
            <h3>HABITAT INTERMÉDIAIRE DENSE</h3>
            <p class="projet-categorie">2023 -L'INTERMÉDIAIRE</p>
            <p class="projet-description-preview">TRAVAIL RÉALISÉ SEULE</p>
          </div>
        </router-link>

        <router-link to="/projets/one-shot" class="projet-item">
          <div class="projet-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="projet-content">
            <h3>ONE SHOT 1 & 2</h3>
            <p class="projet-categorie">2022 - GARDEN TRIP & WOODY HOUSE</p>
            <p class="projet-description-preview">TRAVAIL RÉALISÉ EN BINÔME</p>
          </div>
        </router-link>

        <router-link to="/projets/habitat-individuel" class="projet-item">
          <div class="projet-image">
            <div class="placeholder-image"></div>
          </div>
          <div class="projet-content">
            <h3>HABITAT INDIVIDUEL</h3>
            <p class="projet-categorie">2022 -L'IMMERSION</p>
            <p class="projet-description-preview">TRAVAIL RÉALISÉ EN BINÔME</p>
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
.projets-page {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  text-align: center;
}

.projets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.projet-item {
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.projet-item:hover {
  transform: translateY(-5px);
}

.projet-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  background-image: linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5),
    linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}

.projet-content {
  padding: 1.5rem;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.projet-categorie {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

.projet-description-preview {
  font-size: 0.9rem;
  color: #34495e;
}

@media (max-width: 768px) {
  .projets-page {
    padding: 2rem 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .projets-grid {
    grid-template-columns: 1fr;
  }
}
</style> 