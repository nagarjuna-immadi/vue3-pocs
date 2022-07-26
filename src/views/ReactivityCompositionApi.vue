<template>
  <div>
    Reactivity Composition API <br />
    Number count: {{ count + 1 }} <br /><br />

    Count Obj: {{ countObj.count + 1 }} <br /><br />

    User age (Works, just reading value): {{ user.age }} <br />
    User age (Works, just reading value): {{ user.age.value }} <br />
    User age in expression(Don't work): {{ user.age + 1 }} <br />
    User age in expression(Works): {{ user.age.value + 1 }} <br />

    User age(Destructured prop): {{ userAge }} <br />
    User age(Destructured prop, works in expression): {{ userAge + 1 }} <br />
    User age(Destructured prop, .value don't work): {{ userAge.value }} <br />

    <h3>reactive() method</h3>
    countObjR.count: {{ countObjR.count }} <br />
    countR: {{ countR }} <br />
  </div>
</template>

<script setup>
import {
  onRenderTracked, onRenderTriggered, ref, reactive,
} from 'vue';

// Primitive data type
const count = ref(0);
console.log('count', count.value); // 0

// Reactive Object
const countObj = ref({ count: 1 });
countObj.value.count += 1;
console.log('count', countObj.value.count); // 2

// Normal Object reactive peoperties
const user = {
  age: ref(25),
};

console.log('user', user); // Object
console.log('user.age', user.age); // RefImpl object
console.log('user.age.value', user.age.value); // 25

// Make nested reactive property as top-level by using destructing to enjoy ref-unwrapping
const { age: userAge } = user;

// Reactivity Debugging
onRenderTracked((event) => {
  console.log('onRenderTracked event', event);
});

onRenderTriggered((event) => {
  console.log('onRenderTriggered event', event);
});

// reactive() method
const countObjR = reactive({ count: 0 });
console.log('countObjR', countObjR);
console.log('countObjR.count', countObjR.count);
countObjR.count++;
console.log('countObjR.count', countObjR.count);

let countR = reactive(0);
countR++;
console.log('countR', countR);
</script>
