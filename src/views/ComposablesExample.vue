<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Composables Example</h4>
      <div>Mouse Position X: {{ x }}</div>
      <div>Mouse Position Y: {{ y }}</div>

      <div><b>Mouse Position using Composable</b></div>
      <div>Mouse Position X: {{ cX }}</div>
      <div>Mouse Position Y: {{ cY }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import trackMouseMove from '../composables/mouse';

// Mouse move tracker logic in component
const x = ref(0);
const y = ref(0);

function update(event) {
  x.value = event.pageX;
  y.value = event.pageY;
}

onMounted(() => {
  window.addEventListener('mousemove', update);
});

onUnmounted(() => {
  console.log('mouse move event un-subscribed');
  window.removeEventListener('mousemove', update);
});

// Mouse move tracker logic in composable
const { x: cX, y: cY } = trackMouseMove();
</script>
