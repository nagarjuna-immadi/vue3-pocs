<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Custom Directives</h4>
      <ul class="notes-points">
        <li>
          <router-link to="/custom-directives/options-api"
            >Custom Directives Options Api Example</router-link
          >
        </li>
        <li>
          <router-link to="/custom-directives/composition-api"
            >Custom Directives Composition Api Example</router-link
          >
        </li>
        <li>
          Custom directives are mainly intended for reusing logic that involves low-level DOM access
          on plain elements.
        </li>
        <li>
          A custom directive is defined as an object containing lifecycle hooks similar to those of
          a component. The hooks receive the element the directive is bound to.
          <CodeBlock :code="codeStr1"></CodeBlock>
          <CodeBlock :code="codeStr2"></CodeBlock>
        </li>
        <li>
          A directive definition object can provide several hook functions. All are optional.
          <CodeBlock :code="codeStr3"></CodeBlock>
        </li>
        <li>
          <b>Function Shorthand: </b>It's common for a custom directive to have the same behavior
          for mounted and updated, with no need for the other hooks. In such cases we can define the
          directive as a function
          <CodeBlock :code="codeStr4"></CodeBlock>
        </li>
        <li>
          Object Literals: If your directive needs multiple values, you can also pass in a
          JavaScript object literal. Remember, directives can take any valid JavaScript expression.
          <CodeBlock :code="codeStr5"></CodeBlock>
          Here, binding argument is the parameters we pass while applying directive.
        </li>
        <li>Custom directives can be used on components</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const codeStr5 = `<div v-demo="{ color: 'white', text: 'hello!' }"></div>

app.directive('demo', (el, binding) => {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text) // => "hello!"
})`;
const codeStr4 = `<div v-color="color"></div>

app.directive('color', (el, binding) => {
  // this will be called for both mounted and updated
  el.style.color = binding.value
})`;
const codeStr3 = `const myDirective = {
  // called before bound element's attributes
  // or event listeners are applied
  created(el, binding, vnode, prevVnode) {
    // see below for details on arguments
  },
  // called right before the element is inserted into the DOM.
  beforeMount() {},
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted() {},
  // called before the parent component is updated
  beforeUpdate() {},
  // called after the parent component and
  // all of its children have updated
  updated() {},
  // called before the parent component is unmounted
  beforeUnmount() {},
  // called when the parent component is unmounted
  unmounted() {}
}`;
const codeStr2 = `// Global registration of directive.
// make v-focus usable in all components
app.directive('focus', {
  /* ... */
})`;
const codeStr1 = `// Options Api
const focus = {
  mounted: (el) => el.focus()
}

export default {
  directives: {
    // enables v-focus in template
    focus
  }
}

// Composition Api
// enables v-focus in templates
const vFocus = {
  mounted: (el) => el.focus()
}

<template>
  <input v-focus />
</template>`;
</script>
