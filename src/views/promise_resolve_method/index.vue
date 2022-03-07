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
    fragment7() {
      // thenable 在 callback之后抛出异常
      var thenable = {
        then: function (resolve, reject) {
          console.log(reject);
          // console.log(object);
          resolve("success");
          throw new TypeError("typeError");
        },
      };
      var p1 = Promise.resolve(thenable);
      p1.then(
        (v) => {
          console.log(v);
        },
        (v) => {
          // 此处不会执行
          console.log(v);
        }
      );
    },
    fragment6() {
      // thenable在callback之前抛出异常
      var tnenable = {
        then: function (resolve, reject) {
          console.log("reject", reject);
          throw new TypeError("throwing");
          // resolve("success");
        },
      };
      var p1 = Promise.resolve(tnenable);
      // console.log("p1", p1);
      p1.then(
        (v) => {
          // 此处不执行
          console.log(v);
        },
        (v) => {
          console.log(v);
        }
      );
    },
    fragment5() {
      // resolve一个thenable对象
      var p1 = Promise.resolve({
        then: function (onFulfill, onReject) {
          console.log("onReject", onReject);
          onFulfill("fulfilled");
        },
      });
      console.log(p1 instanceof Promise); // true
      p1.then(
        (v) => {
          console.log(v);
        },
        (v) => {
          // 此处不会执行
          console.log(v);
        }
      );
    },
    fragment4() {
      // resolve另外一个promise对象
      var original = Promise.resolve(33);
      //console.log(original instanceof Promise); // true
      var current = Promise.resolve(original);
      current.then((value) => {
        console.log(value);
      });
      console.log("original === current ? " + (original === current));
      /**
       *打印顺序如下：这里有个同步异步先后执行的区别。日志顺序颠倒其实是由于异步地调用then 方法。https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#return_value
       * origin === current ? true
       * 33
       **/
    },
    fragment3() {
      // resolve一个数组
      const promise1 = Promise.resolve([1, 2, 3]);
      // console.log(promise1 instanceof Promise); // true
      promise1.then(function (value) {
        console.log(value[0]); // 1
      });
    },
    fragment2() {
      //使用静态promise方法
      Promise.resolve("success").then(
        function (value) {
          //成功
          console.log(value); // success
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
        console.log(value); // 123 返回的promise将以此值完成
        console.log(typeof value); // "string"
      });
    },
    fragment0() {
      //警告：不要在解析为自身的thenable 上调用Promise.resolve。这将导致无限递归，因为它试图展平无限嵌套的promise。
      let thenable = {
        then: (resolve, reject) => {
          console.log("reject", reject);
          // resolve(thenable); // 死循环
        },
      };
      Promise.resolve(thenable);
    },
  },
  mounted() {
    // this.fragment0();
    // this.fragment1();
    // this.fragment2();
    // this.fragment3();
    // this.fragment4();
    // this.fragment5();
    // this.fragment6();
    this.fragment7();
  },
};
</script>
<style lang="scss">
.promise-resolve-method {
  background-color: #fff;
}
</style>
