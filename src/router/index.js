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
import PraticeMobiuleWebAppLayout from "@/views/practice_mobile_web_app_page_layout";
import UserCenter from "@/views/mobile-user-center";
import Recommend from "@/views/mobile_recommend";
import Singer from "@/views/mobile_singer";
import Rank from "@/views/mobile_rank";
import Search from "@/views/mobile_search";

const routes = [
  //写demo的配置的路由
  {
    path: "/",
    name: "PraticeMobiuleWebAppLayout",
    component: PraticeMobiuleWebAppLayout,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/user",
    name: "User",
    component: UserCenter,
  },
  /** 推荐 **/
  {
    path: "/recommend",
    name: "Recommend",
    component: Recommend,
  },
  /** 歌手 **/
  {
    path: "/singer",
    name: "Singer",
    component: Singer,
  },
  /** 排行 **/
  {
    path: "/rank",
    name: "Rank",
    component: Rank,
  },
  /** 搜索 **/
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
