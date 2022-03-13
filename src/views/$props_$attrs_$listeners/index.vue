<template>
  <div class="index">
    <!-- index -->
    <p>
      <a href="https://blog.csdn.net/xueyue616/article/details/105379009">
        v-bind="$props"、v-bind="$attrs"、v-on="$listeners"
      </a>
      <br />
      官网介绍: https://cn.vuejs.org/v2/api/#vm-props <br />
      官网介绍: https://cn.vuejs.org/v2/api/#vm-attrs <br />
      官网介绍: https://cn.vuejs.org/v2/api/#inheritAttrs <br />
    </p>
    <h5>props、属性、事件传递</h5>
    <app-parent
      test="123"
      :name="name"
      :age="age"
      v-on="{ start1: say1, start2: say2 }"
    ></app-parent>
  </div>
</template>
<script>
import AppParent from "./parent.vue";
export default {
  name: "Index",
  components: {
    AppParent,
  },
  data() {
    return {
      name: "传递父组件的值",
      age: 18,
    };
  },
  created() {},
  methods: {
    say1() {
      console.log("第一个.......");
    },
    say2() {
      console.log("第二个......");
    },
  },
};
</script>
<style lang="scss" scoped>
.index {
  background-color: #fff;
}
</style>
