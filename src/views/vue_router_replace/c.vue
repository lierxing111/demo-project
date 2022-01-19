<template>
  <div class="c">
    <h5>c页面</h5>
    <button @click="handleJump">jump</button>
    <button @click="handleBack">返回</button>
  </div>
</template>

<script>
export default {
  name: "C",
  data() {
    return {};
  },
  methods: {
    handleJump() {
      // push
      //   this.$router.push({
      //     name: "D",
      //   });
      // replace
      this.$router.replace({
        name: "D",
      });
    },
    handleBack() {
      console.log("返回");
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.c {
  background-color: #fff;
}
</style>
