import { createRouter, createWebHashHistory } from "vue-router";
import Login from "@/views/login.vue";
// @ is an alias to /src
// import Home from "@/views/lighting_different_clolor_button";
// import Home from "@/components/HelloWorld.vue";
// import Home from "@/components/js_includes_function.vue";
// import Home from "@/components/css_calc.vue";
// import Home from "@/components/css_calc_layout.vue";
// import Form from "@/views/Form";
// import Table from "@/views/table";
// import UseVuexPersistedstate from "@/views/use_vuex_persistedstate";
// import FlexLayout from "@/views/flex-layout";
// import DiceFlexLayout from "@/views/dice_flexLayout"; // 骰子的布局
// import UseingAxios from "@/views/useing_axios";
// import PercentHeightInherit from "@/views/percent_height_is_inherit";
import A from "@/views/vue_router_replace/a.vue";
import B from "@/views/vue_router_replace/b.vue";
import C from "@/views/vue_router_replace/c.vue";
import D from "@/views/vue_router_replace/d.vue";

const routes = [
  //写demo的配置的路由
  {
    path: "/",
    name: "A",
    component: A,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/b",
    name: "B",
    component: B,
  },
  {
    path: "/c",
    name: "C",
    component: C,
  },
  {
    path: "/d",
    name: "D",
    component: D,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
