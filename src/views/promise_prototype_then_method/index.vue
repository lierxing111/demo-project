<template>
  <div class="promise-prototype-then-metnod">
    <h5>
      <a
        href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"
        >Promise.prototype.then()</a
      >
    </h5>
    <p>
      then() 方法返回一个 Promise (en-US)。它最多需要有两个参数：Promise
      的成功和失败情况的回调函数。
    </p>
  </div>
</template>
<script>
export default {
  name: "PromiseProtoTypeThen",
  data() {
    return {};
  },
  methods: {
    fragment7() {
      //实际上，捕获 rejected promise 的需求经常大于使用 then 的两种情况语法，比如下面这样的
      console.log("fragment7");
      new Promise(() => {
        // 使 .then() 返回一个 rejected promise
        throw new TypeError("error");
      })
        .catch((error) => {
          console.log("error.message", error.message);
        })
        .then(() => {
          console.log(
            "I am always called evFen if the prior then's promise rejects"
          );
        });
    },
    fragment6() {
      // 当一个值只是从一个 then 内部返回时，它将等价地返回 Promise.resolve(<由被调用的处理程序返回的值>)。
      //   console.log(1111);
      var promise1 = new Promise(function (resolve, reject) {
        console.log(resolve);
        console.log(reject);
        resolve(1);
      });
      promise1
        .then((value) => {
          console.log("第一个then", value);
          return value + 1;
        })
        .then((value) => {
          console.log("第二个then", value, " - A synchronous value works");
          return value;
        });
      promise1.then((value) => {
        console.log("第三个then", value);
      });
    },
    fragment5() {
      // 链式调用,then 方法返回一个 Promise 对象，其允许方法链
      // 以传递一个匿名函数给 then，并且，如果它返回一个 Promise，一个等价的 Promise 将暴露给后续的方法链。
      //下面的代码片段使用 setTimout 函数来模拟异步代码操作
      var resolvePromise = Promise.resolve("foo");
      // 1. 接收 "foo" 并与 "bar" 拼接，并将其结果做为下一个 resolve 返回。
      var thenPromise1 = resolvePromise.then(function (str) {
        console.log(str);
        return new Promise((resolve, reject) => {
          // console.log(resolve);
          console.log(reject);
          setTimeout(() => {
            str += "bar";
            resolve(str);
          }, 1);
        });
      });
      var thenPromise2 = thenPromise1.then(function (str) {
        // 2. 接收 "foobar", 放入一个异步函数中处理该字符串
        // console.log(str);
        setTimeout(function () {
          str += "baz";
          console.log(str);
        }, 1);
        return str;
      });
      var thenPromise3 = thenPromise2.then(function (str) {
        // 打印本节中代码将如何运行的帮助消息，
        // 字符串实际上是由上一个回调函数之前的那块异步代码处理的。
        console.log(
          "Last Then:  oops... didn't bother to instantiate and return " +
            "a promise in the prior then so the sequence may be a bit " +
            "surprising"
        );
        // 注意 `string` 这时不会存在 'baz'。
        // 因为这是发生在我们通过setTimeout模拟的异步函数中。
        console.log(str);
      });
      setTimeout(() => {
        console.log(
          "resolvePromise === thenPromise1",
          resolvePromise === thenPromise1
        );
        console.log(
          "thenPromise1 === thenPromise2",
          thenPromise1 === thenPromise2
        );
        console.log(
          "thenPromise2 === thenPromise3",
          thenPromise2 === thenPromise3
        );
      }, 1000);
    },
    fragment4() {
      // 演示 then 方法的异步性的例子
      const resolvePromise = Promise.resolve(33);
      let thenPromise = resolvePromise.then((value) => {
        console.log(
          "this gets called after the end of the main stack. the value received and returned is:",
          +value
        );
        return value;
      });
      // instantly logging the value of thenPromise
      console.log(thenPromise);
      // using setTimeout we can postpone the execution of a function to the moment the stack is empty
      setTimeout(() => {
        console.log(thenPromise);
        console.log(
          "resolvePromise === thenPromise ",
          resolvePromise === thenPromise
        );
      });
    },
    fragment3() {
      /**
       * 如果调用 then 的 Promise 的状态（fulfillment 或 rejection）发生改变，
       * 但是 then 中并没有关于这种状态的回调函数，那么 then 将创建一个没有经过回调函数处理的新 Promise 对象，
       * 这个新 Promise 只是简单地接受调用这个 then 的原 Promise 的终态作为它的终态。
       * **/
      var promise1 = new Promise((resolve, reject) => {
        console.log(resolve);
        console.log(reject);
        resolve("success");
      });
      var returnPromise = promise1.then();
      console.log(promise1);
      /**
       * 输出结果:
       *[[Prototype]]: Promise
       *[[PromiseState]]: "fulfilled"
       *[[PromiseResult]]: "success"
       * **/
      console.log(returnPromise);
      /**
       * 输出结果:
       *[[Prototype]]: Promise
       *[[PromiseState]]: "fulfilled"
       *[[PromiseResult]]: "success"
       * **/
      setTimeout(() => {
        console.log("promise1 === returnPromise", promise1 === returnPromise);
      });
    },
    fragment2() {
      // 如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数，那么 then 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。
      var promise1 = new Promise((resolve, reject) => {
        console.log(resolve);
        console.log(reject);
        reject();
      });
      promise1.then(
        (value) => {
          //此处不执行
          console.log(value);
        },
        (value) => {
          console.log(value); //  undefined
        }
      );
      console.log(promise1);
      /**
       * 输出结果:
       * [[Prototype]]: Promise
       * [[PromiseState]]: "rejected"
       * [[PromiseResult]]: undefined
       * **/
    },
    fragment1() {
      // 如果忽略针对某个状态的回调函数参数，或者提供非函数 (nonfunction) 参数，那么 then 方法将会丢失关于该状态的回调函数信息，但是并不会产生错误。
      var promise1 = new Promise((resolve, reject) => {
        console.log(resolve);
        console.log(reject);
        resolve();
      });
      promise1.then(
        (value) => {
          console.log(value); // undefined
        },
        (value) => {
          // 此处不执行
          console.log(value);
        }
      );
      console.log(promise1 instanceof Promise);
      console.log(promise1);
      /**
       * [[Prototype]]: Promise
       * [[PromiseState]]: "fulfilled"
       * [[PromiseResult]]: undefined
       * **/
    },
  },
  created() {
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
<style lang="scss" scoped>
.promise-prototype-then-metnod {
  background-color: #fff;
}
</style>
