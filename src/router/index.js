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
// import PositionFixed from "@/views/position_fixed";
// import MethodsComputedDifference from "@/views/methods_and_computed_difference";
// import FlexGrowFlexShinkFlexBasis from "@/views/flex_grow&flex_shink&flex_basis";
// import Question from "@/views/question";
// import MacroTaskMicroTaskEventloop from "@/views/macroTask_microTask_eventLoop";
// import PromiseCatchMethods from "@/views/promise_catch_methods";
// import ArrayRemoveRepeat from "@/views/array_remove_repeat";
// import es6NewProperty from "@/views/es6_new_property";
// import PromiseResolveMethod from "@/views/promise_resolve_method";
import PromisePrototypeThenMethod from "@/views/promise_prototype_then_method";

const routes = [
  //写demo的配置的路由
  {
    path: "/",
    name: "PromisePrototypeThenMethod",
    component: PromisePrototypeThenMethod,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
