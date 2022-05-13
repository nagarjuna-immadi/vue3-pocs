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
    path: '/lchooks',
    name: 'lchooks',
    component: () => import('../views/LCHooksView.vue'),
  },
  {
    path: '/lchooks/options-api',
    name: 'lchooks-options-api',
    component: () => import('../views/LCHooksOptionsApi.vue'),
  },
  {
    path: '/lchooks/composition-api',
    name: 'lchooks-composition-api',
    component: () => import('../views/LCHooksCompositionApi.vue'),
  },
  {
    path: '/watchers',
    name: 'watchers',
    component: () => import('../views/WatchersHomeView.vue'),
  },
  {
    path: '/watchers/options-api',
    name: 'watchers-options-api',
    component: () => import('../views/WatchersOptionsApi.vue'),
  },
  {
    path: '/watchers/composition-api',
    name: 'watchers-composition-api',
    component: () => import('../views/WatchersCompositionApi.vue'),
  },
  {
    path: '/template-refs',
    name: 'template-refs',
    component: () => import('../views/TemplateRefs.vue'),
  },
  {
    path: '/template-refs/options-api',
    name: 'template-refs-options-api',
    component: () => import('../views/TemplateRefsOptionsApi.vue'),
  },
  {
    path: '/template-refs/composition-api',
    name: 'template-refs-composition-api',
    component: () => import('../views/TemplateRefsCompositionApi.vue'),
  },
  {
    path: '/ref-vs-reactive',
    name: 'ref-vs-reactive',
    component: () => import('../views/RefVsReactive.vue'),
  },
  {
    path: '/accordion',
    name: 'accordion',
    component: () => import('../views/AccordionView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
