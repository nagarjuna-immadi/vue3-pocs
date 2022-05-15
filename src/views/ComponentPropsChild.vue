<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <div class="mb-3">
      <span>Fallthrough attributes: {{ $attrs }}</span>
    </div>
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
    <div class="mt-3">
      <button class="btn btn-primary" @click="increaseCount">Increase Count</button>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable vue/no-mutating-props */
/* eslint-disable comma-dangle */
// eslint-disable-next-line
import { defineProps, watch, ref, defineEmits, useAttrs } from 'vue';

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
  }
);

// Events
const emit = defineEmits(['incrementByFive']);

function increaseCount() {
  emit('incrementByFive', 5);
}

// Use attributes
const attrs = useAttrs();
console.log('attrs', attrs);
</script>

<script>
export default {
  inheritAttrs: true, // make it false to prevent fall through attributes
};
</script>
