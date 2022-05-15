<template>
  <BaseLayout>
    <template v-slot:header>
      <div>Header Content</div>
    </template>
    <!-- Default content, don't need any slot name -->
    <div>Default content</div>
    <div>Default content2</div>
    <template #footer>
      <div>Footer Content</div>
    </template>
    <!-- Default content go to un named slot -->
    <!-- <template #default>
      <div>Default Content</div>
    </template> -->
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/BaseLayout.vue';
</script>
