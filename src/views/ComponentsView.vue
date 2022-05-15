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
        <li>
          <router-link to="/components/props">Component Props and Events Example</router-link>
        </li>
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
        <li><b>Events</b></li>
        <li>
          <router-link to="/components/props">Component Props and Events Example</router-link>
        </li>
        <li>
          A component can emit custom events directly in template expressions (e.g. in a v-on
          handler) using the built-in $emit function
          <CodeBlock :code="codeStr5" />
          Events can be listened by kebab-case.
        </li>
        <li>
          Unlike native DOM events, component emitted events do not bubble. You can only listen to
          the events emitted by a direct child component.
        </li>
        <li>
          Emitted events can be explicitly declared on the component via the defineEmits() macro. In
          Options api, using 'emits' option.
          <CodeBlock :code="codeStr6" />
          Emits can be an object also. Also, validations can be applied like props.
        </li>
        <li>
          If a component contains 'modelValue' property and 'update:modelValue' event then it
          supports v-model.
          <CodeBlock :code="codeStr7" />
        </li>
        <li><b>Fallthrough Attributes</b></li>
        <li>
          <router-link to="/components/props">Component Props and Events Example</router-link>
        </li>
        <li>
          When a component renders a single root element, fallthrough attributes will be
          automatically added to the root element's attributes.
          <CodeBlock :code="codeStr8" />
          Here count, blog and increment-by-five are explicitly declared props and emitters. So,
          those are not fall through attributes. Any other attributes like class, style, id etc...
        </li>
        <li>
          Nested Component Inheritance: If the child component have another one and only child
          component as root element then the attributes will fall through to next level.
        </li>
        <li>Fall through attributes can be accessed through $attrs</li>
        <li>
          Automatic fall through is not available for components with multiple root nodes. We have
          to assign the attributes manually.
          <CodeBlock :code="codeStr9" />
          In code attaributes can be accessed with this.$attrs
        </li>
        <li>
          If the root element already have the same attribute, then fall through attribute values
          will merge. For ex: class="large" after fall through merge class="large gray"
        </li>
        <li>inheritAttrs: false, in component options will prevent fall through attributes.</li>
        <li>In compositon api, we have to define a seperate normal script tag to configure it.
          <CodeBlock :code="codeStr10" />
        </li>
        <li>In composition api, if we want to access fall through attributes in Javascript
          <CodeBlock :code="codeStr11" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable quotes */
const codeStr11 = `import { useAttrs } from 'vue'

const attrs = useAttrs()`;
const codeStr10 = `<scrpt>
export default {
  inheritAttrs: false,
};
</scrpt>`;
const codeStr9 = `<header>...</header>
<main v-bind="$attrs">...</main>
<footer>...</footer>`;
const codeStr8 = `<ComponentPropsChild
  :count="count"
  :blog="blog"
  @increment-by-five="increaseBy"
  class="gray"
/>

// class will be shifted to child component root element in the run time
<template>
  <div class="gray">
  ...
  </div>
<template>
`;
const codeStr7 = `<CustomInput
  :modelValue="searchText"
  @update:modelValue="newValue => searchText = newValue"
/>

// It supports v-model
<CustomInput v-model="searchText" />

<!-- CustomInput.vue -->
// In script
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>`;
const codeStr6 = `// Composition api
const emit = defineEmits(['inFocus', 'submit'])

// Options api
{
  ...
  emits: ['inFocus', 'submit']
  ...
}
`;
const codeStr5 = `<button @click="$emit('someEvent')">click me</button>

// The parent can then listen to it using v-on
<MyComponent @some-event="callback" />

// Emiit from a component method
this.$emit('increaseBy', 1); // Here 1 is event argument
`;
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
