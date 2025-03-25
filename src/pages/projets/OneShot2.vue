<template>
  <div>
    <header>
      <nav>
        <div class="logo">Portfolio</div>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/apropos">À propos</router-link></li>
          <li><router-link to="/projets">Projets</router-link></li>
          <li><router-link to="/#contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="projet-detail">
      <section class="projet-detail-page">
        <div class="projet-header">
          <h1>ONE SHOT 2</h1>
          <p class="projet-subtitle">2022 - WOODY HOUSE</p>
        </div>

        <div class="projet-info">
          <div class="info-section">
            <h2>Description du projet</h2>
            <div class="projet-description">
              <p>EXERCICE D'UNE DURÉE D'UNE SEMAINE</p>
              <p>CE PROJET S'INSPIRE DES APPROCHES ARCHITECTURALES INNOVANTES DE L'ATELIER RENZO PIANO AVEC LA "MAISON
                DIOGÈNE" ET DE DIDIER FAUSTINO AVEC LA "ONE METER HOUSE". L'IDÉE EST D'EXPLORER LE CONCEPT D'UN HABITAT
                MINIMAL, UNE MICRO-HABITATION COMPACTE RÉUNISSANT TOUTES LES FONCTIONS ESSENTIELLES D'UNE MAISON : VIVRE,
                DORMIR, CUISINER, ET SE LAVER, PENSÉE POUR UNE PERSONNE SEULE.</p>
              <p>IMAGINÉE COMME UNE CABINE AUTONOME (OFF-GRID), CETTE STRUCTURE EST CONÇUE POUR ÊTRE INSTALLÉE DANS UN
                ENVIRONNEMENT VIERGE, EN HARMONIE AVEC LA NATURE. TOTALEMENT INDÉPENDANTE DES INFRASTRUCTURES
                CLASSIQUES, ELLE INTERROGE LES NOTIONS D'AUTONOMIE, DE DURABILITÉ ET D'ÉCONOMIE D'ESPACE. CE PROJET PROPOSE
                UNE RÉFLEXION SUR L'ESSENCE MÊME DE L'HABITAT, REPOUSSANT LES LIMITES DU CONFORT ET DE LA FONCTIONNALITÉ
                DANS UN ESPACE RÉDUIT, TOUT EN METTANT L'ACCENT SUR L'IMPACT ENVIRONNEMENTAL ET LA SIMPLICITÉ DE VIE.</p>
            </div>
          </div>

          <div class="info-section">
            <h2>Détails</h2>
            <ul class="details-list">
              <li><strong>Type:</strong> Micro-habitat</li>
              <li><strong>Année:</strong> 2022</li>
              <li><strong>Durée:</strong> 1 semaine</li>
              <li><strong>Inspiration:</strong> Maison Diogène (Renzo Piano), One Meter House (Didier Faustino)</li>
              <li><strong>Concept:</strong> Habitat minimal autonome</li>
            </ul>
          </div>
        </div>

        <div class="projet-gallery">
          <h2>Galerie</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="../images/projet6.jpg" alt="Vue du projet" class="projet-image">
              <p class="image-caption">Vue principale du projet</p>
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