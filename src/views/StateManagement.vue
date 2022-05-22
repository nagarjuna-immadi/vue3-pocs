<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>State Management</h4>
      <ul class="notes-points">
        <li>Technically, every Vue component instance already "manages" its own reactive state.</li>
        <li>
          A component is a self contained unit with it's own <b>state</b>, <b>view</b> and
          <b>actions</b>
        </li>
        <li>
          The simplicity starts to break down when we have multiple components that share a common
          state
        </li>
        <li>
          A simpler and more straightforward solution is to extract the shared state out of the
          components, and manage it in a global singleton.
          <CodeBlock :code="codeStr1" />
        </li>
        <li>
          Using Composable also, we can share global state.
          <CodeBlock :code="codeStr2" /> <br />
          <div>
            <b>Simple store example with composable</b><br /><br />
            Global Count: {{ globalCount }} <br />
            <label for="global">
              <input type="number" id="global" v-model="globalCount" />
            </label>
          </div>
          <div class="mt-3">
            Local Count: {{ localCount }} <br />
            <label for="local">
              <input type="number" id="local" v-model="localCount" />
            </label>
          </div>

          <div class="mt-4">
            Child component <br />
            <ComposableStoreChild />
          </div>
          <div class="mt-4">
            Accessing same store in another lazy load page: <br />
            <router-link to="/simple-store">Simple Store Page</router-link>
          </div>
        </li>
        <li>
          From the above example we can understand the below points
          <ul>
            <li>
              We can use composables for both global singleton or individual instance per component
              or mix of both. Refer simple-store/composable-store.js file.
            </li>
            <li>
              The global singleton state will be preserved even for the lazy loaded pages. We can
              observe that by browsing to above 'Simple Store Page'
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import ComposableStoreChild from '../components/ComposableStoreChild.vue';
import useCount from '../simple-store/composable-store';

const { globalCount, localCount } = useCount();

const codeStr2 = `import { ref } from 'vue'

// global state, created in module scope
const globalCount = ref(1)

export function useCount() {
  // local state, created per-component
  const localCount = ref(1)

  return {
    globalCount,
    localCount
  }
}`;
const codeStr1 = `// store.js
import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

// Template
<template>
  <button @click="store.increment()">{{ store.count }}</button>
</template>`;
</script>
