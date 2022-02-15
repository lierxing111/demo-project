<template>
  <div class="position-fixed-wrapper">
    <div>1. position:fixed,如何水平居中</div>
    <!-- 宽度确定 -->
    <div class="box-one">button</div>
    <div>2. position:fixed,如何水平垂直居中</div>
    <!-- 宽度不确定, -->
    <div class="box-two" v-html="message"></div>
  </div>
</template>

<script>
export default {
  name: "PositionFixed",
  data() {
    return {
      message:
        "To see the effect of sticky positioning, select the position: sticky option and scroll this container.The element will scroll along with its container, until it is at the top of the container (or reaches the offset specified in top), and will then stop scrolling, so it stays visible.",
    };
  },
};
</script>

<style lang="scss" scoped>
.position-fixed-wrapper {
  // 宽度固定
  .box-one {
    width: 600px;
    height: 60px;
    background-color: pink;
    border-radius: 20px;
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 140px;
    text-align: center;
    line-height: 60px;
    cursor: pointer;
  }
  // 宽度不固定
  .box-two {
    background-color: gray;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
