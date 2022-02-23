<template>
  <div class="question-wrapper">
    <!-- 信永中和面试题 -->
    <h5>信永中和面试题</h5>
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
