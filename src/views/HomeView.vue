<template>
  <div class="row">
    <div class="col-12">
      <ol class="items-list">
        <li>
          <router-link to="/computed-properties">Computed Properties</router-link>
        </li>
        <li>
          <router-link to="/reactivity">Reactivity</router-link>
        </li>
        <li>
          <router-link to="/lchooks">Life Cycle Hooks</router-link>
        </li>
        <li>
          <router-link to="/watchers">Watchers</router-link>
        </li>
        <li>
          <router-link to="/template-refs">Template Refs</router-link>
        </li>
        <li>
          <router-link to="/components">Components</router-link>
        </li>
        <li>
          <router-link to="/composables">Composables</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>
