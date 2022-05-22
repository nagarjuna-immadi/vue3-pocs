<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Vuex</h4>
      <ul class="notes-points">
        <li><router-link to="/vuex/examples">Vuex Examples</router-link></li>
        <li>Vuex is a state management pattern + library for Vue.js applications.</li>
        <li><img src="../assets/vuex.png" alt="vuex" /></li>
        <li>"store" is basically a container that holds your application state.</li>
        <li>
          Vuex store is different from plain global object in two things.
          <ul>
            <li>Vuex store is reactive</li>
            <li>
              Vuex store cann't be mutated directly. The only way to change a store's state is by
              explicitly committing mutations. This ensures every state change leaves a track-able
              record, and enables tooling that helps us better understand our applications. Simply
              to say, we can track which mutation happend from which component or how the state
              change happend.
            </li>
          </ul>
        </li>
        <li>
          we can access the state like below in main.js file using store import,
          <CodeBlock :code="codeStr1"></CodeBlock>
        </li>
        <li>
          we can access the store in components like using $store
          <CodeBlock :code="codeStr2"></CodeBlock>
        </li>
        <li>
          The vuex store data follows the same rules as a component instance data. It must be a
          plain object.
        </li>
        <li>
          using 'mapState', we can map the store state propeties to computed properties.
          <CodeBlock :code="codeStr3"></CodeBlock>
        </li>
        <li><b>Getters: </b>Getter is a derived state computed based on store state</li>
        <li>
          Getter receive state as first argument
          <CodeBlock :code="codeStr4"></CodeBlock>
          We can access one getter in another getter using 'getters' as second argument.
        </li>
        <li>
          Getter can be accessed in component using dot notation like object properties, or using
          mapGetter helper function
          <CodeBlock :code="codeStr5"></CodeBlock>
          Here mapGetters is used two times. No issue. Can be used.
        </li>
        <li>
          Getters accept arguments also.
          <CodeBlock :code="codeStr6"></CodeBlock>
        </li>
        <li>
          <b>Mutations: </b>The only way to actually change state in a Vuex store is by committing a
          mutation.
        </li>
        <li>
          Vuex mutations are very similar to events: each mutation has a string type and a handler.
        </li>
        <li>
          We can send payload to mutation
          <CodeBlock :code="codeStr7"></CodeBlock>
          payload can be anything number, string, object or array.
        </li>
        <li>
          An alternative way to commit a mutation is by directly using an object that has a type
          property
          <CodeBlock :code="codeStr8"></CodeBlock>
        </li>
        <li>
          We can use constants for mutation names,
          <CodeBlock :code="codeStr9"></CodeBlock>
        </li>
        <li>
          Mutations must be synchronous. We should not do any asynchronous operations in mutation
          handlers
        </li>
        <li>
          Using 'mapMutations' helper we can map store mutations to component methods.\
          <CodeBlock :code="codeStr10"></CodeBlock>
        </li>
        <li>
          <b>Actions: </b>Actions are for doing asynchronous operations and committing mutations.
          Below is a sample action,
          <CodeBlock :code="codeStr11"></CodeBlock>
          Action handlers receive a context object which exposes the same set of methods/properties
          on the store instance, so you can call context.commit to commit a mutation, or access the
          state and getters via context.state and context.getters.
        </li>
        <li>
          We can even call other actions with context.dispatch. Context object is not the store
          instance itself. <br />
          In practice, we often use ES6 argument destructuring to simplify the code,
          <CodeBlock :code="codeStr12"></CodeBlock>
        </li>
        <li>
          We can have to dispatch the actions
          <CodeBlock :code="codeStr13"></CodeBlock>
        </li>
        <li>
          We can access the actions in component like below, using mapActions or by $store
          <CodeBlock :code="codeStr14"></CodeBlock>
        </li>
        <li>
          We can make action async and use await to know when it is done
          <CodeBlock :code="codeStr15"></CodeBlock>
          Also, we can wrap action into a promise and use .then on dispatch to know when it is done.
          <CodeBlock :code="codeStr16"></CodeBlock>
        </li>
        <li>Actions also take the payload just like mutations</li>
        <li>
          The helper functions mapActions, mapGetters, mapMutations, mapState accept both array and
          object as argument to support same name mapping and alias name mapping.<br /><br />
          ...mapGetters(['doneTodos', 'doneTodosCount']) // for same name mapping <br />
          ...mapGetters({ completedTodosCount: 'doneTodosCount', getById: 'getTodoById', }) // for
          aliased name mapping
        </li>
        <li>
          'mapState' and 'mapGetters' are spreaded to computed propeties. <br />
          'mapMutations' and 'mapActions' are spreaded to methods. <br />
        </li>
        <li>
          <b>Modules: </b>Vuex allows us to divide our store into modules. Each module can contain
          its own state, mutations, actions, getters, and even nested modules
        </li>
        <li>
          If two modules have same state names we can access by referring module name.
          <CodeBlock :code="codeStr17"></CodeBlock>
        </li>
        <li>
          By default, actions, mutations and getters are registered under the global namespace -
          this allows multiple modules to react to the same action/mutation type. So, we must be
          careful not to define two getters or mutations or actions with the same name in different,
          non-namespaced modules, resulting in an error.
        </li>
        <li>
          <b>Namespacing: </b>If you want your modules to be more self-contained or reusable, you
          can mark it as namespaced with <b>namespaced: true</b>. When the module is registered, all
          of its getters, actions and mutations will be automatically namespaced based on the path
          the module is registered at.
        </li>
        <li>
          Namespaced getters, mutations can be accessed like below,
          <CodeBlock :code="codeStr18"></CodeBlock>
        </li>
        <li>
          rootState and rootGetters are passed as the 3rd and 4th arguments to getter functions, and
          also exposed as properties on the context object passed to action functions. <br />
          To dispatch actions or commit mutations in the global namespace, pass { root: true } as
          the 3rd argument to dispatch and commit
          <CodeBlock :code="codeStr19"></CodeBlock>
        </li>
        <li>
          When binding a namespaced module to components with the mapState, mapGetters, mapActions
          and mapMutations helpers, we can pass the module namespace string as the first argument to
          the helpers so that all bindings are done using that module as the context.
          <CodeBlock :code="codeStr20"></CodeBlock>
        </li>
        <li>
          Furthermore, you can create namespaced helpers by using createNamespacedHelpers. It
          returns an object having new component binding helpers that are bound with the given
          namespace value
          <CodeBlock :code="codeStr21"></CodeBlock>
        </li>
        <li>
          <b>Composition API: </b>To access the store within the setup hook, you can call the
          useStore function. This is the equivalent of retrieving this.$store within a component
          using the Option API
          <CodeBlock :code="codeStr22"></CodeBlock>
        </li>
        <li>
          <b>Plugins: </b> Vuex stores accept the plugins option that exposes hooks for each
          mutation. A Vuex plugin is simply a function that receives the store as the only argument
          <CodeBlock :code="codeStr23"></CodeBlock>
        </li>
        <li>We can commit mutations from plugin also using store.commit</li>
        <li>
          Vuex comes with a logger plugin for common debugging usage
          <CodeBlock :code="codeStr24"></CodeBlock>
        </li>
        <li>
          <b>Strict Mode: </b>In strict mode, whenever Vuex state is mutated outside of mutation
          handlers, an error will be thrown. This ensures that all state mutations can be explicitly
          tracked by debugging tools.
          <CodeBlock :code="codeStr25"></CodeBlock>
        </li>
        <li>
          <b>Form Handling: </b> when using v-model and bind to state properties, it tries to update
          store directly and end up in error. <br />
          To deal with it is binding the input's value and call a method on the input or change
          event.
          <CodeBlock :code="codeStr26"></CodeBlock>
          <b>Two-way Computed Property: </b>The above is quite a bit more verbose than v-model +
          local state, and we lose some of the useful features from v-model as well. An alternative
          approach is using a two-way computed property with a setter
          <CodeBlock :code="codeStr27"></CodeBlock>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
