<template>
  <div class="row">
    <div class="col-12 mb-5">
      <ul class="notes-points">
        <li>
          Vue 2 used getter/setters exclusively to impliment reactivity, due to browser support
          limitations.
        </li>
        <li>
          In Vue 3, Proxies are used for reactive objects and getter/setters are used for refs.
          Below is the pseudo code.
          <CodeBlock :code="codeStr9" />
        </li>
      </ul>
      <h4>Reactivity Options Api</h4>
      <ul class="notes-points">
        <li><router-link to="/reactivity/options-api">Options Api Example</router-link></li>
        <li>
          Use 'data' option to declare reactive state of a component. 'data' should be a function
          that returns an object
        </li>
        <li>
          Vue will call the function when creating a new component instance, and wrap the returned
          object in its reactivity system.
        </li>
        <li>Top-level properties of this object are proxied on the component instance(this)</li>
        <li>
          'data' should contain all the reactive properties initially i.e by the time vue creates
          the instance. If the value is not available by that time, use 'null' or 'undefined'. Any
          other value added later directly to 'this' won't become reactive.
        </li>
        <li>
          Vue uses a $ prefix when exposing its own built-in APIs via the component instance. It
          also reserves the prefix _ for internal properties. You should avoid using names for
          top-level data properties that start with either of these characters.
        </li>
        <li>
          Vue 3 uses javascript proxies to make the objects reactive.
          <CodeBlock :code="codeStr1" />
          Here, someObject is a proxy object and reactive. Even after assignment of 'newObject' to
          'someObject', still 'someObject' is a proxy and reactive as empty object. After assignment
          of empty object, the properties were overwritten but it didn't loose the reactivity. Also,
          newObject is left as it is. Unlike in Vue 2, the original newObject is left intact and
          will not be made reactive.
        </li>
        <li>
          Vue automatically binds the 'this' value for methods so that it always refers to the
          component instance. This ensures that a method retains the correct 'this' value if it's
          used as an event listener or callback.
        </li>
        <li>
          Avoid using arrow functions when defining methods, as that prevents Vue from binding the
          appropriate this value.
        </li>
        <li>
          Where ever we want to access component instance(this), we should avoid arrow functions.
        </li>
        <li>
          <b>DOM Update - Not Synchronous: </b>When we mutate reactive state, the DOM is updated
          automatically. But, it is not synchronous operation.
        </li>
        <li>
          Vue buffers all reactive changes until the "next tick" in the update cycle to ensure that
          each component needs to update only once no matter how many state changes we have made.
        </li>
        <li>
          To wait for the DOM update to complete after a state change, we can use the nextTick()
          global API.
          <CodeBlock :code="codeStr2" />
        </li>
        <li>
          In Vue, state is deeply reactive by default. This means we can expect changes to be
          detected even when we mutate nested objects or arrays
        </li>
        <li></li>
      </ul>

      <h4>Reactivity Composition Api</h4>
      <ul class="notes-points">
        <li><router-link to="/reactivity/composition-api">Composition Api Example</router-link></li>
        <li>
          <b>setup(): </b> Manually exposing state and methods via setup() can be verbose. Luckily,
          it is only necessary when not using a build step. In SFCs it is not required. i.e when
          using 'script setup'.
        </li>
        <li>
          Top-level imports and variables declared in 'script setup' are automatically usable in the
          template of the same component.
        </li>
        <li>
          We can create a reactive object using reactive method. Ex: 'const state = reactive({
          count: 0 })'
        </li>
        <li>
          By default vue / reactive() creates deep reactive objects. Also, We can create shallow
          reactive objects using shallowReactive() method.
        </li>
        <li>
          calling reactive() on the same object always returns the same proxy, and calling
          reactive() on an existing proxy also returns that same proxy
        </li>
        <li>
          <b>The reactive() API has two limitations:</b>
          <ol class="notes-points">
            <li>
              It only works for object types (objects, arrays, and collection types such as Map and
              Set). It cannot hold primitive types such as string, number or boolean.
            </li>
            <li>
              Since Vue's reactivity tracking works over property access, we must always keep the
              same reference to the reactive object. This means we can't easily "replace" a reactive
              object because the reactivity connection to the first reference is lost:
              <CodeBlock :code="codeStr3" />
              It also means that when we assign or destructure a reactive object's property into
              local variables, or when we pass that property into a function, we will lose the
              reactivity connection:
              <CodeBlock :code="codeStr4" />
            </li>
          </ol>
        </li>
        <li>
          <b>Reactive Variables with ref(): </b> To address the limitations of reactive(), Vue also
          provides a ref() function which allows us to create reactive "refs" that can hold any
          value type.
        </li>
        <li>
          ref() takes the argument and returns it wrapped within a ref object with a .value property
          <CodeBlock :code="codeStr5" />
        </li>
        <li>when holding object types, ref automatically converts its .value with reactive()</li>
        <li>
          Refs can also be passed into functions or destructured from plain objects without losing
          reactivity
        </li>
        <li>
          <b
            >In other words, ref() allows us to create a "reference" to any value and pass it around
            without losing reactivity.</b
          >
        </li>
        <li>
          When refs are accessed as top-level properties in the template, they are automatically
          "unwrapped" so there is no need to use .value
          <CodeBlock :code="codeStr6" />
          In the above two cases, 'count.value' and 'countObj.value.count' doesn't work in
          interpolation bindings. Only, 'count' and 'countObj.count' work in interpolation bindings.
          Don't use '.value' in interpolation bindings for top-level properties.
        </li>
        <li>
          If reactive properties are nested in normal object, then ref unwrapping don't work in
          expressions. We have to use '.value'
          <CodeBlock :code="codeStr7" />
        </li>
        <li>
          If reactive properties are nested in normal object, make nested reactive property as
          top-level by using destructing to enjoy ref-unwrapping
          <CodeBlock :code="codeStr8" />
        </li>
      </ul>
      <h4>Reactivity Debugging</h4>
      <ul class="notes-points">
        <li>
          We can debug what dependencies are used during a component's render and which dependency
          is triggering an update using the onRenderTracked and onRenderTriggered lifecycle hooks.
          <CodeBlock :code="codeStr10" />
          We can debug computed properties and watchers also.
          <CodeBlock :code="codeStr11" />
          <CodeBlock :code="codeStr12" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeStr11: `const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    // triggered when count.value is tracked as a dependency
    debugger
  },
  onTrigger(e) {
    // triggered when count.value is mutated
    debugger
  }
})`,
      codeStr12: `watch(source, callback, {
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})

watchEffect(callback, {
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})`,
      codeStr10: `onRenderTracked((event) => {
  console.log('onRenderTracked event', event);
});

onRenderTriggered((event) => {
  console.log('onRenderTriggered event', event);
});`,
      codeStr9: `function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      track(target, key)
      return target[key]
    },
    set(target, key, value) {
      trigger(target, key)
      target[key] = value
    }
  })
}

function ref(value) {
  const refObject = {
    get value() {
      track(refObject, 'value')
      return value
    },
    set value(newValue) {
      trigger(refObject, 'value')
      value = newValue
    }
  }
  return refObject
}`,
      codeStr8: `// In script
const { age: userAge } = user;

// In template
User age(Destructured prop): {{ userAge }} <br />
User age(Destructured prop, works in expression): {{ userAge + 1 }} <br />
User age(Destructured prop, .value don't work): {{ userAge.value }} <br />
`,
      codeStr7: `// In script
const user = {
  age: ref(25),
};

// In template
User age (Works, just reading value): {{ user.age }} <br />
User age (Works, just reading value): {{ user.age.value }} <br />
User age in expression(Don't work): {{ user.age + 1 }} <br />
User age in expression(Works): {{ user.age.value + 1 }} <br />`,
      codeStr6: `// In script
// Primitive data type
const count = ref(0);
console.log('count', count.value); // 0

// Reactive Object
const countObj = ref({ count: 1 });
countObj.value.count += 1;
console.log('count', countObj.value.count); // 2

// In template
Number count: {{ count + 1 }} <br />
Number count: {{ count }} <br />

Count Obj: {{ countObj.count + 1 }} <br />`,
      codeStr1: `export default {
  data() {
    return {
      someObject: {
        count: 1,
      }
    }
  },
  mounted() {
    const newObject = {}
    this.someObject = newObject

    console.log(newObject === this.someObject) // false
  }
}`,
      codeStr2: `import { nextTick } from 'vue'

export default {
  methods: {
    increment() {
      this.count++
      nextTick(() => {
        // access updated DOM
      })
    }
  }
}`,
      codeStr3: `let state = reactive({ count: 0 })

// the above reference ({ count: 0 }) is no longer being tracked (reactivity connection is lost!)
state = reactive({ count: 1 })`,
      codeStr4: `const state = reactive({ count: 0 })

// n is a local variable that is disconnected
// from state.count.
let n = state.count
// does not affect original state
n++

// count is also disconnected from state.count.
let { count } = state
// does not affect original state
count++

// the function receives a plain number and
// won't be able to track changes to state.count
callSomeFunction(state.count)`,
      codeStr5: `const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1`,
    };
  },
};
</script>
