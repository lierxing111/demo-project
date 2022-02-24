<template>
  <div class="question-wrapper">
    <!-- 信永中和面试题 -->
    <h5>信永中和面试题</h5>
    <!-- 
        1. 原生实现一个红绿灯(黄 => 红 => 绿)交替的效果，尽可能做到最大抽象和复用 
        要求：
        (1)实现对应的DOM结构   
        (2)每个颜色交替时间为1s
    -->
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {};
  },
  methods: {
    handleRunRes() {
      async function async1() {
        console.log("async1 start");
        await async2();
        console.log("async1 end");
      }
      async function async2() {
        console.log("async2");
      }
      async1();
      setTimeout(() => {
        console.log("timeout");
      }, 0);
      new Promise(function (resolve) {
        console.log("promise1");
        resolve();
      }).then(function () {
        console.log("promise2");
      });
      console.log("script end");
      //   运行结果: "async1 start"  "async2"   "rpomise1"  "script end"  "async1 end"  "promise2"  "time out"
    },
  },
  created() {},
  mounted() {
    this.handleRunRes();
  },
};
</script>

<style lang="scss" scoped>
.question-wrapper {
  background-color: #fff;
}
</style>
