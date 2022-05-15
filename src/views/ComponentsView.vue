<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Components</h4>
      <ul class="notes-points">
        <li>
          While convenient, global registration has a few drawbacks
          <ul class="notes-points">
            <li>
              Global registration prevents build systems from removing unused components (a.k.a
              "tree-shaking").
            </li>
            <li>
              Global registration makes dependency relationships less explicit in large
              applications. It makes it difficult to locate a child component's implementation.This
              can affect long-term maintainability similar to using too many global variables.
            </li>
          </ul>
        </li>
        <li>
          Locally registered components are not also available in child or descendent components.
        </li>
        <li>
          In composition api, local registration is not required. Just, import the child component
          and use it in parent component.
        </li>
        <li>
          PascalCase names are valid JavaScript identifiers. &lt;PascalCase &#47;&gt; makes it more
          obvious that this is a Vue component instead of a native HTML element in templates. It
          also differentiates Vue components from custom elements (web components).
        </li>
        <li>
          Vue supports resolving kebab-case tags to components registered using PascalCase. This
          means a component registered as MyComponent can be referenced in the template via both
          &lt;MyComponent&gt; and &lt;my-component&gt;
        </li>
        <li><b>Props</b></li>
        <li><router-link to="/components/props">Component Props Example</router-link></li>
        <li>
          We can define props by an array or an object
          <CodeBlock :code="codeStr1" />
          Here, the value of type is the constructor function of that type. Ex: String, Number,
          Boolean, Object, Arrary, Date, Function.
        </li>
        <li>
          Accessing props,
          <CodeBlock :code="codeStr2" />
        </li>
        <li>
          For component names use PascalCase, for prop names use camelCase. <br />
          Ex: greetingMessage <br />
          camelCased props can be accessed in both camelCase(greetingMessage) and
          kebab-case(greeting-message).
          <br />
        </li>
        <li>
          If you want to pass all the properties of an object as props, you can use v-bind without
          an argument.
          <CodeBlock :code="codeStr3" />
        </li>
        <li>
          property bindings communicate one-way(parent -> child).
          <ul class="notes-points">
            <li>
              If child component update primitive props like string, number etc.. it doesn't reflect
              in parent component. Changes to Object or Array internal properties will reflect in
              parent component. But, DON'T DO THAT.
            </li>
            <li>props are readable properties in child component. can't update the references.</li>
            <li>
              From child component reference changes don't reflect in parent component, only
              internal propery changes reflect. But, DON'T DO THAT.
            </li>
            <li>If we want to pass any updates from Child -> Parent, we have to use Events</li>
          </ul>
        </li>
        <li>
          There are usually two cases where it's tempting to mutate a prop,
          <ul class="notes-points">
            <li>
              Sometimes prop is used only as initial value, after that it needs to be used as local
              data property. In this case, it's best to define a local data property that uses the
              prop as its initial value.
              <CodeBlock :code="codeStr4" />
            </li>
            <li>
              The prop is passed in as a raw value that needs to be transformed. In this case, it's
              best to define a computed property using the prop's value
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import CodeBlock from '@/components/CodeBlock.vue';
/* eslint-disable quotes */
const codeStr4 = `// counter only uses props.count as the initial value;
// it is disconnected from future prop updates.
const counter = ref(props.count);

// watch handler on counter, don't execute for props.count updates from parent
watch(counter, (newCounter) => {
  console.log('newCounter', newCounter);
});`;
const codeStr3 = `const post = {
  id: 1,
  title: 'My Journey with Vue'
};

<BlogPost :id="post.id" :title="post.title" />

// the above can be replaced like below.
<BlogPost v-bind="post" />`;

const codeStr2 = `// Options API
// in script
props: ['count']

this.count; // use this.propName

// in template
{{ count }} // use propName

// Composition API
const props = defineProps(['count']);

props.count; // take props into a variable and access

// in template
{{ count }} // use propName
`;

const codeStr1 = `// Options API

// Array of props
{
  ....
  props: ["count", "name"],
  ....
}

// Object of props
{
  ....
  props: {
    count: Number,
    name: String
  },
  ....
}

// Object of props with detailed definition
{
  ....
  props: {
    count: {
      type: Number,
      required: true,
      default: 100
    },
    name: {
      type: String,
      required: true,

    },
  },
  ....
}

// Composition API

// Array of props
defineProps(['count', 'name']);

// Object of props
defineProps({
  count: Number,
  name: String
});

// Object of props with detailed definition
defineProps({
  count: {
      type: Number,
      required: true,
      default: 100
    },
    name: {
      type: String,
      required: true,
    },
});
`;
</script>
