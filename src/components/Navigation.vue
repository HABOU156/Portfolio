<template>
  <header>
    <nav>
      <div class="logo">Portfolio</div>
      <button class="menu-toggle" @click="toggleMenu" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul :class="{ 'active': isMenuOpen }">
        <li><router-link to="/#accueil" @click="closeMenu">Accueil</router-link></li>
        <li><router-link to="/apropos" @click="closeMenu">À propos</router-link></li>
        <li><router-link to="/projets" @click="closeMenu">Projets</router-link></li>
        <li><router-link to="/#contact" @click="closeMenu">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
header {
  width: 100%;
  background-color: rgba(255, 245, 238, 0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
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
  color: #D4A5A5;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: #D4A5A5;
  border-radius: 3px;
  transition: all 0.3s ease;
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
  color: #E6BBB3;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 1rem;
}

nav a:hover {
  color: #D4A5A5;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  ul {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: rgba(255, 245, 238, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }

  ul.active {
    right: 0;
  }

  nav {
    padding: 1rem;
  }

  .logo {
    font-size: 1.25rem;
  }

  nav a {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  ul {
    width: 100%;
    max-width: none;
  }

  .logo {
    font-size: 1.1rem;
  }

  nav a {
    font-size: 1rem;
  }
}
</style> 