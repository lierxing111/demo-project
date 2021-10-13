import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-plus";

import "element-plus/theme-chalk/index.css"; // 全局引入element-plus样式
import "@/styles/index.scss"; // global css

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
const ComponentContext = require.context(
  "./components",
  true,
  /\.vue$/i,
  "lazy" // lazy代表是异步组件
);
console.log("ComponentContext.keys()------", ComponentContext.keys());
const app = createApp(App);
ComponentContext.keys().forEach((componentFilePath) => {
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      componentFilePath
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );
  console.log("componentName-----", componentName);
  console.log("componentFilePath-----", componentFilePath);
  // console.log(
  //   "componentConfig.default componentConfig ",
  //   componentConfig.default,
  //   componentConfig
  //   );
  app.component(
    componentName,
    defineAsyncComponent(() => ComponentContext(componentFilePath))
  );
});

app.use(store).use(router).use(ElementUI).mount("#app");
