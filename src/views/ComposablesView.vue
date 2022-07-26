<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Composables</h4>
      <ul class="notes-points">
        <li><router-link to="/composables/example">Composables Example</router-link></li>
        <li>
          <b>Composed: </b>made up (a whole, or a specified part of it) with different elements.
        </li>
        <li><b>Composition: </b>a thing composed of various elements.</li>
        <li>
          <b>Composability: </b>Composability is a system design principle that deals with the
          inter-relationships of components. A highly composable system provides components that can
          be selected and assembled in various combinations to satisfy specific user requirements.
        </li>
        <li><b>Composable: </b>capable of being composed</li>
        <li>
          In the context of Vue applications, a "composable" is a function that leverages Vue
          Composition API to encapsulate and reuse stateful logic.
        </li>
        <li>There are many libraries out there for reusing stateless logic - for example lodash</li>
        <li>stateful logic involves managing state that changes over time</li>
        <li>one composable can be used in another composable</li>
        <li>
          As per my understanding, composables are nothing but services. Composables can handle
          stateful logic while the services handle stateless logic or data
        </li>
        <li>
          Naming: It is a convention to name composable functions with camelCase names that start
          with "use". Ex: function useFeature(maybeRef) {}
        </li>
        <li>
          Return Values: Always use ref() instead of reactive() in composables. The recommended
          convention is to always return an object of refs from composables, so that it can be
          destructured in components while retaining reactivity. Ex: const { x, y } =
          trackMouseMove() <br />
          <br />
          Returning a reactive() object from a composable will cause such destructures to lose the
          reactivity connection to the state inside the composable, while the refs will retain that
          connection.
        </li>
        <li>
          Composables should only be called synchronously in script setup or the setup() hook. In
          some cases, you can also call them in lifecycle hooks like onMounted().
        </li>
        <li>
          If you are using Options API, composables must be called inside setup(), and the returned
          bindings must be returned from setup() so that they are exposed to this and the template
          <CodeBlock :code="codeStr1" />
        </li>
        <li>
          Comparision with Mixins: There are three primary drawbacks to mixins
          <ul class="notes-points">
            <li>
              Unclear source of properties: If we use two or more mixins then it would be difficult
              to understand which elements come which mixin. This is also why we recommend using the
              refs + destructure pattern for composables: it makes the property source clear in
              consuming components.
            </li>
            <li>
              Namespace collisions: multiple mixins from different authors can potentially register
              the same property keys, causing namespace collisions. With composables, you can rename
              the destructured variables if there are conflicting keys from different composables.
            </li>
            <li>
              Implicit cross-mixin communication: multiple mixins that need to interact with one
              another have to rely on shared property keys, making them implicitly coupled. With
              composables, values returned from one composable can be passed into another as
              arguments, just like normal functions.
            </li>
            <li>
              For the above reasons, we no longer recommend using mixins in Vue 3. The feature is
              kept only for migration and familiarity reasons.
            </li>
            <li>
              <b>Renderless Components:</b> Components that only encapsulate logic and do not render
              anything by themselves - visual output is fully delegated to the consumer component
              with scoped slots. We call this type of component a Renderless Component. <br /><br />

              Renderless Components only have slots and don't any any own template content. We can
              use slot props to pass any data if required. <br /><br />

              The main advantage of composables over renderless components is that composables do
              not incur the extra component instance overhead. When used across an entire
              application, the amount of extra component instances created by the renderless
              component pattern can become a noticeable performance overhead. <br /><br />

              The recommendation is to use composables when reusing pure logic, and use components
              when reusing both logic and visual layout.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const codeStr1 = `import { useMouse } from './mouse.js'
import { useFetch } from './fetch.js'

export default {
  setup() {
    const { x, y } = useMouse()
    const { data, error } = useFetch('...')
    return { x, y, data, error }
  },
  mounted() {
    // setup() exposed properties can be accessed on this
    console.log(this.x)
  }
  // ...other options
}`;
</script>
