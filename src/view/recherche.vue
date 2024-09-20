<script setup>
import { ref, onMounted } from 'vue';
import { auth } from '@/firebase'; // Importe l'authentification Firebase
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router'; // Pour la redirection après la déconnexion

const searchQuery = ref('');
const artworks = ref([]);
const router = useRouter(); // Pour rediriger après la déconnexion

// Fonction pour gérer la déconnexion
const handleLogout = async () => {
  try {
    await signOut(auth);
    console.log('Utilisateur déconnecté');
    
    // Redirige vers la page de connexion ou l'accueil
    router.push('/connexion');
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
  }
};

// Récupérer les œuvres
const fetchArtworks = async (query = '') => {
  const baseUrl = 'https://api.artic.edu/api/v1/artworks';
  const url = query 
    ? `${baseUrl}/search?q=${query}&fields=id,title,image_id,artist_title`
    : `${baseUrl}?fields=id,title,image_id,artist_title`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    artworks.value = data.data.map(artwork => ({
      ...artwork,
      image_url: artwork.image_id 
        ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
        : '/path/to/default-image.jpg' // Remplacez par le chemin de votre image par défaut
    }));
  } catch (error) {
    console.error('Error fetching artworks:', error);
  }
};

const handleSearch = () => {
  fetchArtworks(searchQuery.value);
};

onMounted(() => {
  fetchArtworks();
});
</script>


<template>
  <div class="signup-page">
    <header class="main-header">
      <div class="logo-box">
        <span class="logo-text">ART INSTITUTE CHICAGO</span>
      </div>
      <nav class="header-menu">
        <router-link to="/">
          <button class="menu-item">Accueil</button>
        </router-link>
        <router-link to="/recherche">
          <button class="menu-item">Galerie</button>
        </router-link>
        <router-link to="#">
          <button class="menu-item">A propos</button>
        </router-link>
      </nav>
      <router-link to="/connexion">
        <button class="deconnexion-button" @click="handleLogout">Déconnexion</button>
        </router-link>
    </header>
    <div class="search-bar">
      <input 
        v-model="searchQuery" 
        @keyup.enter="handleSearch" 
        placeholder="Rechercher une œuvre..." 
      />
      <button @click="handleSearch">Rechercher</button>
    </div>
    <div class="artwork-grid">
      <div v-for="artwork in artworks" :key="artwork.id" class="artwork-item">
        <img :src="artwork.image_url" :alt="artwork.title" class="artwork-image" />
        <h3 class="artwork-title">{{ artwork.title }}</h3>
        <p class="artwork-artist">{{ artwork.artist_title || '--' }}</p>
      </div>
    </div>
  </div>
  <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../../public/assets/img/image1.png" alt="logo" class="footer-logo-img" />
          <span class="footer-text">ART INSTITVTE CHICAGO</span>
        </div>
        <div class="social-icons">
          <img src="../../public/assets/img/youtube.png" alt="Facebook" class="social-icon" />
          <img src="../../public/assets/img/twitter.png" alt="Twitter" class="social-icon" />
          <img src="../../public//assets/img/instagram.png" alt="Instagram" class="social-icon" />
          <img src="../../public//assets/img/instagram.png" alt="Instagram" class="social-icon" />
        </div>
      </div>
    </footer>
</template>

<style src="../public/assets/css/style.css"></style>