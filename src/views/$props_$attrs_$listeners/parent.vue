<template>
  <div class="index">
    <!-- parent.vue -->
    <div>组件名上绑定的非props特性($attrs):{{ $attrs }}</div>
    <!-- <app-child v-on="$listeners" v-bind="$props"></app-child> -->
    <app-child v-bind="$props"></app-child>
  </div>
</template>
<script>
import AppChild from "./child.vue";
export default {
  name: "Parent",
  components: {
    AppChild,
  },
  props: {
    name: {
      type: String,
      default: () => {
        return "";
      },
    },
    age: {
      type: Number,
      default: () => {
        return 0;
      },
    },
  },
  data() {
    return {};
  },
  inheritAttrs: false,
  created() {},
  methods: {},
  mounted() {
    this.$emit("start1");
  },
};
</script>
<style lang="scss" scoped>
.index {
  background-color: #fff;
}
</style>
