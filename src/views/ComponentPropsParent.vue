<template>
  <div>
    <h6>Child Component</h6>
    <ComponentPropsChild
      :count="count"
      :blog="blog"
      @increment-by-five="increaseBy"
      class="gray"
    />

    <div class="my-4">
      <h6>Parent Component</h6>
      <div class="mb-3">
        <label for="count">
          Count: {{ count }} <br />
          <input type="number" class="form-control" v-model="count" id="count" />
        </label>
      </div>
      <div>
        <label for="title">
          Blog Title: {{ blog.title }} <br />
          <input type="text" class="form-control" v-model="blog.title" id="title" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ComponentPropsChild from './ComponentPropsChild.vue';

const count = ref(5);
const blog = ref({
  id: 1,
  title: 'Javascript advance concepts',
});

function increaseBy(val) {
  count.value += val;
}
</script>
