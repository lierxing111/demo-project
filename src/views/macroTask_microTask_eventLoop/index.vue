<template>
  <div class="macroTask-microTask-eventloop">
    <!-- 宏任务、微任务、事件循环 -->
    <a href="https://juejin.cn/post/6844903657264136200#heading-9">参考链接</a>
    <h5>微任务与宏任务的区别</h5>
    <p>
      这个就像去银行办业务一样，先要取号进行排号。<br />
      一般上边都会印着类似：“您的号码为XX，前边还有XX人。”之类的字样。<br />
      因为柜员同时职能处理一个来办理业务的客户，这时每一个来办理业务的人就可以认为是银行柜员的一个宏任务来存在的，当柜员处理完当前客户的问题以后，选择接待下一位，广播报号，也就是下一个宏任务的开始。<br />
      所以多个宏任务合在一起就可以认为说有一个任务队列在这，里边是当前银行中所有排号的客户。<br />
      <strong>
        任务队列中的都是已经完成的异步操作，而不是说注册一个异步任务就会被放在这个任务队列中，就像在银行中排号，如果叫到你的时候你不在，那么你当前的号牌就作废了，柜员会选择直接跳过进行下一个客户的业务处理，等你回来以后还需要重新取号
      </strong>
      <br />
      而且一个宏任务在执行的过程中，是可以添加一些微任务的，就像在柜台办理业务，你前边的一位老大爷可能在存款，在存款这个业务办理完以后，柜员会问老大爷还有没有其他需要办理的业务，这时老大爷想了一下：“最近P2P爆雷有点儿多，是不是要选择稳一些的理财呢”，然后告诉柜员说，要办一些理财的业务，这时候柜员肯定不能告诉老大爷说：“您再上后边取个号去，重新排队”。<br />
      所以本来快轮到你来办理业务，会因为老大爷临时添加的“理财业务”而往后推。
      <br />
      也许老大爷在办完理财以后还想 再办一个信用卡？或者 再买点儿纪念币？ <br />
      无论是什么需求，只要是柜员能够帮她办理的，都会在处理你的业务之前来做这些事情，这些都可以认为是微任务。
      <br />
      这就说明:
      <strong>在当前的微任务没有执行完成时，是不会执行下一个宏任务的。</strong>
      <br />
      setTimeout就是作为宏任务来存在的，而Promise.then则是具有代表性的微任务，上述代码的执行顺序就是按照序号来输出的。
      <br />
      <img :src="img01" :alt="alt01" />
      <img :src="img02" :alt="alt02" />
      <img :src="img03" :alt="alt03" />
      <img :src="img04" :alt="alt04" />
    </p>
  </div>
</template>
<script>
export default {
  name: "MacroTaskMicroTaskEventloop",
  data() {
    return {
      img01: require("@/assets/img01.png"),
      alt01: "宏任务与微任务",
      img02: require("@/assets/img02.png"),
      alt02: "同步代码与一步代码",
      img03: require("@/assets/img03.png"),
      alt03: "宏任务",
      img04: require("@/assets/img04.png"),
      alt04: "微任务",
    };
  },
  methods: {
    /**
     * 所有会进入的异步都是指的事件回调中的那部分代码
     * **/
    fragment01() {
      setTimeout(() => {
        console.log(4);
      });
      new Promise((resolve) => {
        resolve();
        console.log(1);
      }).then(() => {
        console.log(3);
      });
      console.log(2);
    },
    // 运行结果： 1 2 3 4
    fragment02() {
      /**
       * 本来setTimeout已经先设置了定时器（相当于取号），然后在当前进程中又添加了一些Promise的处理（临时添加业务）。
       * 所以进阶的，即便我们继续在Promise中实例化Promise，其输出依然会早于setTimeout的宏任务
       * **/
      setTimeout(() => {
        console.log(4);
      });
      new Promise((resolve) => {
        resolve();
        console.log(1);
      }).then(() => {
        console.log(3);
        Promise.resolve()
          .then(() => {
            console.log("befroe timeout");
          })
          .then(() => {
            Promise.resolve().then(() => {
              console.log("also before timeout");
            });
          });
      });
      console.log(2);
      //   运行结果: 1   2  3  "before timeout"  "also before timeout"  4
    },
    fragment03() {
      /**
       * 因为，async/await本质上还是基于Promise的一些封装，而Promise是属于微任务的一种。所以在使用await关键字与Promise.then效果类似
       * async函数在await之前的代码都是同步执行的，可以理解为await之前的代码属于new Promise时传入的代码，await之后的所有代码都是在Promise.then中的回调
       * **/
      setTimeout(() => {
        console.log(4);
      });
      async function main() {
        console.log(1);
        await Promise.resolve();
        console.log(3);
      }
      main();
      console.log(2);
      //   运行结果:  1   2    3  4
    },
    fragment04() {
      async function async1() {
        console.log("async1 start");
        await async2(); //await async2(),console.log("async1 end")  相当于是： console.log("async2") 和异步回调function(){ console.log("async1 end") }
        console.log("async1 end");
      }
      async function async2() {
        console.log("async2");
      }
      async1();
      setTimeout(() => {
        console.log("timeout");
      }, 0);
      new Promise(function (resolve) {
        console.log("promise1");
        resolve();
      }).then(function () {
        console.log("promise2");
      });
      console.log("script end");
      //   运行结果: "async1 start"  "async2"   "rpomise1"  "script end"  "async1 end"  "promise2"  "time out"
    },
  },
  mounted() {
    // this.fragment01();
    // this.fragment02();
    // this.fragment03();
    this.fragment04();
  },
};
</script>
<style lang="scss" scoped>
.macroTask-microTask-eventloop {
  background-color: #fff;
}
</style>
