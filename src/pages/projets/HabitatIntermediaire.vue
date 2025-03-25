<template>
  <main class="projet-detail">
    <div class="projet-header">
      <h1>HABITAT INTERMÉDIAIRE DENSE</h1>
      <p class="projet-subtitle">2023 - DENSITÉ ET QUALITÉ DE VIE</p>
    </div>

    <div class="projet-info">
      <div class="info-section">
        <h2>Description du projet</h2>
        <p>Projet d'habitat intermédiaire dense explorant les possibilités de créer des logements à échelle humaine tout en optimisant l'occupation du sol. Une réflexion sur la densité urbaine et la qualité de vie...</p>
      </div>

      <div class="info-section">
        <h2>Détails</h2>
        <ul class="details-list">
          <li><strong>Type:</strong> Habitat intermédiaire</li>
          <li><strong>Année:</strong> 2023</li>
          <li><strong>Surface:</strong> 3000 m²</li>
          <li><strong>Programme:</strong> 30 logements</li>
          <li><strong>Densité:</strong> 100 logements/ha</li>
          <li><strong>Localisation:</strong> Zone périurbaine</li>
        </ul>
      </div>
    </div>

    <div class="projet-gallery">
      <h2>Galerie</h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <div class="placeholder-image"></div>
          <p class="image-caption">Vue d'ensemble du projet</p>
        </div>
        <div class="gallery-item">
          <div class="placeholder-image"></div>
          <p class="image-caption">Espaces communs et circulation</p>
        </div>
        <div class="gallery-item">
          <div class="placeholder-image"></div>
          <p class="image-caption">Typologies de logements</p>
        </div>
        <div class="gallery-item">
          <div class="placeholder-image"></div>
          <p class="image-caption">Intégration urbaine</p>
        </div>
      </div>
    </div>

    <div class="projet-navigation">
      <router-link to="/projets" class="nav-button">← Retour aux projets</router-link>
    </div>
  </main>
</template>

<style scoped>
.projet-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.projet-header {
  text-align: center;
  margin-bottom: 4rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.projet-subtitle {
  font-size: 1.2rem;
  color: #666;
}

.projet-info {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.info-section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
}

.details-list {
  list-style: none;
  padding: 0;
}

.details-list li {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #34495e;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.gallery-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.placeholder-image {
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  background-image: linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5),
    linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}

.image-caption {
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}

.projet-navigation {
  margin-top: 4rem;
  text-align: center;
}

.nav-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #34495e;
}

@media (max-width: 768px) {
  .projet-detail {
    padding: 2rem 1rem;
  }

  .projet-info {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style> 