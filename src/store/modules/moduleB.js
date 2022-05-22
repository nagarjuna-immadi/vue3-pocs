export default {
  state: () => ({
    count: 0,
  }),
  mutations: {
    incrementByOne(state) {
      state.count++;
    },
  },
  actions: {},
  getters: {
    sumWithRootCount(state, getters, rootState) {
      return state.count + rootState.count;
    },
  },
};
