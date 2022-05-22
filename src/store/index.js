import { createStore, createLogger } from 'vuex';
import moduleA from './modules/moduleA';
import moduleB from './modules/moduleB';
import moduleC from './modules/moduleC';

export default createStore({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'test todo 1', done: true },
      { id: 2, text: 'test todo 2', done: false },
    ],
  },
  getters: {
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
    doneTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },
    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },
    todosCount(state) {
      return state.todos.length;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementByNum(state, payload) {
      state.count += payload;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 2000);
    },
  },
  modules: {
    a: moduleA,
    b: moduleB,
    c: moduleC,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
});
