import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Formacao from '@/views/Formacao.vue'
import Aulas from '@/views/Aulas.vue'
import Projetos from '@/views/Projetos.vue'
import AtividadesAdmin from '@/views/AtividadesAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/formacao',
      name: 'Formacao',
      component: Formacao
    },
    {
      path: '/aulas',
      name: 'Aulas',
      component: Aulas
    },
    {
      path: '/projetos',
      name: 'Projetos',
      component: Projetos
    },
    {
      path: '/atividades-admin',
      name: 'AtividadesAdmin',
      component: AtividadesAdmin
    }
  ]
})

export default router
