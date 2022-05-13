<template>
  <div class="row mb-5">
    <div class="col-12">
      <h4>Watchers Composition API</h4>
      <div>
        <label for="question"
          >Ask a YES/NO question:&nbsp;
          <input type="text" v-model="question" class="form-control" id="question"
        /></label>
        <br /><br />
        <p>{{ answer }}</p>
      </div>

      <div>
        <h5 class="mt-5">Watch Source Types</h5>
        <label for="x"
          >X:&nbsp; <input type="number" v-model="x" class="form-control" id="x"
        /></label>
        <br /><br />
        <label for="y"
          >Y:&nbsp; <input type="number" v-model="y" class="form-control" id="y"
        /></label>
      </div>

      <div>
        <h5 class="mt-5">Deep Watchers</h5>
        <label for="name"
          >Name:&nbsp; <input type="text" v-model="user.name.first" class="form-control" id="name"
        /></label>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable comma-dangle */
import {
  ref, watch, reactive, watchEffect
} from 'vue';

const question = ref('');
const answer = ref('Questions usually contain a question mark. ;-)');

watch(question, async (newQuestion, oldQuestion) => {
  console.log('oldQuestion', oldQuestion);
  console.log('newQuestion', newQuestion);
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...';
    try {
      const res = await fetch('https://yesno.wtf/api');
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = `Error! Could not reach the API. ${error}`;
    }
  }
});

watchEffect(async () => {
  console.log('watchEffect executed');
  if (question.value.indexOf('?') > -1) {
    console.log('Question asked');
  }
});

const x = ref(0);
const y = ref(0);

// watching a single ref value
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// array of multiple sources
watch([x, () => y.value], ([newX, newY], [oldX, oldY]) => {
  console.log(`old x is ${oldX} and old y is ${oldY}`);
  console.log(`x is ${newX} and y is ${newY}`);
});

const user = reactive({
  name: {
    first: 'nag',
  },
});

// Deep watch on reactive objects
watch(user, (newUser) => {
  console.log('Deep watch: newUser', newUser);
});

// watcher on getter, don't watch deep.
// deep: true will make it deep watch
watch(
  () => user,
  (newUser) => {
    console.log('Replaced newUser', newUser);
  },
  { deep: true }
);
</script>
