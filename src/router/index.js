import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: () => import('../pages/Apropos.vue')
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../pages/Projets.vue')
    },
    {
      path: '/projets/metropole',
      name: 'metropole',
      component: () => import('../pages/projets/Metropole.vue')
    },
    {
      path: '/projets/impact-2024',
      name: 'impact2024',
      component: () => import('../pages/projets/ConcoursImpact.vue')
    },
    {
      path: '/projets/logements-beziers',
      name: 'logementsBeziers',
      component: () => import('../pages/projets/LogementsBeziers.vue')
    },
    {
      path: '/projets/base-nautique',
      name: 'baseNautique',
      component: () => import('../pages/projets/BaseNautique.vue')
    },
    {
      path: '/projets/habitat-intermediaire',
      name: 'habitatIntermediaire',
      component: () => import('../pages/projets/HabitatIntermediaire.vue')
    },
    {
      path: '/projets/one-shot',
      name: 'oneShot',
      component: () => import('../pages/projets/OneShot.vue')
    },
    {
      path: '/projets/habitat-individuel',
      name: 'habitatIndividuel',
      component: () => import('../pages/projets/HabitatIndividuel.vue')
    }
  ]
})

export default router 