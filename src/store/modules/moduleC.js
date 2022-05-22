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
