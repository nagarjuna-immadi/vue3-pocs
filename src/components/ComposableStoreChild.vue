<template>
  <div>
    Global Count: {{ globalCount }} <br />
    <label for="global">
      <input type="number" id="global" v-model="globalCount" />
    </label>
  </div>
  <div class="mt-3">
    Local Count: {{ localCount }} <br />
    <label for="local">
      <input type="number" id="local" v-model="localCount" />
    </label>
  </div>
</template>

<script setup>
import useCount from '../simple-store/composable-store';

const { globalCount, localCount } = useCount();

</script>
