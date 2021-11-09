import { createRouter, createWebHashHistory } from "vue-router";
// @ is an alias to /src
// import Home from "@/views/lighting_different_clolor_button";
// import Home from "@/components/HelloWorld.vue";
// import Home from "@/components/js_includes_function.vue";
// import Home from "@/components/css_calc.vue";
// import Home from "@/components/css_calc_layout.vue";
// import Form from "@/views/Form";
// import Table from "@/views/table";
import UseVuexPersistedstate from "@/views/use_vuex_persistedstate";

const routes = [
  {
    path: "/",
    name: "UseVuexPersistedstate",
    component: UseVuexPersistedstate,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
