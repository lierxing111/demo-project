import config from "@/config";
import axios from "axios";
import router from "../router";
import store from "../store/index";
import { ElMessage } from "element-plus";
import { Promise } from "core-js";
// import { getToken } from "@/utils/auth";
// console.log(axios);
// console.log(router);
// console.log(store);
// console.log(Message);

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg) => {
  ElMessage({
    message: msg,
    duration: 1000,
    showClose: false,
  });
};
/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath,
    },
  });
};
// console.log(toLogin);

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */

const errorHandle = (status, other) => {
  switch (status) {
    //401 未登录状态，跳转到登录页
    case 401:
      toLogin();
      break;
    //403 token过期，清除token,并跳转到登录页
    case 403:
      tip("登录过期，请重新登录");
      store.commit("user/SET_TOKEN", null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip("请求的资源不存在");
      break;
    default:
      console.log(other);
      break;
  }
};
// 创建axios实例
const instance = axios.create({
  baseURL: "http://10.231.14.253:8000",
  timeout: config.timeout,
});
// console.log(instance);

// 设置post请求头  "application/json"(JSON数据格式)
// eslint-disable-next-line prettier/prettier
instance.defaults.headers.post["Content-Type"] = "application/json";
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  (config) => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作
    // const token = store.state.user.token;
    // token && (config.headers.Authorization = token);
    // if (getToken()) {
    //   config.headers.Authorization = "Bearer" + getToken();
    // }
    config.headers.Authorization =
      "Bearer " +
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYzOTk4NjIzMSwiaWF0IjoxNjM5MTIyMjMxfQ.TVxfCR86G3-FQq-acDZt85iuMREVveIp3RkUtTS8ydhe7EedOJMqw7N2uQexa07TITc-URV77iQMBdXiPam1cA";
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);
/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  (response) => {
    console.log("response : ", response);
    const code = response.status;
    if (code < 200 || code >= 300) {
      console.log(code);
      tip(response.message);
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  (error) => {
    const { response } = error;
    if (response) {
      console.log(response);
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        store.commit("app/CHANGE_NETWORK_OUTAGE", false);
      } else {
        return Promise.reject(error);
      }
    }
  }
);
export default instance;
