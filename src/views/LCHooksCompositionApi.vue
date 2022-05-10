<template>
  <div class="row">
    <div class="col-12">
      <h4>Life Cycle Hooks Composition API</h4>
      <div>
        <button type="button" class="btn btn-primary" @click="increment">
          Increment Count {{ count }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated,
  onBeforeUnmount, onUnmounted,
} from 'vue';

const count = ref(0);

function increment() {
  count.value += 1;
}

onBeforeMount(() => {
  console.log('1. onBeforeMount');
});

onMounted(() => {
  console.log('2. onMounted');
});

onBeforeUpdate(() => {
  console.log('3. onBeforeUpdate');
});

onUpdated(() => {
  console.log('4. onUpdated');
});

onBeforeUnmount(() => {
  console.log('5. onBeforeUnmount');
});

onUnmounted(() => {
  console.log('6. onUnmounted');
});
</script>
