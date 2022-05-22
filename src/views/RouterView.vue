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
      </ul>
    </div>
  </div>
</template>

<script setup>
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
