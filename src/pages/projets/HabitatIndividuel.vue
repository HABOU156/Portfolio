<template>
  <div>

    <main class="projet-detail">
      <section class="projet-detail-page">
        <div class="projet-header">
          <h1>HABITAT INDIVIDUEL</h1>
          <p class="projet-subtitle">2023 - MAISON CONTEMPORAINE</p>
        </div>

        <div class="projet-info">
          <div class="info-section">
            <h2>Description du projet</h2>
            <div class="projet-description">
              <p>Conception d'une maison individuelle contemporaine alliant esthétique moderne et fonctionnalité. Le projet met l'accent sur la relation entre intérieur et extérieur, la lumière naturelle et l'optimisation des espaces...</p>
            </div>
          </div>

          <div class="info-section">
            <h2>Détails</h2>
            <ul class="details-list">
              <li><strong>Type:</strong> Maison individuelle</li>
              <li><strong>Année:</strong> 2023</li>
              <li><strong>Surface:</strong> 180 m²</li>
              <li><strong>Programme:</strong> 4 chambres, espaces de vie</li>
              <li><strong>Terrain:</strong> 600 m²</li>
              <li><strong>Localisation:</strong> Sud de la France</li>
            </ul>
          </div>
        </div>

        <div class="projet-gallery">
          <h2>Galerie</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="../images/projet1.jpg" alt="Vue extérieure principale" class="projet-image">
              <p class="image-caption">Vue extérieure principale</p>
            </div>
            <div class="gallery-item">
              <img src="../images/projet1-2.jpg" alt="Espaces intérieurs" class="projet-image">
              <p class="image-caption">Espaces intérieurs</p>
            </div>
            <div class="gallery-item">
              <img src="../images/projet1-3.jpg" alt="Plans et coupes" class="projet-image">
              <p class="image-caption">Plans et coupes</p>
            </div>
            <div class="gallery-item">
              <img src="../images/projet1-4.jpg" alt="Aménagement paysager" class="projet-image">
              <p class="image-caption">Aménagement paysager</p>
            </div>
          </div>
        </div>

        <div class="projet-navigation">
          <router-link to="/projets" class="nav-button">← Retour aux projets</router-link>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 Oumaima El Bouhamdi. Tous droits réservés.</p>
    </footer>
  </div>
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

.projet-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  margin-bottom: 1.5rem;
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

.projet-image {
  width: 100%;
  height: auto;
  object-fit: cover;
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

/* Navigation styles */
header {
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #3498db;
}

/* Footer styles */
footer {
  text-align: center;
  padding: 2rem;
  background-color: #2c3e50;
  color: white;
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

  nav {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
}
</style> 