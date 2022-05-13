<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Template Refs</h4>
      <ul class="notes-points">
        <li>
          <router-link to="/template-refs/options-api">Options API Example</router-link>
        </li>
        <li>
          <router-link to="/template-refs/composition-api">Composition API Example</router-link>
        </li>
        <li>
          Sometimes we need direct access to DOM elements. Using 'ref' attribute we can access. It
          allows us to obtain a direct reference to a specific DOM element or child component
          instance after it's mounted.
        </li>
        <li>
          Example usecases are, after page load focus on some input element, intialise a 3rd party
          library on some element etc...
          <CodeBlock :code="codeStr1" />
          We can only access the DOM elements after component mouted.
        </li>
        <li>
          Accessed DOM element is just like DOM element object. We can perform all the DOM
          operations.
        </li>
        <li>
          refs can be used on v-for also. refs will be collected into an array. But, the sourece
          array element order is not guaranteed.
          <CodeBlock :code="codeStr2" />
        </li>
        <li>
          refs can be passed to method like below,
          <CodeBlock :code="codeStr3" />
          Gives us full flexibility on where to store the element reference. <br />
          Dynamic :ref binding will be called on each component update.
        </li>
        <li>
          We can access the child component instance using refs. In options Api, all the methods,
          properties of child component are public by default. We can limit it by using 'expose'
          option. If we use expose option, only the members mentioned in expose array wiil become
          accessable.
          <CodeBlock :code="codeStr4" />
        </li>
        <li>
          To obtain the reference with Composition API, we need to declare a ref with the same name.
        </li>
        <li>
          In Composition Api, the child component instance properties are private by default. Won't
          be able to access anything unless the child component chooses to expose a public interface
          using the defineExpose macro.
          <CodeBlock :code="codeStr5" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable quotes, indent */
import CodeBlock from '@/components/CodeBlock.vue';

export default {
  name: 'TemplateRefs',
  components: { CodeBlock },
  data() {
    return {
      codeStr1: `// template
<input ref="input" placeholder="type name ..."/>

// script
mounted() {
  this.$refs.input.focus();
}`,
      codeStr2: `<li v-for="item in list" ref="items">
  {{ item }}
</li>`,
      codeStr3: `<input :ref="(el) => storeRef(el)" value="nagarjuna" placeholder="type name ..." />`,
      codeStr4: `// child component
export default {
  expose: ['publicData', 'publicMethod'],
  ....
}

// parent component template
<ChildComponent ref="child"/>
`,
      codeStr5: `import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})`,
    };
  },
};
</script>
