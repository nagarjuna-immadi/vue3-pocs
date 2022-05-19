<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Plugins</h4>
      <ul class="notes-points">
        <li>Plugins are self-contained code that usually add app-level functionality to Vue</li>
        <li>
          This is how we install a plugin
          <CodeBlock :code="codeStr1"></CodeBlock>
        </li>
        <li>
          A plugin is defined as either an object that exposes an install() method, or simply a
          function that acts as the install function itself. The install function receives the app
          instance along with additional options passed to app.use(), if any.
          <CodeBlock :code="codeStr2"></CodeBlock>
        </li>
        <li>
          Below are the general usecases of a plugin,
          <ul>
            <li>
              Register one or more global components or custom directives with app.component() and
              app.directive().
            </li>
            <li>Make a resource injectable throughout the app by calling app.provide()</li>
            <li>
              Add some global instance properties or methods by attaching them to
              app.config.globalProperties.
            </li>
            <li>
              A library that needs to perform some combination of the above (e.g. vue-router).
            </li>
          </ul>
        </li>
        <li>
          <b>Writing a Plugin: </b> Check the plugins/i18n.js
          <div>{{ $translate('greetings.hello') }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue';

const codeStr2 = `const myPlugin = {
  install(app, options) {
    // configure the app
  }
}`;
const codeStr1 = `import { createApp } from 'vue'

const app = createApp({})

app.use(myPlugin, {
  /* optional options */
})`;

// i18n is injected through i18n plugin
const i18n = inject('i18n');
console.log(i18n.greetings.hello);
</script>
