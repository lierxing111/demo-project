<template>
  <div class="b">
    <h5>b页面</h5>
    <button @click="handleClick">jump</button>
  </div>
</template>

<script>
export default {
  name: "B",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log("jump");
      // replace
      this.$router.replace({
        name: "C",
      });
      // push
      //   this.$router.push({
      //     name: "C",
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
.b {
  background-color: #fff;
}
</style>
