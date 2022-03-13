<template>
  <div class="index">
    <!-- 子组件 -->
    <div>父组件传过来的名称: {{ name }}</div>
    <div>父组件传递过来的年龄： {{ age }}</div>
  </div>
</template>
<script>
export default {
  name: "Child",
  props: ["name", "age"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    // this.$emit("start2");
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.index {
  background-color: #fff;
}
</style>
