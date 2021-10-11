import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-plus";
import "element-plus/theme-chalk/index.css"; // 全局引入element-plus样式
import "@/styles/index.scss"; // global css

createApp(App).use(store).use(router).use(ElementUI).mount("#app");
