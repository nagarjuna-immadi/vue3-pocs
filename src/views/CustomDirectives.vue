<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Custom Directives</h4>
      <ul class="notes-points">
        <li><router-link to="/composables/example">Custom Directives Example</router-link></li>
        <li>
          Custom directives are mainly intended for reusing logic that involves low-level DOM access
          on plain elements.
        </li>
        <li>
          A custom directive is defined as an object containing lifecycle hooks similar to those of
          a component. The hooks receive the element the directive is bound to.
          <CodeBlock :code="codeStr1"></CodeBlock>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
const codeStr1 = `// enables v-focus in templates
const vFocus = {
  mounted: (el) => el.focus()
}

<template>
  <input v-focus />
</template>`;
</script>
