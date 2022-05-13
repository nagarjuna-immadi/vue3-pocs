<template>
  <div class="row">
    <div class="col-12">
      <h4>Watchers</h4>
      <ul class="notes-points">
        <li>
          <router-link to="/watchers/options-api">Options API Example</router-link>
        </li>
        <li>
          <router-link to="/watchers/composition-api">Composition API Example</router-link>
        </li>
        <li>
          Computed Properties, compute a value based on reactive state changes and respond. But,
          don't do any update operations in computed properties which causes side effects
        </li>
        <li>
          computed properties are just like getters to read a value. No side effect causing
          operations like DOM update, Async operations etc...
        </li>
        <li>Watchers are like setters to update something on reactive state value changes</li>
        <li>
          Watchers are good place to handle side effect operations. For example, send search API
          call to backend on user search
        </li>
        <li>
          Through watchers we can access both old and updated value. The same is not possible
          through update life cycle hook or any other
        </li>
        <li>
          deep: true, will make the deep watcher. By default all the watchers are shallow. Check
          example
        </li>
        <li>
          watcher can be written in below format in options api,
          <CodeBlock :code="codeStr1" />
          <CodeBlock :code="codeStr2" />
        </li>
        <li>Deep watchers are expensive, to traverse all the nested properties</li>
        <li>
          immediate: true, watchers run the handler onece immediately after page load and then for
          all other reactive changes
        </li>
        <li>
          flush: 'post', will make the watcher handlers to run after DOM updates. By default, wather
          handlres run before DOM update.
        </li>
        <li>
          We can define the watcher using this.$watch instance method and unwatch if required.
          <CodeBlock :code="codeStr3" />
        </li>
        <li>
          In composition api, we can watch reactive properties like below,
          <CodeBlock :code="codeStr4" />
        </li>
        <li>
          we can watch getters also,
          <CodeBlock :code="codeStr5" />
        </li>
        <li>
          we can watch multiple reactive properties at a time,
          <CodeBlock :code="codeStr6" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable quotes, indent */
import CodeBlock from '@/components/CodeBlock.vue';

export default {
  name: 'WatchersHomeView',
  components: { CodeBlock },
  data() {
    return {
codeStr1: `watch: {
  question(newQuestion, oldQuestion) {}
},`,
codeStr2: `watch: {
  question: {
    handler(newQuestion, oldQuestion) {},
    deep: true,
    ...
  }
}`,
codeStr3: `this.questionUnwatch = this.$watch('question', (newQuestion) => {});
this.questionUnwatch();`,
codeStr4: `watch(question, async (newQuestion, oldQuestion) => {});`,
codeStr5: `watch(
  () => x.value + y.value,
  (sum) => {},
);`,
codeStr6: `watch([x, () => y.value], ([newX, newY], [oldX, oldY]) => {});`,
    };
  },
};
</script>
