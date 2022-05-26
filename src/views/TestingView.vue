<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Testing</h4>
      <ul class="notes-points">
        <li>
          <b>Unit Testing</b>
          <ul>
            <li>
              Isolate the item to be tested, then pass input and assert for expected output or side
              effect to happen.
            </li>
            <li>Write unit tests for functions, classes, composables etc...</li>
            <li>
              Using <b>jest</b> or any other tesing library we can write these tests. No Vue
              specific setup is required
            </li>
            <li>
              Tests that are <b>Whitebox tests</b> are aware of the implementation details and
              dependencies. Usually in Whitebox testing isolate the testable item from children,
              plugings or other and test.
            </li>
          </ul>
        </li>
        <li>
          <b>Integration Testing / Component Testing</b>
          <ul>
            <li>
              Checks that your component mounts, renders, can be interacted with, and behaves as
              expected.
            </li>
            <li>
              These tests import more code than unit tests, are more complex, and require more time
              to execute.
            </li>
            <li>Vue specific setup is required. To mount, unmount, render components etc...</li>
            <li>
              Using <b>@vue/test-utils</b> or <b>@testing-library/vue</b> we can do the setup and
              test components
            </li>
            <li>
              Tests that are <b>Blackbox tests</b> are unaware of the implementation details. These
              tests mock as little as possible to test the integration of your component and the
              entire system. They usually render all child components and are considered more of an
              <b>integration test</b>.
            </li>
            <li>
              For Visual logic: assert correct render output based on inputted props and slots.
            </li>
            <li>
              For Behavioral logic: assert correct render updates or emitted events in response to
              user input events.
            </li>
            <li>
              Don't rely exclusively on snapshot tests. Asserting HTML strings does not describe
              correctness. Write tests with intentionality.
            </li>
          </ul>
        </li>
        <li>
          <b>E2E Testing</b>
          <ul>
            <li>
              Checks features that span multiple pages and make real network requests against your
              production-built Vue application.
            </li>
            <li>Using Cypress, Testcafe etc.. we can write e2e tests</li>
          </ul>
        </li>
        <li>
          If a method needs to be tested thoroughly, consider extracting it into a standalone
          utility function and write a dedicated unit test for it. If it cannot be extracted
          cleanly, it may be tested as a part of a component, integration, or end-to-end test that
          covers it.
        </li>
        <li>
          <b>Mounting Libraries:</b> @vue/test-utils is the official low-level component testing
          library that was written to provide users access to Vue specific APIs. It's also the
          lower-level library @testing-library/vue is built on top of.
        </li>
        <li>
          It is recommended using @testing-library/vue for testing components in applications, as
          its focus aligns better with the testing priorities of applications. Use @vue/test-utils
          only if you are building advanced components that require testing Vue-specific internals.
        </li>
        <li>
          Testing composables that do not rely on a host component instance
          <CodeBlock :code="codeStr1" />
        </li>
        <li>
          Testing composables that depends on a host component instance when it using Lifecycle
          hooks or Provide/Inject
          <CodeBlock :code="codeStr2" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable quotes */
const codeStr2 = `// test-utils.js
import { createApp } from 'vue'

export function withSetup(composable) {
  let result
  const app = createApp({
    setup() {
      result = composable()
      // suppress missing template warning
      return () => {}
    }
  })
  app.mount(document.createElement('div'))
  // return the result and the app instance
  // for testing provide / unmount
  return [result, app]
}

// useFooComposable.spec.js
import { withSetup } from './test-utils'
import { useFooComposable } from './foo'

test('useFooComposable', () => {
  const [result, app] = withSetup(() => useFooComposable(123))
  // mock provide for testing injections
  app.provide(...)
  // run assertions
  expect(result.foo.value).toBe(1)
  // trigger onUnmounted hook if needed
  app.unmount()
})`;
const codeStr1 = `// counter.js
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++

  return {
    count,
    increment
  }
}

// counter.spec.js
import { useCounter } from './counter.js'

test('useCounter', () => {
  const { count, increment } = useCounter()
  expect(count.value).toBe(0)

  increment()
  expect(count.value).toBe(1)
})`;
</script>
