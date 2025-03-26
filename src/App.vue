<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation />
  <router-view></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Styles responsifs globaux */
@media (max-width: 1200px) {
  html {
    font-size: 15px;
  }
}

@media (max-width: 992px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 13px;
  }
}

@media (max-width: 576px) {
  html {
    font-size: 12px;
  }
}

/* Styles pour les conteneurs */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Styles pour les sections */
section {
  padding: 4rem 0;
}

@media (max-width: 768px) {
  section {
    padding: 3rem 0;
  }
}

@media (max-width: 576px) {
  section {
    padding: 2rem 0;
  }
}
</style>
