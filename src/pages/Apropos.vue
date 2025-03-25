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
            <h4>VOYAGE</h4>
          </li>
          <li>
            <h4>Photographie</h4>
          </li>
          <li>
            <h4>Vidéographie</h4>
          </li>
          <li>
            <h4>Design graphique</h4>
          </li>
        </ul>
      </div>
    </section>
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
  color: #2c3e50;
  text-align: center;
}

h3 {
  font-size: 2rem;
  margin: 3rem 0 1.5rem;
  color: #2c3e50;
}

h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.about-content {
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 8px;
  background-color: #f5f5f5;
  background-image: linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5),
    linear-gradient(45deg, #e5e5e5 25%, transparent 25%, transparent 75%, #e5e5e5 75%, #e5e5e5);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  flex-shrink: 0;
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