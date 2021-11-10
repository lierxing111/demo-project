import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; // 参考地址:  https://segmentfault.com/a/1190000022393039

export default createStore({
  state: {
    count: 100,
  },
  mutations: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage, // 也可以存到 window.localStorage
    }),
  ],
});
