<template>
  <div>Child Component</div>
</template>

<script>
export default {
  name: 'ChildComponent',
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      publicData: 'foo',
      privateData: 'bar',
    };
  },
  methods: {
    publicMethod() {},
    privateMethod() {},
  },
};
</script>
