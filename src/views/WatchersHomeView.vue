<template>
  <div class="row">
    <div class="col-12">
      <h4>Watchers</h4>
      <ul>
        <li>
          Computed Properties, compute a value based on reactive state changes and respond. But,
          don't do any update operations in computed properties which causes side effects
        </li>
        <li>
          computed properties are just like getters to read a value. No side effect causing
          operations like DOM update, Async operations etc...
        </li>
        <li>Watchers are like setters to update something on reactive state value changes</li>
        <li>
          Watchers are good place to handle side effect operations. For example, send search API
          call to backend on user search
        </li>
        <li>
          Through watchers we can access both old and updated value. The same is not possible
          through update life cycle hook or any other
        </li>
      </ul>
      <ol>
        <li>
          <router-link to="/watchers/options-api">Options API</router-link>
        </li>
        <li>
          <router-link to="/watchers/composition-api">Composition API</router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchersHomeView',
};
</script>
