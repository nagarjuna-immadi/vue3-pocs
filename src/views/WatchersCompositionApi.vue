<template>
  <div class="row">
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
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

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
</script>
