<template>
  <div class="row">
    <div class="col-12">
      <h4>Watchers Options API</h4>
      <div class="mb-5">
        <label for="question"
          >Ask a YES/NO question:&nbsp;
          <input type="text" v-model="question" class="form-control" id="question"
        /></label>
        <br /><br />
        <p>{{ answer }}</p>
      </div>
      <div class="mb-5">
        <div>{{ userObjStr }}</div>
        <div>
          <label for="name"
            >First Name:&nbsp;
            <input type="text" v-model="user.name.first" class="form-control" id="name"
          /></label>
        </div>
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
      user: {
        name: {
          first: 'nag',
        },
      },
      questionUnwath: undefined,
    };
  },
  watch: {
    question(newQuestion, oldQuestion) {
      console.log('oldQuestion', oldQuestion);
      console.log('newQuestion', newQuestion);
      this.answer = 'Thinking....';
      this.getAnswer();
    },
    user: {
      handler(newUser, oldUser) {
        console.log(oldUser, newUser);
      },
      deep: true, // false, don't watch the internal properties. false is default value.
      immediate: true, // the handler will run immediately after page load
      flush: 'post', // handler will run after the DOM updates.
    },
  },
  computed: {
    userObjStr() {
      return JSON.stringify(this.user);
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
  created() {
    this.questionUnwatch = this.$watch('question', (newQuestion) => {
      console.log('newQuestion from $watch', newQuestion);
    });
  },
  beforeUnmount() {
    console.log('question unwatched!');
    this.questionUnwatch();
  },
};
</script>
