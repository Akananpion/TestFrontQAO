<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { useRouter } from 'vue-router';

const router = useRouter();

const nom = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');

const handleSignup = async () => {
  if (password.value !== confirmPassword.value) {
    error.value = "Les mots de passe ne correspondent pas.";
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("Utilisateur inscrit :", userCredential.user);
    // Rediriger vers la page de connexion ou le tableau de bord
    router.push('/connexion');
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
      <router-link to="/connexion">
          <button class="connexion-button">Connexion</button>
        </router-link>
    </header>

    <!-- Contenu principal entre header et footer -->
  <!-- Contenu principal entre header et footer -->
<!-- Contenu principal entre header et footer -->
  <main class="content">
    <!-- Groupe 64 qui contient le Rectangle 112 -->
    <div class="group-64">
      <div class="rectangle-112">
        <img src="../../public/assets/img/register.PNG" alt="Description de l'image" class="rectangle-image">
      </div>
    </div>
    <!--coté droit avec input-->
    <div class="group-63">
      <div class="logo-boxe">
          <span class="logo-texte">ART INSTITUTE CHICAGO</span>
      </div>
      <!-- Texte Créer un compte -->
      <div class="create-account">
          <span>Créer un compte</span>
      </div>
  <!-- Inputs Section -->
    <div class="inputs-container">
        <div class="input-group">
            <label for="nom">Nom</label>
            <div class="input-wrapper">
              <i class="fas fa-user icon"></i>
              <input type="text" id="nom" v-model="nom" placeholder="Entrer votre nom complet">
            </div>
        </div>
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
              <input type="password" id="password" v-model="password" placeholder="Entrer le mot de passe">
            </div>
        </div>
        <div class="input-group">
            <label for="confirm-password">Confirmer mot de passe</label>
            <div class="input-wrapper">
              <i class="fas fa-lock icon"></i>
              <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="Confirmer le mot de passe">
            </div>
        </div>
    </div>

    <p v-if="error" class="error-message">{{ error }}</p>

    <!-- Button Inscription -->
    <button class="btn-primary" @click="handleSignup">Inscription</button>

    <!-- Group 59 (OR section) -->
    <div class="group-59">
        <div class="line"></div>
        <span class="or-text">or</span>
        <div class="line"></div>
    </div>

    <!-- Group 60 (Already have an account?) -->
    <div class="group-60">
        <div class="already-account">
            Vous avez déjà un compte!
            <!-- Bouton Connexion -->
            <router-link to="/connexion">
               <button class="btn-connexion">Connexion</button>
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
