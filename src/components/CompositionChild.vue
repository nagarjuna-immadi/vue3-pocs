<template>
  <div>Composition Child Component</div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';

const a = 1;
// eslint-disable-next-line
const b = ref(2);

defineExpose({
  a,
});
</script>
