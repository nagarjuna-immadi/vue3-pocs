<template>
  <div>
    <input ref="input" value="nag" placeholder="type name ..." />
  </div>
  <div class="my-2">
    <input :ref="(el) => storeRef(el)" value="nagarjuna" placeholder="type name ..." />
  </div>
  <div>
    <ChildComponent ref="child"/>
  </div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';

export default {
  mounted() {
    console.log('input ref', this.$refs.input);
    console.log(this.$refs.input.type);
    console.log(this.$refs.input.value);
    this.$refs.input.focus();

    // Child component
    console.log('child component', this.$refs.child);
    console.log(this.$refs.child.privateData);
  },
  methods: {
    storeRef(el) {
      console.log('storeRef', el);
    },
  },
  components: { ChildComponent },
};
</script>
