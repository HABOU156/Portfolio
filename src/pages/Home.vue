<template>
  <main>
    <section id="accueil" class="hero">
      <div class="hero-content">
        <img src="/images/portfolio-hero.jpg" alt="PORTFOLIO" class="hero-image">
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="formData.nom" placeholder="Nom" required>
        <input type="email" v-model="formData.email" placeholder="Email" required>
        <textarea v-model="formData.message" placeholder="Message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>

    <footer>
      <p>&copy; {{ currentYear }} Mon Portfolio. Tous droits réservés.</p>
    </footer>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  nom: '',
  email: '',
  message: ''
})

const currentYear = computed(() => new Date().getFullYear())

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', formData.value)
}
</script>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero {
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
}

.hero-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#contact {
  padding: 4rem 2rem;
  background-color: #f5f5f5;
}

#contact h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

button {
  padding: 1rem 2rem;
  background-color: #D4A5A5;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}

button:hover {
  background-color: #E6BBB3;
}

footer {
  margin-top: auto;
  padding: 2rem;
  text-align: center;
  background-color: #D4A5A5;
  color: white;
}

/* Media Queries */
@media (max-width: 1200px) {
  .hero {
    height: 70vh;
  }
}

@media (max-width: 992px) {
  .hero {
    height: 65vh;
  }
  
  #contact {
    padding: 3rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 60vh;
  }

  #contact {
    padding: 2rem 1rem;
  }
  
  #contact h2 {
    font-size: 1.75rem;
  }
  
  input, textarea {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .hero {
    height: 50vh;
  }
  
  #contact h2 {
    font-size: 1.5rem;
  }
  
  form {
    padding: 0 1rem;
  }
  
  button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  
  footer {
    padding: 1.5rem;
    font-size: 0.9rem;
  }
}
</style> 