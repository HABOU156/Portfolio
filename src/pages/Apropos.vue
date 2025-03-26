<template>
  <main>
    <section id="apropos" class="apropos-page">
      <h2>À propos de moi</h2>
      <div class="about-content">
        <div class="profile-image"></div>
        <div class="about-text">
          <p>ÉTUDIANTE EN MASTER D'ARCHITECTURE À L'ÉCOLE NATIONALE SUPÉRIEURE DE L'ARCHITECTURE DE MONTPELLIER, JE SUIS PASSIONNÉE PAR LA
            CONCEPTION D'ESPACES QUI ALLIENT INNOVATION, ESTHÉTIQUE, ET DURABILITÉ. MON PARCOURS ACADÉMIQUE ET MES PROJETS PERSONNELS M'ONT PERMIS
            DE DÉVELOPPER UNE SENSIBILITÉ PARTICULIÈRE POUR L'ARCHITECTURE BIOCLIMATIQUE ET L'URBANISME STRATÉGIQUE.</p>
          <p>CONVAINCUE QUE L'ARCHITECTURE EST UN VECTEUR DE TRANSFORMATION SOCIALE ET ENVIRONNEMENTALE, JE M'INTÉRESSE AUX PROJETS QUI EXPLORENT
            DES SOLUTIONS DURABLES ET RESPECTUEUSES DE L'ENVIRONNEMENT.</p>
          <p>MON OBJECTIF EST D'INTÉGRER UNE DÉMARCHE ARCHITECTURALE QUI DIALOGUE AVEC SON ENVIRONNEMENT TOUT EN RÉPONDANT AUX ASPIRATIONS DES
            COMMUNAUTÉS. MON PORTFOLIO ILLUSTRE CET ENGAGEMENT À TRAVERS DES PROJETS VARIÉS MÊLANT ANALYSE, CONCEPTION, ET INNOVATION.</p>
        </div>
      </div>

      <div class="education-section">
        <h3>Éducation</h3>
        <ul class="education-list">
          <li>
            <h4>MASTER en cours 2024 - 2025</h4>
            <p>ENSA MONTPELLIER</p>
          </li>
          <li>
            <h4>LICENCE EN ARCHITECTURE 2021 - JUIN 2024</h4>
            <p>ENSA MONTPELLIER</p>
          </li>
        </ul>
      </div>

      <div class="experience-section">
        <h3>Expérience professionelle</h3>
        <ul class="experience-list">
          <li>
            <h4>STAGE - MAIRIE DE MONTPELLIER 2024</h4>
            <p>Service Architecture Pôle PISEE, avec Mme Christine Bridon, Cheffe de Service</p>
            <p>Stage d'un mois</p>
          </li>
          <li>
            <h4>CONCOURS D'ARCHITECTURE - IMPACT 2024</h4>
            <p>"Architecture sobre et engagée" - Montpellier</p>
          </li>
          <li>
            <h4>MÉDIATRICE - FESTIVAL DES ARCHITECTURES VIVES 2023</h4>
            <p>NBJ Architectes - Montpellier</p>
          </li>
          <li>
            <h4>STAGE CHANTIER - MÉDITERRANÉE CONSTRUCTIONS 2023</h4>
            <p>Stage d'observation de deux semaines, Logement en R+7 - Montpellier</p>
          </li>
          <li>
            <h4>ANIMATION D'ATELIER KAPLA 2022-2023</h4>
            <p>Association MAOM, Maison de l'Architecture Occitanie Méditerranée - Montpellier</p>
          </li>
          <li>
            <h4>TAILLE DE PIERRE 2022</h4>
            <p>Participation avec l'association PicPatrimoine</p>
            <p>Sessions avec Mr Thomas Robardet, Architecte diplômé de l'École de Chaillot</p>
          </li>
          <li>
            <h4>STAGE CHANTIER - CABINET CONCEPT4ARCHITECTES 2021</h4>
            <p>Stage d'observation en chantier, Construction d'une villa - Rabat, Maroc</p>
            <p>Durée : 1 mois avec Mr Kadiri Mohammed et Mr Rih Hicham</p>
          </li>
        </ul>
      </div>

      <div class="interet-section">
        <h3>Centres d'intêret</h3>
        <ul class="interet-list">
          <li>
            <p>VOYAGE</p>
          </li>
          <li>
            <p>Photographie</p>
          </li>
          <li>
            <p>Vidéographie</p>
          </li>
          <li>
            <p>Design graphique</p>
          </li>
        </ul>
      </div>
    </section>

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
  </main>
</template>

<style scoped>
.apropos-page {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #D4A5A5;
  text-align: center;
}

h3 {
  font-size: 2rem;
  margin: 3rem 0 1.5rem;
  color: #E6BBB3;
}

h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #E6BBB3;
}

.about-content {
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
}

.profile-image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.about-text {
  flex: 1;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #34495e;
}

.education-list,
.experience-list,
.interet-list {
  list-style: none;
  padding: 0;
}

.education-list li,
.experience-list li {
  margin-bottom: 2rem;
}

.interet-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.interet-list li {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

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
  .apropos-page {
    padding: 2rem 1rem;
  }

  .about-content {
    flex-direction: column;
    align-items: center;
  }

  .profile-image {
    width: 250px;
    height: 250px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1.8rem;
  }
}
</style> 