// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'chapters',
        name: 'ListChapters',
        component: () => import('@/views/ListChapters.vue')
      },
      {
        path: 'books',
        name: 'ListBooks',
        component: () => import('@/views/ListBooks.vue')
      },
      {
        path: 'chapters/title/:title',
        name: 'bookChapters',
        component: () => import('@/views/ListBookChapters.vue'),
        props: true,
      }
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
