<template>
  <div>
    <main class="projet-detail">
      <section class="projet-detail-page">
        <div class="projet-header">
          <h1>BASE NAUTIQUE</h1>
          <p class="projet-subtitle">2023 - AU FIL DE L'EAU, HARMONIE NATURELLE AU SEIN DE LA BASE NAUTIQUE</p>
        </div>

        <div class="projet-info">
          <div class="info-section">
            <h2>Description du projet</h2>
            <div class="projet-description">
              <p>LE PROJET CONSISTE EN LA CRÉATION D'UNE BASE NAUTIQUE SITUÉE EN FACE DE L'ÉTANG DE THAU, UN SITE QUI SE
                DISTINGUE PAR SA RICHESSE ÉCOLOGIQUE ET SA BEAUTÉ TRANQUILLE. CE CADRE IDÉAL EST DESTINÉ À ACCUEILLIR
                UNE BASE NAUTIQUE NOVATRICE, CONÇUE POUR S'INTÉGRER HARMONIEUSEMENT DANS LE PAYSAGE TOUT EN DEVENANT
                UN POINT FOCAL POUR LES PASSIONNÉS DE SPORTS NAUTIQUES, LES AMATEURS DE NATURE, ET LA COMMUNAUTÉ
                LOCALE.</p>
              <p>LE CONCEPT ARCHITECTURAL REPOSE SUR TROIS PILIERS PRINCIPAUX : L'INTÉGRATION, L'ACCESSIBILITÉ ET LES PATIOS.
                LA STRUCTURE, LÉGÈRE ET DE PLEIN PIED, EST CONÇUE POUR PRÉSERVER LA VUE SUR L'ÉTANG. L'UTILISATION DU
                BOIS, SELON UNE OSSATURE POTEAUX-POUTRES, ASSURE UNE DURABILITÉ TOUT EN RESPECTANT L'ENVIRONNEMENT.
                LA FORME DU BÂTIMENT ÉPOUSE CELLE DE L'ÉTANG ET S'OUVRE SUR LE MONT SAINT CLAIR.</p>
              <p>LE COEUR DE LA BASE NAUTIQUE EST COMPOSÉ DE PATIOS QUI APPORTENT FRAÎCHEUR ET ORGANISENT LA CIRCULATION
                AUTOUR D'EUX. CES ESPACES SONT ACCESSIBLES AU PUBLIC ET INCLUENT DES TERRASSES PERMETTANT DE
                BÉNÉFICIER DE LUMIÈRE NATURELLE ET D'UNE SENSATION DE PLEIN AIR MÊME EN INTÉRIEUR.</p>
            </div>
          </div>

          <div class="info-section">
            <h2>Détails</h2>
            <ul class="details-list">
              <li><strong>Type:</strong> Équipement sportif et de loisirs</li>
              <li><strong>Année:</strong> 2023</li>
              <li><strong>Surface:</strong> 1200 m²</li>
              <li><strong>Programme:</strong> Base nautique avec club house</li>
              <li><strong>Localisation:</strong> Étang de Thau</li>
            </ul>
          </div>
        </div>

        <div class="projet-gallery">
          <h2>Galerie</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="../images/projet4.jpg" alt="Vue du projet" class="projet-image">
              <p class="image-caption">Vue principale du projet</p>
            </div>
          </div>
        </div>

        <div class="projet-navigation">
          <router-link to="/projets" class="nav-button">← Retour aux projets</router-link>
        </div>
      </section>
    </main>


    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Email: Oumaimaelbouhamedi@gmail.com</p>
        </div>
        <div class="footer-section">
          <h4>Navigation</h4>
          <nav>
            <router-link to="/">Accueil</router-link>
            <router-link to="/projets">Projets</router-link>
            <router-link to="/contact">Contact</router-link>
          </nav>
        </div>
        <div class="footer-section">
          <h4>Suivez-moi</h4>
          <div class="social-links">
            <a href="#" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Oumaima El Bouhamdi. Tous droits réservés.</p>
      </div>
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
  color: #D4A5A5;
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
  color: #E6BBB3;
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
  background-color: #D4A5A5;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #E6BBB3;
}

/* Navigation styles */

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
.site-footer {
  background-color: rgba(255, 245, 238, 0.95);
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
  border-top: 1px solid #e5e5e5;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h4 {
  color: #D4A5A5;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  color: #666;
  margin-bottom: 0.5rem;
}

.footer-section nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-section nav a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section nav a:hover {
  color: #D4A5A5;
}

.social-links {
  display: flex;
  flex-direction: column;
}

.social-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #D4A5A5;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
}

.footer-bottom p {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 2rem 1rem 1rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
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