/* eslint-disable quotes */
const codeStr27 = `// template
<input v-model="message">

// component
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}`;
const codeStr26 = `// template
<input :value="message" @input="updateMessage">

// component script
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}

// store
mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
}`;
const codeStr25 = `const store = createStore({
  // ...
  strict: process.env.NODE_ENV !== 'production'
})`;
const codeStr24 = `import { createStore, createLogger } from 'vuex';
export default createStore({
  ....
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});`;
const codeStr23 = `const myPlugin = (store) => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of { type, payload }.
  })
}

const store = createStore({
  // ...
  plugins: [myPlugin]
})`;
const codeStr22 = `import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    return {
      // access a state in computed function
      count: computed(() => store.state.count),

      // access a getter in computed function
      double: computed(() => store.getters.double),

      // access a mutation
      increment: () => store.commit('increment'),

      // access an action
      asyncIncrement: () => store.dispatch('asyncIncrement')
    }
  }
}`;
const codeStr21 = `import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default {
  computed: {
    // look up in 'some/nested/module'
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // look up in 'some/nested/module'
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}`;
const codeStr20 = `computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  }),
  ...mapGetters('some/nested/module', [
    'someGetter', // -> this.someGetter
    'someOtherGetter', // -> this.someOtherGetter
  ])
},
methods: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}`;
const codeStr19 = `modules: {
  foo: {
    namespaced: true,

    getters: {
      // getters is localized to this module's getters
      // you can use rootGetters via 4th argument of getters
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
        rootGetters['bar/someOtherGetter'] // -> 'bar/someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },

    actions: {
      // dispatch and commit are also localized for this module
      // they will accept root option for the root dispatch/commit
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'
        rootGetters['bar/someGetter'] // -> 'bar/someGetter'

        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }
  }
}`;
const codeStr18 = `// store
export default {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  getters: {
    getCount(state) {
      return state.count;
    },
  },
};

// Accessing getters in component
computed: {
  ...mapGetters({
    cCount: 'c/getCount',
  }),
}

// Accessing mutations in component
methods: {
  ...mapMutations({
    cIncrement: 'c/increment',
  }),
  incrementCCount() {
    this.$store.commit('c/increment');
  },
}`;
const codeStr17 = `computed: {
  count() {
    // root state count
    return this.$store.state.count;
  },
  bCount() {
    // module B count
    return this.$store.state.b.count;
  },
}`;
const codeStr16 = `actions: {
  actionA ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  }
}`;
const codeStr15 = `actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // wait for actionA to finish
    commit('gotOtherData', await getOtherData())
  }
}`;
const codeStr14 = `methods: {
  incrementLater() {
    this.$store.dispatch('incrementAsync');
  },
  ...mapActions({
    incrementAfterTwoSec: 'incrementAsync',
  }),
},`;
const codeStr13 = `this.$store.dispatch('increment')`;
const codeStr12 = `actions: {
  increment ({ commit }) {
    commit('increment')
  }
}`;
const codeStr11 = `const store = createStore({
  ...
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})`;
const codeStr10 = `methods: {
  ...mapMutations({
    addFiveToCount: 'incrementByNum',
  }),
},

// template
<button class="btn btn-primary" @click="addFiveToCount(5)">Add Five To Count</button>`;
const codeStr9 = `// mutation-types.js
export const SOME_MUTATION = 'someMutation'

// store.js
mutations: {
  [SOME_MUTATION] (state) {
    // mutate state
  }
}`;
const codeStr8 = `store.commit({
  type: 'increment',
  amount: 10
})

mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}`;
const codeStr7 = `// Store
mutations: {
  incrementByNum(state, payload) {
    state.count += payload;
  },
},

// In component
methods: {
  incrementByFive() {
    this.$store.commit('incrementByNum', 5);
  },
},

// In template
<button class="btn btn-primary" @click="incrementByFive">Increment By 5</button>`;
const codeStr6 = `// Store
getters: {
  getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
}

// component script
...mapGetters({
  getById: 'getTodoById',
}),

// template
<div class="mt-3">Todo By Id: {{ getById(1) }}</div>`;
const codeStr5 = `computed: {
  ...mapGetters(['doneTodos', 'doneTodosCount']),
  ...mapGetters({
    completedTodosCount: 'doneTodosCount',
  }),
  // Accessed getter like object prop
  todosCount() {
    return this.$store.getters.todosCount;
  },
},`;
const codeStr4 = `getters: {
  doneTodos(state) {
    return state.todos.filter((todo) => todo.done);
  },
  // Access one getter in another
  doneTodosCount(state, getters) {
    return getters.doneTodos.length;
  },
}`;
const codeStr3 = `computed: {
  ...mapState({
    countAlias: 'count',
  }),
},`;
const codeStr2 = `export default {
  ...
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    }
  }
};`;
const codeStr1 = `import store from './store';

app.use(store);

store.commit('increment');
console.log('store count', store.state.count);
`;
</script>
