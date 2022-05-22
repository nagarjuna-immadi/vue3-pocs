import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/accordion',
    name: 'accordion',
    component: () => import('../views/AccordionView.vue'),
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
    path: '/reactivity',
    name: 'reactivity',
    component: () => import('../views/ReactivityView.vue'),
  },
  {
    path: '/reactivity/options-api',
    name: 'reactivity-options-api',
    component: () => import('../views/ReactivityOptionsApi.vue'),
  },
  {
    path: '/reactivity/composition-api',
    name: 'reactivity-composition-api',
    component: () => import('../views/ReactivityCompositionApi.vue'),
  },
  {
    path: '/computed-properties',
    name: 'computed-properties',
    component: () => import('../views/ComputedProperties.vue'),
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('../views/ComponentsView.vue'),
  },
  {
    path: '/components/props',
    name: 'component-props',
    component: () => import('../views/ComponentPropsParent.vue'),
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('../views/SlotsView.vue'),
  },
  {
    path: '/composables',
    name: 'composables',
    component: () => import('../views/ComposablesView.vue'),
  },
  {
    path: '/composables/example',
    name: 'composables-example',
    component: () => import('../views/ComposablesExample.vue'),
  },
  {
    path: '/custom-directives',
    name: 'custom-directives',
    component: () => import('../views/CustomDirectives.vue'),
  },
  {
    path: '/custom-directives/options-api',
    name: 'custom-directives-options-api',
    component: () => import('../views/CustomDirectivesOptionsApi.vue'),
  },
  {
    path: '/custom-directives/composition-api',
    name: 'custom-directives-composition-api',
    component: () => import('../views/CustomDirectivesCompositionApi.vue'),
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: () => import('../views/PluginsView.vue'),
  },
  {
    path: '/router',
    name: 'router',
    component: () => import('../views/RouterView.vue'),
  },
  {
    path: '/state-management',
    name: 'state-management',
    component: () => import('../views/StateManagement.vue'),
  },
  {
    path: '/simple-store',
    name: 'simple-store',
    component: () => import('../components/ComposableStoreChild.vue'),
  },
  {
    path: '/testing',
    name: 'testing',
    component: () => import('../views/TestingView.vue'),
  },
  {
    path: '/cli',
    name: 'cli',
    component: () => import('../views/CliTool.vue'),
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/VuexView.vue'),
  },
  {
    path: '/vuex/examples',
    name: 'vuex-examples',
    component: () => import('../views/VuexExamples.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
