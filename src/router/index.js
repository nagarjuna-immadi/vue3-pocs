import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/msw',
    name: 'msw',
    component: () => import('../views/MockServiceWorkerView.vue'),
  },
  {
    path: '/lchooks-options-api',
    name: 'lchooks-options-api',
    component: () => import('../views/LCHooksOptionsApi.vue'),
  },
  {
    path: '/lchooks-composition-api',
    name: 'lchooks-composition-api',
    component: () => import('../views/LCHooksCompositionApi.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
