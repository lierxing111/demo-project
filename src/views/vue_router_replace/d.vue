<template>
  <div class="d">
    <h5>d页面</h5>
    <button @click="handleBack">返回</button>
  </div>
</template>

<script>
export default {
  name: "D",
  data() {
    return {};
  },
  methods: {
    handleBack() {
      console.log("handleBack");
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.d {
  background-color: #fff;
}
</style>
