<template>
  <div class="row">
    <div class="col-12 mb-5">
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
        <li>
          We cann't watch property of a reactive objective like below,
          <CodeBlock :code="codeStr7" />
          Here, obj.count returns count number. Instead, we have to use getter to watch object
          properties.
          <CodeBlock :code="codeStr8" />
        </li>
        <li>
          When we call watch() directly on a reactive object, it will implicitly create a deep
          watcher,
          <CodeBlock :code="codeStr9" />
        </li>
        <li>
          watch() is Lazy, the callback will be called only when the watched propery changes.
          <b>watchEffect()</b> executes once immediately after page load and then re-execute on
          dependent reactive prop changes.
          <CodeBlock :code="codeStr10" />
          Here, question is reactive property. So, watchEffect() start watching it like computed
          property and perform the side effects when it changes.
        </li>
        <li>
          By default, watch() or watchEffect() callbacks executes before the DOM update on reactive
          property changes. flush: 'post' will make the callbacks to execute after DOM update.
          watchPostEffect() is a alias for watchEffect with flush: 'post'
          <CodeBlock :code="codeStr11" />
        </li>
        <li>
          Watchers will be automatically stopped when the owner component is unmounted. In most
          cases, we don't need to worry about stopping the watcher ourself. If the watcher is
          created in an async callback, it won't be bound to the owner component and must be stopped
          manually to avoid memory leaks.
          <CodeBlock :code="codeStr12" />
          To unwatch manually, use the returned handle function.
          <!-- <CodeBlock :code="codeStr13" /> -->
          <code-block :code="codeStr13"></code-block>
          It works for both watch() and watchEffect()
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
      codeStr7: `const obj = reactive({ count: 0 });
watch(obj.count, (count) => {
...
});
`,
      codeStr8: `watch(
  () => obj.count, // getter returns the property to watch
  (count) => {
    console.log(\`count is: \${count}\`)
  }
);
`,
      codeStr9: `const user = reactive({
  name: {
    first: 'nag',
  },
});

watch(user, (newUser) => {
...
});
`,
      codeStr10: `watchEffect(async () => {
  console.log('watchEffect executed');
  if (question.value.indexOf('?') > -1) {
    console.log('Question asked');
  }
});
`,
codeStr11: `import { watchPostEffect } from 'vue';
watch(source, callback, {
  flush: 'post'
});

watchEffect(callback, {
  flush: 'post'
});

watchPostEffect(() => {
  /* executed after Vue updates */
});
`,
      codeStr12: `// this one will be automatically stopped
watchEffect(() => {})

// ...this one will not!
setTimeout(() => {
  watchEffect(() => {})
}, 100)`,
      codeStr13: `const unwatch = watchEffect(() => {})

// ...later, when no longer needed
unwatch()`,
    };
  },
};
</script>
