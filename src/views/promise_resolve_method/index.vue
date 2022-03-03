<template>
  <div class="promise-resolve-method">
    <!-- promise-resolve-method -->
    <h5>Promise.resolve()</h5>
    <p>
      <strong>Promise.resolve(value)方法</strong>
      返回一个以给定值解析后的Promise 对象。如果这个值是一个 promise ，那么
      <br />
      将返回这个 promise ；如果这个值是thenable（即带有"then"
      方法），返回的promise会“跟随”这个 <br />
      thenable的对象，采用它的最终状态；否则返回的promise将以此值完成。此函数将类promise对象的多层嵌
      <br />
      套展平。 <br />
      <strong>警告:</strong>要在解析为自身的thenable
      上调用Promise.resolve。这将导致无限递归，因为它试图展平无限嵌套的promise。一个例子是将它与Angular中的异步管道一起使用。
      <br />
      <strong> 语法：</strong> Promise.resolve(value); <br />
      <strong>参数：</strong>
      将被Promise对象解析的参数，也可以是一个Promise对象，或者是一个thenable。
      <br />
      <strong>返回值:</strong>
      返回一个带着给定值解析过的Promise对象，如果参数本身就是一个Promise对象，则直接返回这个Promise对象。
      <br />
    </p>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    fragment2() {
      //使用静态promise方法
      Promise.resolve("success").then(
        function (value) {
          //成功
          console.log(value);
        },
        function (value) {
          //将不会被执行
          console.log(value);
        }
      );
    },
    fragment1() {
      const promise1 = Promise.resolve(123);
      promise1.then(function (value) {
        console.log(value); // 返回的promise将以此值完成
        console.log(typeof value);
      });
    },
  },
  mounted() {
    // this.fragment1();
    this.fragment2();
  },
};
</script>
<style lang="scss">
.promise-resolve-method {
  background-color: #fff;
}
</style>
