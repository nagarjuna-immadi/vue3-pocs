<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Computed Properties</h4>
      <ul class="notes-points">
        <li>
          Computed properties are cached based on their reactive dependencies. A computed property
          will only re-evaluate when some of its reactive dependencies have changed. It means as
          long as the reactive dependencies not changed, computed property will immediately return
          the previously computed result without having to run the getter function again.
        </li>
        <li>A method invocation will always run the function whenever a re-render happens.</li>
        <li>
          For simple computations, we can use eiter method or computed property. But, if it is
          complex computation, then we have to use computed property to prevent unnecessary
          computetaion while the reactive dependencies not changes.
        </li>
        <li>
          Computed propery should act like a getter for a derived state. We should avoid upading
          reactive properties through computed properties which cause the side effects or infinite
          computations.
        </li>
        <li>
          In composition api, computed properties can be created using computed() method.
          <CodeBlock :code="codeStr" />
        </li>
        <li>
          Computed properties are by default getter-only. If you attempt to assign a new value to a
          computed property, you will receive a runtime warning. In the rare cases where you need a
          "writable" computed property, you can create one by providing both a getter and a setter.
          <br /><br />
          Full Name: {{ fullName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const codeStr = `const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})`;

const firstName = ref('John');
const lastName = ref('Doe');

const fullName = computed({
  // getter
  get() {
    return `${firstName.value} ${lastName.value}`;
  },
  // setter
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(' ');
  },
});

fullName.value = 'Nagarjuna Immadi';
</script>
