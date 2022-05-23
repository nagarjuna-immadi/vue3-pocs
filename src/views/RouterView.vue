<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Router</h4>
      <ul class="notes-points">
        <li>
          We can implement simple routing using Dynamic Components concept update the current
          component state by listening to browser hashchange events or using the History API.
          <CodeBlock :code="codeStr1" />
        </li>
        <li>
          By calling app.use(router), we get access to it as <b>this.$router</b> as well as the
          current route as <b>this.$route</b> inside of any component
        </li>
        <li>
          <b>Dynamic route:</b> Route with path params
          <CodeBlock :code="codeStr2" />
          Go to <router-link to="/users/1?first=nag&last=immadi#details">User 1</router-link>
        </li>
        <li>
          One thing to note when using routes with params is that when the user navigates from
          /users/1 to /users/2, the <b>component instance will be reused</b>. Since both routes
          render the same component, this is more efficient than destroying the old instance and
          then creating a new one. However, this also means that the
          <b>lifecycle hooks of the component will not be called.</b>
        </li>
        <li>
          To react to params changes in the same component, you can simply watch anything on the
          $route object, in this scenario, the $route.params OR we can use 'beforeRouteUpdate'
          in-component router hook.
          <CodeBlock :code="codeStr3" />
        </li>
        <li>
          404 - Not Found Route
          <CodeBlock :code="codeStr4"></CodeBlock>
          It will match everything and put it under $route.params.pathMatch
        </li>
        <li><b>Sensitive and strict route options</b></li>
        <li>
          By default, all routes are case-insensitive and match routes with or without a trailing
          slash. This behavior can be configured with the strict and sensitive options, they can be
          set both at a router and route level
          <CodeBlock :code="codeStr5"></CodeBlock>
        </li>
        <li><b>Optional parameters</b></li>
        <li>
          We can also mark a parameter as optional by using the ? modifier
          <CodeBlock :code="codeStr6"></CodeBlock>
          Note that * technically also marks a parameter as optional but ? parameters cannot be
          repeated.
        </li>
        <li><b>Nested Routes</b></li>
        <li>
          Some application's UIs are composed of components that are nested multiple levels deep. In
          this case, it is very common that the segments of a URL corresponds to a certain structure
          of nested components
        </li>
        <li>Check <router-link to="/users/1">User 1</router-link> for nested routes example</li>
        <li><b>Programmatic Navigation</b></li>
        <li>
          To navigate to a different URL, use <b>router.push</b>. This method pushes a new entry
          into the history stack, so when the user clicks the browser back button they will be taken
          to the previous URL. <br />
          This is the method called internally when you click a router-link, so clicking
          <i>router-link :to="..."</i> is the equivalent of calling router.push(...).
        </li>
        <li>
          The argument can be a string path, or a location descriptor object.
          <CodeBlock :code="codeStr7"></CodeBlock>
          params are ignored if a path is provided, which is not the case for query
        </li>
        <li>
          router.push and all the other navigation methods return a Promise that allows us to wait
          till the navigation is finished and to know if it succeeded or failed.
        </li>
        <li>
          <b>router.replace(...)</b> acts like router.push(). The only difference is that it
          navigates without pushing a new history entry, it replaces the current entry.
        </li>
        <li>&lt;router-link :to="..." replace> is equivalent version for router.replace(...)</li>
        <li>
          It's also possible to directly add a property replace: true to the routeLocation that is
          passed to router.push. <br />
          Ex: router.push({ path: '/home', replace: true }) which is equivalent to router.replace({
          path: '/home' })
        </li>
        <li><b>router.go(n)</b> is similar to window.history.go(n)</li>
        <li>
          positive value move forward and negative value backward in the history
          <CodeBlock :code="codeStr8"></CodeBlock>
        </li>
        <li>router methods imitates the window.history API</li>
        <li>
          For easy use of navigation methods we can use <b>Named Routes.</b> Any route can have
          name.
          <CodeBlock :code="codeStr9"></CodeBlock>
          Instead of path, we can use name in the routing methods.
        </li>
        <li>
          Named Views
          <CodeBlock :code="codeStr10"></CodeBlock>
        </li>
        <li>
          Redirect
          <CodeBlock :code="codeStr11"></CodeBlock>
          Note that Navigation Guards are not applied on the route that redirects, only on its
          target.
        </li>
        <li>
          When writing a redirect, you can omit the component option because it is never directly
          reached so there is no component to render.
        </li>
        <li>
          Alias: An alias of / as /home means when the user visits /home, the URL remains /home, but
          it will be matched as if the user is visiting /.
          <CodeBlock :code="codeStr12"></CodeBlock>
        </li>
        <li><b>Passing Props to Route Components</b></li>
        <li>
          Using $route in your component creates a tight coupling with the route which limits the
          flexibility of the component as it can only be used on certain URLs.
          <CodeBlock :code="codeStr13"></CodeBlock>
          we can decouple this behavior with a props option,
          <CodeBlock :code="codeStr14"></CodeBlock>
          When props is set to true, the route.params will be set as the component props. <br />
          This allows you to use the component anywhere, which makes the component easier to reuse
          and test.
        </li>
        <li>
          For routes with named views, you have to define the props option for each named view
          <CodeBlock :code="codeStr15"></CodeBlock>
        </li>
        <li>
          When props is an object, this will be set as the component props as-is. Useful for when
          the props are static.
          <CodeBlock :code="codeStr16"></CodeBlock>
        </li>
        <li>
          You can create a function that returns props. This allows you to cast parameters into
          other types, combine static values with route-based values, etc..
          <CodeBlock :code="codeStr17"></CodeBlock>
        </li>
        <li><b>Different History modes</b></li>
        <li>
          hash history mode is created with createWebHashHistory(). It uses a hash character (#)
          before the actual URL that is internally passed. Because this section of the URL is never
          sent to the server, it doesn't require any special treatment on the server level. It does
          however have a bad impact in SEO. If that's a concern for you, use the HTML5 history mode.
        </li>
        <li>
          The <b>HTML5 mode</b> is created with createWebHistory() and is the recommended mode
          <ul>
            <li>The url looks normal with this mode. Ex: https://example.com/user/1</li>
            <li>
              Since our app is a single page client side app, without a proper server configuration,
              the users will get a 404 error if they access https://example.com/user/1 directly in
              their browser.
            </li>
            <li>
              To fix the issue, all you need to do is add a simple catch-all fallback route to your
              server. If the URL doesn't match any static assets, it should serve the same
              index.html page that your app lives in.
            </li>
            <li>
              Different server configurations are available at
              <a
                href="https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations"
                >here</a
              >
            </li>
          </ul>
        </li>
        <li>
          The <b>memory history mode</b> doesn't assume a browser environment and therefore doesn't
          interact with the URL nor automatically triggers the initial navigation. This makes it
          perfect for Node environment and SSR. It is created with createMemoryHistory() and
          requires you to push the initial navigation after calling app.use(router) <br />

          While it's not recommended, you can use this mode inside Browser applications but note
          there will be no history, meaning you won't be able to go back or forward.
        </li>
        <li><b>Navigation Guards</b></li>
        <li>
          <b>router.beforeEach() </b> guard is a global guard execute for every route.
          <CodeBlock :code="codeStr18"></CodeBlock>
          If nothing, undefined or true is returned, the navigation is validated, and the next
          navigation guard is called.
        </li>
        <li>
          All of the the things above work the same way with async functions and Promises:
          <CodeBlock :code="codeStr19"></CodeBlock>
        </li>
        <li>the optional third argument 'next' is removed.</li>
        <li>
          <b>router.beforeResolve</b> is similar to router.beforeEach because it triggers on every
          navigation, but resolve guards are called right before the navigation is confirmed, after
          all in-component guards and async route components are resolved.
          <CodeBlock :code="codeStr20"></CodeBlock>
        </li>
        <li>
          <b>router.afterEach</b> called after every navigation. It doesn't impact the routing.
          Useful to perform after page load operations like sending analytics.
          <CodeBlock :code="codeStr21"></CodeBlock>
        </li>
        <li><b>Per-Route Guard - beforeEnter</b></li>
        <li>
          We can define beforeEnter guards directly on a route's configuration object
          <CodeBlock :code="codeStr22"></CodeBlock>
          beforeEnter guards only trigger when entering the route, they don't trigger when the
          params, query or hash change e.g. going from /users/2 to /users/3 or going from
          /users/2#info to /users/2#projects. They are only triggered when navigating from a
          different route.
        </li>
        <li>
          We can pass array of functions also. This helps to re-use the guards.
          <CodeBlock :code="codeStr23"></CodeBlock>
        </li>
        <li>
          <b>In-Component Guards</b>
          <ul>
            <li>beforeRouteEnter</li>
            <li>beforeRouteUpdate</li>
            <li>beforeRouteLeave</li>
          </ul>
          <CodeBlock :code="codeStr24"></CodeBlock>
        </li>
        <li>
          The beforeRouteEnter guard does NOT have access to this. The component is not created yet.
        </li>
        <li>
          In composition API, use onBeforeRouteEnter, onBeforeRouteUpdate and onBeforeRouteLeave
        </li>
        <li>
          The Full Navigation Resolution Flow
          <ol>
            <li>Navigation triggered.</li>
            <li>Call beforeRouteLeave guards in deactivated components.</li>
            <li>Call global beforeEach guards.</li>
            <li>Call beforeRouteUpdate guards in reused components.</li>
            <li>Call beforeEnter in route configs.</li>
            <li>Resolve async route components.</li>
            <li>Call beforeRouteEnter in activated components.</li>
            <li>Call global beforeResolve guards.</li>
            <li>Navigation is confirmed.</li>
            <li>Call global afterEach hooks.</li>
            <li>DOM updates triggered.</li>
            <li>
              Call callbacks passed to next in beforeRouteEnter guards with instantiated instances.
            </li>
          </ol>
        </li>
        <li><b>Route Meta Fields</b></li>
        <li>
          Using meta propety we can attach some arbitrary data to route. meta property accepts an
          object and can be accessed on route and guards.
          <CodeBlock :code="codeStr25"></CodeBlock>
        </li>
        <li>
          In <b>Composition API</b> we have to use useRouter and useRoute to access router and
          route.
          <CodeBlock :code="codeStr26"></CodeBlock>
          we still have access to $router and $route in templates, so there is no need to return
          router or route inside of setup. <br />
        </li>
        <li>
          <b>scrollBehavior</b>
          <CodeBlock :code="codeStr27"></CodeBlock>
          scrollBehavior feature only works if the browser supports history.pushState <br />
          Returning the savedPosition will result in a native-like behavior when navigating with
          back/forward buttons
        </li>
        <li>
          To achieve Lazy Loading of Routes, we can use dynamic imports.
          <CodeBlock :code="codeStr28"></CodeBlock>
        </li>
        <li>
          router.push, router.replace etc... are async methods.
          <CodeBlock :code="codeStr29"></CodeBlock>
        </li>
        <li>router.addRoute to add route dynamically and router.removeRoute to remove route.
          <CodeBlock :code="codeStr30"></CodeBlock>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const codeStr30 = `router.addRoute({ path: '/about', name: 'about', component: About })
// remove the route
router.removeRoute('about')`;
const codeStr29 = `await router.push('/my-profile')
this.isMenuOpen = false`;
const codeStr28 = `const UserDetails = () => import('./views/UserDetails')

const router = createRouter({
  // ...
  routes: [{ path: '/users/:id', component: UserDetails }],
})`;
const codeStr27 = `scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 };
  }
},`;
const codeStr26 = `import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      })
    }
  },
}`;
const codeStr25 = `const routes = [
  {
    path: '/posts',
    component: PostsLayout,
    children: [
      {
        path: 'new',
        component: PostsNew,
        // only authenticated users can create posts
        meta: { requiresAuth: true }
      },
    ]
  }
]

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && !auth.isLoggedIn()) {
    return {
      path: '/login',
      query: { redirect: to.fullPath },
    }
  }
})`;
const codeStr24 = `beforeRouteEnter(to, from) {

},
beforeRouteUpdate(to, from) {

},
beforeRouteLeave(to, from) {

},`;
const codeStr23 = `{
  path: '/users/:id',
  component: () => import('../views/UserDetailView.vue'),
  beforeEnter: [isLoggedIn, isAdmin],
},

function isLoggedIn(to, from) {
  console.log('isLoggedIn guard', to, from);
  return true;
}

function isAdmin(to, from) {
  console.log('isAdmin guard', to, from);
  return true;
}`;
const codeStr22 = `{
  path: '/',
  name: 'home',
  component: HomeView,
  beforeEnter: (to, from) => {
    console.log('beforeEnter', to, from);
    return true;
  },
},`;
const codeStr21 = `router.afterEach((to, from, failure) => {
  console.log('router global afterEach');
  // if (!failure) sendToAnalytics(to.fullPath);
});`;
const codeStr20 = `router.beforeResolve(async (to, from) => {
  console.log('router global beforeResolve to', to);
  console.log('router global beforeResolve from', from);
});`;
const codeStr19 = `router.beforeEach(async (to, from) => {
  // canUserAccess() returns true or false
  const canAccess = await canUserAccess(to)
  if (!canAccess) return '/login'
})`;
const codeStr18 = `const router = createRouter({
  ...
});

router.beforeEach((to, from) => {
  console.log('router global beforeEach to', to);
  console.log('router global beforeEach from', from);
  // return { name: 'Login' }; // route location can be returned
  // return '/login'; // route path can be returned
  return true; // return false to cancel navigation
});`;
const codeStr17 = `const routes = [
  {
    path: '/search',
    component: SearchUser,
    props: route => ({ query: route.query.q })
  }
]`;
const codeStr16 = `const routes = [
  {
    path: '/promotion/from-newsletter',
    component: Promotion,
    props: { newsletterPopup: false }
  }
]`;
const codeStr15 = `const routes = [
  {
    path: '/user/:id',
    components: { default: User, sidebar: Sidebar },
    props: { default: true, sidebar: false }
  }
]`;
const codeStr14 = `const User = {
  // make sure to add a prop named exactly like the route param
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const routes = [{ path: '/user/:id', component: User, props: true }]`;
const codeStr13 = `const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const routes = [{ path: '/user/:id', component: User }]`;
const codeStr12 = `const routes = [{ path: '/', component: Homepage, alias: '/home' }]

const routes = [
  {
    path: '/users',
    component: UsersLayout,
    children: [
      // this will render the UserList for these 3 URLs
      // - /users
      // - /users/list
      // - /people
      { path: '', component: UserList, alias: ['/people', 'list'] },
    ],
  },
]`;
const codeStr11 = `const routes = [{ path: '/home', redirect: '/' }]

// Name based redirect
const routes = [{ path: '/home', redirect: { name: 'homepage' } }]

// Dynamic redirect
const routes = [
  {
    // /search/screens -> /search?q=screens
    path: '/search/:searchText',
    redirect: to => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { path: '/search', query: { q: to.params.searchText } }
    },
  },
  {
    path: '/search',
    // ...
  },
]`;
const codeStr10 = `<router-view class="view left-sidebar" name="LeftSidebar"></router-view>
<router-view class="view main-content"></router-view>
<router-view class="view right-sidebar" name="RightSidebar"></router-view>

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        // short for LeftSidebar: LeftSidebar
        // LeftSidebar component load in router-view with name LeftSidebar
        LeftSidebar, 
        // they match the name attribute on <router-view>
        RightSidebar,
      },
    },
  ],
})`;
const codeStr9 = `const routes = [
  {
    path: '/user/:username',
    name: 'user',
    component: User
  }
]

<router-link :to="{ name: 'user', params: { username: 'erina' }}">
  User
</router-link>

router.push({ name: 'user', params: { username: 'erina' } })`;
const codeStr8 = `// go forward by one record, the same as router.forward()
router.go(1)

// go back by one record, the same as router.back()
router.go(-1)

// go forward by 3 records
router.go(3)

// fails silently if there aren't that many records
router.go(-100)
router.go(100)`;
const codeStr7 = `// literal string path
router.push('/users/eduardo')

// object with path
router.push({ path: '/users/eduardo' })

// named route with params to let the router build the url
router.push({ name: 'user', params: { username: 'eduardo' } })

// with query, resulting in /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// with hash, resulting in /about#team
router.push({ path: '/about', hash: '#team' })`;
const codeStr6 = `const routes = [
  // will match /users and /users/posva
  { path: '/users/:userId?' },
  // will match /users and /users/42
  { path: '/users/:userId(\\d+)?' },
]`;
const codeStr5 = `const router = createRouter({
  history: createWebHistory(),
  routes: [
    // will match /users/posva but not:
    // - /users/posva/ because of strict: true
    // - /Users/posva because of sensitive: true
    { path: '/users/:id', sensitive: true },
    // will match /users, /Users, and /users/42 but not /users/ or /users/42/
    { path: '/users/:id?' },
  ],
  strict: true, // applies to all routes
})`;
const codeStr4 = `{
  // will match everything and put it under $route.params.pathMatch
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('../views/NotFound.vue'),
},`;
const codeStr3 = `created() {
  // watch params to track param changes
  this.$watch(
    () => this.$route.params,
    (toParams, fromParams) => {
      console.log('watch to params', toParams);
      console.log('watch from params', fromParams);
      // Fetch user details from server if required
    },
  );
},
beforeRouteUpdate(to, from) {
  // This in-component route guard execute for every route change
  // i.e param change
  console.log('To User Id: ', to.params.id);
  console.log('From User Id: ', from.params.id);
  // Fetch user details from server if required
},`;
const codeStr2 = `{ path: '/users/:id', component: User },

// In component
console.log(this.$route.params.id)
console.log(this.$route.query) // query params
console.log(this.$route.hash) // hash`;
const codeStr1 = `import { ref, computed } from 'vue'
import Home from './Home.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

<template>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>`;
</script>
