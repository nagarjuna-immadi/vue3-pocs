<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <router-link
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        to="/"
      >
        <img src="../src/assets/logo.png" alt="logo" height="32" />
        <span class="fs-4">3 Proof Of Concepts</span>
      </router-link>
    </header>
  </div>

  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss">
@import './assets/styles.scss';
</style>
