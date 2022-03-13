<template>
  <div class="v-on">
    <!-- v-on 如何绑定多个事件？ -->
    <!-- 可以通过 v-on 传入对象来绑定多个事件 -->
    <!-- 单事件绑定 -->
    <div>单事件绑定：<input type="text" @click="onClick" /></div>
    <!-- 多事件绑定 -->
    <div>
      多事件绑定：<input
        type="text"
        v-on="{ input: onInput, focus: onFocus, blur: onBlur }"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "v-on",
  data() {
    return {};
  },
  created() {},
  methods: {
    onBlur() {
      console.log("onBlur");
    },
    onFocus() {
      console.log("onFouce");
    },
    onInput() {
      console.log("onInput");
    },
    onClick() {
      console.log("onClick");
    },
  },
};
</script>
<style lang="scss" scoped>
.v-on {
  background-color: #fff;
}
</style>
