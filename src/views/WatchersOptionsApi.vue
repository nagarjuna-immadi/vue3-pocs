<template>
  <div class="row">
    <div class="col-12">
      <h4>Watchers Options API</h4>
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

<script>
export default {
  name: 'WatchersOptionsApi',
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. ;-)',
    };
  },
  watch: {
    question(newQuestion, oldQuestion) {
      console.log('oldQuestion', oldQuestion);
      console.log('newQuestion', newQuestion);
      this.answer = 'Thinking....';
      this.getAnswer();
    },
  },
  methods: {
    async getAnswer() {
      if (this.question.indexOf('?') > -1) {
        const res = await fetch('https://yesno.wtf/api');
        this.answer = (await res.json()).answer;
      }
    },
  },
};
</script>
