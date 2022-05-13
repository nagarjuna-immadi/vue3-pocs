<template>
  <code>
    <pre>{{ code }}</pre>
  </code>
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    code: String,
  },
};
</script>
