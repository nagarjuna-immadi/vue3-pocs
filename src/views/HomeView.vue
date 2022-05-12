<template>
  <div class="row">
    <div class="col-12">
      <ol>
        <li>
          Life Cycle Hooks
          <ol>
            <li>
              <router-link to="/lchooks-options-api">Options API</router-link>
            </li>
            <li>
              <router-link to="/lchooks-composition-api">Composition API</router-link>
            </li>
          </ol>
        </li>
        <li>
          <router-link to="/watchers">Watchers</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import 'bootstrap/js/dist/collapse';

export default {
  name: 'HomeView',
  components: {},
};
</script>
