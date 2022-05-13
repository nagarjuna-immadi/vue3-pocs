<template>
  <ChildComponent ref="child" />
  <CompositionChild ref="compositionChild" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ChildComponent from '@/components/ChildComponent.vue';
import CompositionChild from '@/components/CompositionChild.vue';

const child = ref(null);
const compositionChild = ref(null);

onMounted(() => {
  console.log(child.value.publicData); // foo
  console.log(child.value.privateData); // undefined
  console.log(compositionChild.value.a); // 1
  console.log(compositionChild.value.b); // undefined
});
</script>
