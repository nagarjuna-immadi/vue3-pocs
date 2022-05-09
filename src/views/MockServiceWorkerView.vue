<template>
  <div>Mock Service Worker</div>
  <div>{{ message }}</div>
</template>

<script>
import { fetchMessage } from '@/services/fetchers';

export default {
  name: 'MockServiceWorkerView',
  components: {},
  data() {
    return {
      message: '',
    };
  },
  async created() {
    try {
      this.message = await fetchMessage();
    } catch (error) {
      this.message = 'server error :(';
    }
  },
};
</script>
