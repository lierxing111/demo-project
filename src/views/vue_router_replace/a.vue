<template>
  <div class="a">
    <h5>a 页面</h5>
    <button @click="handleJump">jump</button>
  </div>
</template>

<script>
export default {
  name: "A",
  data() {
    return {};
  },
  methods: {
    handleJump() {
      console.log("jump");
      this.$router.push({
        name: "B",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.a {
  background-color: #fff;
}
</style>
