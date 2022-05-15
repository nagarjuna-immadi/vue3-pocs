<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div class="mb-3">
      <label for="count">
        Count: {{ count }} <br />
        <!-- DON'T MODIFY THE props FROM CHILD -->
        <input type="number" class="form-control" v-model="props.count" id="count" />
      </label>
    </div>
    <div>
      <label for="title">
        Blog Title: {{ props.blog.title }} <br />
        <!-- DON'T MODIFY THE props FROM CHILD -->
        <input type="text" class="form-control" v-model="props.blog.title" id="title" />
      </label>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable vue/no-mutating-props */
import { defineProps, watch, ref } from 'vue';

const props = defineProps({
  count: Number,
  blog: Object,
});
console.log('count prop', props.count);
console.log('blog id', props.blog?.id);
console.log('blog title', props.blog?.title);

// props.blog.title = 'new title'; // DON'T MODIFY THE props FROM CHILD
// props.count = 10; // DON'T MODIFY THE props FROM CHILD

// counter only uses props.count as the initial value;
// it is disconnected from future prop updates.
const counter = ref(props.count);
// watch handler on counter, don't execute for props.count updates from parent
watch(counter, (newCounter) => {
  console.log('newCounter', newCounter);
});

// watch directly props.count works
// we have to use getter here to make watch work properly
watch(
  () => props.count,
  (newCounter) => {
    console.log('newCounter', newCounter);
  },
);
</script>
