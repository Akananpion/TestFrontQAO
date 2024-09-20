import { createRouter, createWebHistory } from 'vue-router'
import Inscription from './view/inscription.vue'
import Connexion from './view/connexion.vue'
import Acceuil from './view/acceuil.vue'
import Recherche from './view/recherche.vue'
import Galerie from './view/recherche.vue'
import { auth } from '@/firebase'; // Importe Firebase auth

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: Recherche,
    meta: { requiresAuth: true }  // Cette route nécessite une authentification
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galerie
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Vérification d'authentification avant chaque navigation
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser; // Vérifie si l'utilisateur est connecté via Firebase

  if (requiresAuth && !isAuthenticated) {
    // Si la route nécessite une authentification et que l'utilisateur n'est pas connecté
    next('/connexion'); // Redirige vers la page de connexion
  } else {
    next(); // Continue la navigation
  }
});

export default router;
