<template>
  <div class="row">
    <div class="col-12 mb-5">
      <h4>Vuex Examples</h4>
      <div class="mt-3">
        Count: {{ count }} <button class="btn btn-primary" @click="increment">Increment</button>
      </div>
      <div class="mt-3">
        Count: {{ count }}
        <button class="btn btn-primary" @click="incrementByFive">Increment By 5</button>
      </div>
      <div class="mt-3">
        Count: {{ count }}
        <button class="btn btn-primary" @click="addFiveToCount(5)">Add Five To Count</button>
      </div>
      <div class="mt-3">
        Count: {{ count }}
        <button class="btn btn-primary" @click="incrementLater">Increment Later</button>
      </div>
      <div class="mt-3">
        Count: {{ count }}
        <button class="btn btn-primary" @click="incrementAfterTwoSec">
          Increment After Two Sec
        </button>
      </div>
      <div class="mt-3">Count Alias: {{ countAlias }}</div>
      <div class="mt-3">Done Todos: {{ doneTodos }}</div>
      <div class="mt-3">Done Todos Count: {{ doneTodosCount }}</div>
      <div class="mt-3">Completed Todos Count: {{ completedTodosCount }}</div>
      <div class="mt-3">All Todos Count: {{ todosCount }}</div>
      <div class="mt-3">Todo By Id: {{ getById(1) }}</div>
      <div class="mt-5">
        <h5>Modules</h5>
      </div>
      <div class="mt-3">
        Count from module A: {{ aCount }}
        <button class="btn btn-primary" @click="aCountIncrement">Increment aCount</button>
      </div>
      <div class="mt-3">
        Count from module B: {{ bCount }}
        <button class="btn btn-primary" @click="bCountIncrement">Increment Module B count</button>
      </div>
      <div class="mt-3">Sum with root count: {{ sumWithRootCount }}</div>
      <div class="mt-3">Sum with root count getter: {{ sumWithRootCountGetter }}</div>
      <div class="mt-3">
        Namespaced C Count: {{ cCount }}
        <button class="btn btn-primary" @click="cIncrement()">Increment C Count</button>
        &nbsp;&nbsp;
        <button class="btn btn-primary" @click="cIncrement()">Increment C Count by commit</button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable object-curly-newline */
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    aCount() {
      return this.$store.state.a.aCount;
    },
    bCount() {
      return this.$store.state.b.count;
    },
    ...mapState({
      countAlias: 'count',
    }),
    ...mapGetters(['doneTodos', 'doneTodosCount', 'sumWithRootCount']),
    ...mapGetters({
      completedTodosCount: 'doneTodosCount',
      getById: 'getTodoById',
    }),
    todosCount() {
      return this.$store.getters.todosCount;
    },
    sumWithRootCountGetter() {
      // getter from module b, Directly, aaccessable on root getters
      return this.$store.getters.sumWithRootCount;
    },
    // Namespaced
    ...mapGetters({
      cCount: 'c/getCount',
    }),
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    aCountIncrement() {
      this.$store.commit('aIncrement');
    },
    bCountIncrement() {
      // mutation from module b. Directly, commit like root level mutation
      this.$store.commit('incrementByOne');
    },
    incrementLater() {
      this.$store.dispatch('incrementAsync');
    },
    incrementByFive() {
      this.$store.commit('incrementByNum', 5);
    },
    ...mapMutations({
      addFiveToCount: 'incrementByNum',
    }),
    ...mapActions({
      incrementAfterTwoSec: 'incrementAsync',
    }),
    // Namespaced
    ...mapMutations({
      cIncrement: 'c/increment',
    }),
    incrementCCount() {
      this.$store.commit('c/increment');
    },
  },
};
</script>
