<template>
  <div class="mobile-header-wraper">
    <div class="mobile-header">
      <div class="icon"></div>
      <div class="text">Chicken Music</div>
      <router-link tag="div" class="mine" to="/user">
        <i class="icon-mine"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileHeaderWraper",
  data() {
    return {};
  },
  methods: {
    // handleJumpToUser() {
    //   console.log("handleJumpToUser :");
    //   this.$router.push({
    //     name: "User",
    //   });
    //   console.log("已经执行");
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable.scss";
@import "@/styles/mixin.scss";
.mobile-header-wraper {
  //   background-color: $color-background;
  .mobile-header {
    height: 44px;
    position: relative;
    // color: #ffcd32;
    color: $color-theme;
    text-align: center;
    font-size: 0px;
    .icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      @include bg-image("logo");
      background-size: 30px 32px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-large;
    }
    .mine {
      position: absolute;
      top: 0;
      right: 0;
      .icon-mine {
        display: block;
        padding: 12px;
        font-size: 20px;
        color: $color-theme;
      }
    }
  }
}
</style>
