<template>
  <header>
    <nav>
      <div class="logo">Portfolio</div>
      <ul>
        <li><router-link to="/#accueil">Accueil</router-link></li>
        <li><router-link to="/apropos">À propos</router-link></li>
        <li><router-link to="/projets">Projets</router-link></li>
        <li><router-link to="/#contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Navigation component logic will go here
</script>

<style scoped>
header {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b883;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    padding: 1rem;
  }
  
  ul {
    margin-top: 1rem;
    gap: 1rem;
    flex-direction: column;
    text-align: center;
  }
}
</style> 