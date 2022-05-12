<template>
  <div class="row">
    <div class="col-12">
      <h4>Life Cycle Hooks Options API</h4>
      <div>
        <button type="button" class="btn btn-primary" @click="increment">
          Increment Count {{ count }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LCHooksOptionsApiVue',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
  beforeCreate() {
    // Called immediately when the instance is initialized
    // After props resolution, before processing other options such as data() or computed
    // setup() hook of Composition API is called before any Options API hooks, even beforeCreate().
    console.log('1. beforeCreate - Component instance not yet created');
  },
  created() {
    // reactive data, computed properties, methods, and watchers
    // However, the mounting phase has not been started,
    // and the $el property will not be available yet.
    console.log('2. created - Component instance created');
  },
  beforeMount() {
    // Called right before the component is to be mounted.
    // When this hook is called, the component has finished setting up its reactive state,
    // but no DOM nodes have been created yet.
    // This hook is not called during server-side rendering.
    console.log('3. beforeMount - Component not yet mounted');
  },
  mounted() {
    // A component is considered mounted after:
    //  - All of its synchronous child components have been mounted
    //  - does not include async components or components inside <Suspense> trees
    //  - Its own DOM tree has been created and inserted into the parent container.
    // Write DOM accessing code here
    // This hook is not called during server-side rendering.
    console.log('4. mounted - Component mounted');
  },
  beforeUpdate() {
    // click increment count button to see beforeUpdate in action
    // This hook can be used to access the DOM state before Vue updates the DOM.
    // It is also safe to modify component state inside this hook.
    // This hook is not called during server-side rendering.
    console.log('5. beforeUpdate - Component beforeUpdate');
  },
  updated() {
    // click increment count button to see updated in action
    // Called after the component has updated its DOM tree due to a reactive state change.
    // A parent component's updated hook is called after that of its child components.
    // updated hook doesn't provide any information about the changes, use watchers
    // if we want to compare old and new values in updated hook,
    //  - store them in variables and compare later
    // This hook is not called during server-side rendering.
    console.log('6. updated - Component updated');
  },
  beforeUnmount() {
    // Move away from this page to see it in action
    // When this hook is called, the component instance is still fully functional.
    // This hook is not called during server-side rendering.
    console.log('7. beforeUnmount - Component beforeUnmount');
  },
  unmounted() {
    // Move away from this page to see it in action
    // All of its child components have been unmounted.
    // All of its associated reactive effects have been stopped.
    // Use this hook to clean up manually created side effects such as
    //  - timers, DOM event listeners or server connections.
    // This hook is not called during server-side rendering.
    console.log('8. unmounted - Component unmounted');
  },
  errorCaptured() {
    // Trigger if any error occurs in component
    console.log('9. errorCaptured');
  },
  renderTracked(compInstance, DebuggerEvent) {
    // Dev Only hook
    // Called when a reactive dependency has been tracked by the component's render effect.
    console.log('10. renderTracked');
    console.log('10. renderTracked', compInstance);
    console.log('10. renderTracked', DebuggerEvent);
  },
  renderTriggered(compInstance, DebuggerEvent) {
    // Dev Only hook
    // Called when a reactive dependency triggers the component's render effect to be re-run.
    console.log('11. renderTriggered');
    console.log('11. renderTriggered', compInstance);
    console.log('11. renderTriggered', DebuggerEvent);
  },
  activated() {
    // Called after the component instance is inserted into
    // - the DOM as part of a tree cached by <KeepAlive>
    console.log('12. activated');
  },
  deactivated() {
    // Called after the component instance is removed from
    // - the DOM as part of a tree cached by <KeepAlive>.
    console.log('13. deactivated');
  },
  serverPrefetch() {
    // SSR Only
    // This hook is only called during server-side rendering
    //  can be used to perform server-only data fetching.
    console.log('14. serverPrefetch');
  },
};
</script>
