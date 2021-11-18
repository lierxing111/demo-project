import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"; // 参考地址:  https://segmentfault.com/a/1190000022393039

const modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach((key) => {
  modules[key.replace(/(modules|\/|\.|js)/g, "")] = {
    ...files(key).default,
    namespaced: true,
  };
});

console.log("modules => ", modules);
const PERSIST_PATHS = ["count.count"]; //例如 ["count.count","user.username"]
export default createStore({
  modules,
  plugins: [
    createPersistedState({
      paths: PERSIST_PATHS, // 部分持久化
      storage: window.sessionStorage, // 也可以存到 window.localStorage
    }),
  ],
});
