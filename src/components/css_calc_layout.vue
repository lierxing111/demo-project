<template>
  <div class="wrapper">
    <div class="header"></div>
    <div class="content">
      <div class="main"></div>
      <div class="accessory"></div>
    </div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {
  name: "CssCalcLayout",
  data() {
    return {
      msg: "111",
    };
  },
  created() {
    console.log("1111");
  },
};
</script>

<style lang="scss" scoped>
body {
  padding: 20px;
  background-color: #fff;
  .wrapper {
    height: calc(100vh - 78.4px - 60px - 20px * 2);
    // height: 400px;
    padding: 20px;
    width: calc(100% - 20px * 2);
    // clear: both;
    .header {
      border: 2px solid blue;
      padding: 5px;
      width: calc(100% - (2px + 5px) * 2);
      height: 50px;
    }
    .content {
      display: flex;
      height: calc(100% - (50px + 5px * 2 + 2px * 2));
      .main {
        align-items: flex-start;
        border: 10px solid #143124;
        padding: 20px;
        margin-right: 20px;
        width: calc(75% - (10px + 20px) * 2);
        height: calc(100% - (10px + 20px) * 2);
        // float: left;
      }
      .accessory {
        border: 10px solid chartreuse;
        padding: 20px;
        // float: right;
        align-items: flex-end;
        width: calc(25% - (10px + 20px) * 2 - 20px);
        height: calc(100% - (10px + 20px) * 2);
      }
    }
    .footer {
      width: calc(100% - (8px + 20px) * 2);
      margin: auto;
      height: 50px;
      position: fixed;
      left: 28px;
      right: 28px;
      bottom: 0;
      background-color: yellow;
    }
  }
}
</style>
