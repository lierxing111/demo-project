<template>
  <div class="child-wrapper">
    <slot name="header"></slot>
    默认
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: "Child",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.slot-wrapper {
  background-color: #fff;
}
</style>
