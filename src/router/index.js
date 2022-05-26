/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

function isLoggedIn(to, from) {
  console.log('isLoggedIn guard', to, from);
  return true;
}
function isAdmin(to, from) {
  console.log('isAdmin guard', to, from);
  return true;
}

const LCHooksView = () => import('../views/LCHooksView.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from) => {
      console.log('beforeEnter', to, from);
      return true;
    },
  },
  {
    // will match everything and put it under `$route.params.pathMatch`
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
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
    component: LCHooksView,
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
    component: () => import('../views/TestingView.vue'),
  },
  {
    path: '/vue-test-utils',
    component: () => import('../views/VueTestUtils.vue'),
  },
  {
    path: '/vue-testing-library',
    component: () => import('../views/VueTestingLibrary.vue'),
  },
  {
    path: '/jest',
    component: () => import('../views/JestView.vue'),
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
  {
    path: '/users/:id',
    component: () => import('../views/UserDetailView.vue'),
    beforeEnter: [isLoggedIn, isAdmin],
    children: [
      {
        path: 'profile',
        component: () => import('../views/UserProfile.vue'),
      },
      {
        path: 'posts',
        component: () => import('../views/UserPosts.vue'),
      },
    ],
  },
];

/* eslint-disable no-else-return */
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from) => {
  console.log('router global beforeEach to', to);
  console.log('router global beforeEach from', from);
  // return { name: 'Login' }; // route location can be returned
  // return '/login'; // route path can be returned
  return true; // return false to cancel navigation
});

router.beforeResolve(async (to, from) => {
  console.log('router global beforeResolve to', to);
  console.log('router global beforeResolve from', from);
});

router.afterEach((to, from, failure) => {
  console.log('router global afterEach');
  // if (!failure) sendToAnalytics(to.fullPath);
});

export default router;
