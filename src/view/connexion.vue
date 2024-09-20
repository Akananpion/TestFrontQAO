<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase'; // Importe l'authentification Firebase
import { useRouter } from 'vue-router'; // Pour la redirection après la connexion

const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref('');

// Fonction pour gérer la connexion
const handleLogin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Utilisateur connecté :", userCredential.user);

    // Redirige l'utilisateur vers la page d'accueil ou le tableau de bord
    router.push('/recherche');
  } catch (e) {
    error.value = e.message;
  }
};
</script>
<template>
  <div class="signup-page">
    <header class="main-header">
      <div class="logo-box">
        <span class="logo-text">ART INSTITUTE CHICAGO</span>
      </div>
      <router-link to="/inscription">
          <button class="connexion-button">Inscription</button>
        </router-link>
    </header>

  <main class="content">
    <!-- Groupe 64 qui contient le Rectangle 112 -->
    <div class="group-64">
      <div class="rectangle-112">
        <img src="../../public/assets/img/login.PNG" alt="Description de l'image" class="rectangle-image">
      </div>
    </div>
    <!--coté droit avec input-->
    <div class="group-63">
      <div class="logo-boxe">
          <span class="logo-texte">ART INSTITUTE CHICAGO</span>
      </div>
      <!-- Texte Créer un compte -->
      <div class="create-account">
          <span>Salut! Bienvenu</span>
      </div>
  <!-- Inputs Section -->
    <div class="inputs-container">
        <div class="input-group">
            <label for="email">Email</label>
            <div class="input-wrapper">
              <i class="fas fa-envelope icon"></i>
              <input type="email" id="email" v-model="email" placeholder="Entre votre adresse email">
            </div>
        </div>
        <div class="input-group">
            <label for="password">Mot de passe</label>
            <div class="input-wrapper">
              <i class="fas fa-lock icon"></i>
              <input type="password" id="password" v-model="password" placeholder="Entre le mot de passe">
            </div>
        </div>
    </div>

    <!-- Se souvenir de moi -->
    <div class="remember-me-container">
          <label class="remember-me-label">
            <input type="checkbox" id="remember-me" class="remember-me-checkbox">
            Se souvenir de moi
          </label>
          <router-link to="#">
               <button class="btn-renitialiser">renitialiser le mot de passe</button>
          </router-link>
    </div>
    
    <!-- Affichage des erreurs -->
    <div v-if="error" class="error-message">{{ error }}</div>

    <!-- Button Inscription -->
    <button class="btn-primary" @click="handleLogin">Connexion</button>

    <!-- Group 59 (OR section) -->
    <div class="group-59">
        <div class="line"></div>
        <span class="or-text">or</span>
        <div class="line"></div>
    </div>

    <!-- Group 60 (Already have an account?) -->
    <div class="group-60">
        <div class="already-account">
            Avez-vous déjà un compte?
            <!-- Bouton Connexion -->
            <router-link to="/inscription">
               <button class="btn-connexion">Créer un compte</button>
            </router-link>
        </div>
    </div>
</div>

  </main>

    <!-- Footer ajouté -->
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
  </div>
</template>



<style src="../public/assets/css/style.css"></style>
