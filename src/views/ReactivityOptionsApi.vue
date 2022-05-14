<template>Reactivity Options Api</template>

<script>
export default {
  name: 'ReactivityOptionsApi',
  data() {
    return {
      someObject: {
        count: 1,
      },
    };
  },
  mounted() {
    const newObject = {};
    this.someObject = newObject;

    console.log(newObject === this.someObject); // false
    console.log(newObject);
    console.log(this.someObject);
  },
};
</script>
