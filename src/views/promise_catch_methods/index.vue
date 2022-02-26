<template>
  <div class="promise-catch-methods">
    <p>
      <a
        style="text-decoration: none"
        href="https://blog.csdn.net/weixin_44776206/article/details/109402410"
        >关于Promise.catch()错误捕获机制的理解</a
      >
    </p>
    <p>
      1. 关于catch方法MDN的描述是这样的 <br />
      .catch方法在内部也是调用的Promise.prototype.then方法中的reject状态下的方法，也就是calling
      obj.catch(onRejected)内部calls obj.then(undefined, onRejected) <br />
      它返回了一个失败的promise，以及返回一个参数作为一个失败理由。值得注意的是这里返回的是一个已定型的promise，这个过程是promise从pending到reject的改变过程<br />
      pyp2.如果 Promise
      状态已经变成resolved，再抛出错误是无效的。就是catch是从pending到reject的状态改变，但是一个promise一旦resolve以后，状态就凝固了，无法再发生变化，因此会被忽略。
    </p>
  </div>
</template>
<script>
export default {
  name: "PromiseCatchMethods",
  data() {
    return {};
  },
  methods: {
    fragment5() {
      // Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。
      const p1 = Promise.reject("111");
      const p2 = Promise.reject("222");
      const p3 = Promise.resolve("222");
      Promise.race([p1, p2, p3])
        .then((res) => {
          console.log("res:", res);
        })
        .catch((err) => {
          console.log("err:", err);
        });
    },
    fragment4() {
      /**
       *值得注意的是，返回的数组结果顺序不会改变，即使P2的返回要比P1的返回快，顺序依然是P1，P2
       * Promise.all成功返回成功数组,
       * 失败返回失败数据,一但失败就不会继续往下走
       ***/
      const p1 = Promise.resolve("aaa");
      const p2 = Promise.resolve("bbb");
      const p3 = Promise.reject("ccc");
      const p4 = Promise.resolve("ddd");
      Promise.all([p1, p2, p3, p4])
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /***
     *promise 错误捕获和try...catch一样会冒泡到外层。
     *promise的错误抛出后会一直传递到最外层，直到被捕获；当catch捕获错误以后，返回的还是一个promise对象，可以继续链式调用。
     **/
    fragment3() {
      const p1 = new Promise((resolve) => {
        // console.log(object);
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("失败了"));
        }, 3000);
      });
      p1.then(() => {
        return p2;
      })
        .then(() => {
          // 这里的代码不会执行
          console.log("第二个then执行了");
        })
        .catch((e) => {
          console.log("第一个e===", e);
        })
        .then(() => {
          // 当catch捕获错误以后，返回的还是一个promise对象，可以继续链式调用
          console.log("第三个then执行了");
        })
        .catch((e) => {
          console.log("第二个e===", e);
        });
    },
    fragment2() {
      // 错误捕获
      /**
       * 先来看看try...catch 语句的错误捕获机制：当多层嵌套try...catch出现时，内部的错误抛出会被最近一个catch ，直到最外层。当错误被内部的catch捕获后，就失效了。
       ***/
      try {
        try {
          throw new Error("oop2");
        } catch (error) {
          console.log("inner", error.message);
          throw error.message; // 这里已经捕获到了异常，这个异常就失效了；如果这里不重新throw ex，外面的catch感知不到这里的异常的，即外层的catch{}不会执行
        } finally {
          console.log("finally");
        }
      } catch (error) {
        console.log("outter", error);
      }
    },
    fragment1() {
      // 错误捕获
      /**
       * 先来看看try...catch 语句的错误捕获机制：当多层嵌套try...catch出现时，内部的错误抛出会被最近一个catch ，直到最外层。当错误被内部的catch捕获后，就失效了。
       ***/
      try {
        try {
          throw new Error("oop");
        } catch (error) {
          console.log("inner", error.message);
        } finally {
          console.log("finally");
        }
      } catch (error) {
        // 这里不会执行
        console.log("outter", error.message);
      }
      /**
       * 执行结果:
       * inner oop
       * finally
       * **/
    },
  },
  mounted() {
    //   try ...  catch .... 的错误捕获
    // this.fragment1();
    // try ... catch ... 的错误捕获
    // this.fragment2();
    // this.fragment3();
    // this.fragment4();
    this.fragment5();
  },
};
</script>
<style lang="scss" scoped>
.promise-catch-methods {
  background-color: #fff;
}
</style>
