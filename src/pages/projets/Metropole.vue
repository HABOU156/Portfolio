<template>
  <div>

    <main class="projet-detail">
      <section class="projet-detail-page">
        <div class="projet-header">
          <h1>MÉTROPOLE MÉDITERRANÉENNE</h1>
          <p class="projet-subtitle">2024 - LUNGOMARE DI BAGNOLI</p>
        </div>

        <div class="projet-info">
          <div class="info-section">
            <h2>Description du projet</h2>
            <div class="projet-description">
              <p>LE PROJET SE SITUE À BAGNOLI, UNE ANCIENNE ZONE INDUSTRIELLE DE NAPLES QUI A CONNU UNE IMPORTANTE
                ACTIVITÉ SIDÉRURGIQUE JUSQU'À LA FIN DU XXE SIÈCLE. AUJOURD'HUI, CE SITE FAIT L'OBJET D'UN VASTE
                PROGRAMME DE RÉHABILITATION URBAINE.</p>
              <p>NOTRE PROPOSITION VISE À TRANSFORMER CETTE FRICHE INDUSTRIELLE EN UN NOUVEAU QUARTIER DYNAMIQUE,
                RESPECTUEUX DE L'ENVIRONNEMENT ET CONNECTÉ À LA MER MÉDITERRANÉE. LE PROJET S'ARTICULE AUTOUR DE
                PLUSIEURS AXES :</p>
              <ul>
                <li>CRÉATION D'UN FRONT DE MER VIVANT ET ACCESSIBLE (LUNGOMARE)</li>
                <li>DÉVELOPPEMENT D'ESPACES PUBLICS DE QUALITÉ</li>
                <li>INTÉGRATION DE LA NATURE ET DE LA BIODIVERSITÉ</li>
                <li>PRÉSERVATION ET VALORISATION DU PATRIMOINE INDUSTRIEL</li>
                <li>MIXITÉ DES FONCTIONS URBAINES (LOGEMENTS, COMMERCES, SERVICES, LOISIRS)</li>
              </ul>
            </div>
          </div>

          <div class="info-section">
            <h2>Détails</h2>
            <ul class="details-list">
              <li><strong>Type:</strong> Projet urbain</li>
              <li><strong>Année:</strong> 2024</li>
              <li><strong>Équipe:</strong> Travail réalisé en trinôme</li>
              <li><strong>Localisation:</strong> Bagnoli, Naples, Italie</li>
              <li><strong>Surface:</strong> 120 hectares</li>
              <li><strong>Programme:</strong> Réhabilitation urbaine et front de mer</li>
            </ul>
          </div>
        </div>

        <div class="projet-gallery">
          <h2>Galerie</h2>
          <div class="gallery-grid">
            <div class="gallery-item">
              <img src="../images/projet5-1.jpg" alt="Vue d'ensemble du projet" class="projet-image">
              <p class="image-caption">Vue d'ensemble du projet</p>
            </div>
            <div class="gallery-item">
              <img src="../images/projet5-2.jpg" alt="Détails architecturaux" class="projet-image">
              <p class="image-caption">Détails architecturaux</p>
            </div>
            <div class="gallery-item">
              <img src="../images/projet5-3.jpg" alt="Plans et coupes" class="projet-image">
              <p class="image-caption">Plans et coupes</p>
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