<template>
  <div class="wraper">
    <h1>js中includes方法用法</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "JsIncludesFunctions",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      // 基本语法
      // str.includes(needle. begin = 0);
      // needle：要搜索的字符串
      // begin：开始搜索的位置
      // 1. 该方法对大小写敏感，当传入第二个参数时，如果参数值小于0，则取值为0
      let str = "abcdefg";
      str.includes("abc"); // true
      str.includes("ABC"); // false
      str.includes("ABC", 4); // false
      str.includes("ABC", -4); //true

      // 2. 如果传入第一个参数不是字符串，那么会隐式转为字符串。
      let str2 = "object";
      str2.includes("object"); // true
      let str3 = "truefalsenullundefined";
      str3.includes(true);
      str3.includes(false);
      str3.includes(null);
      str3.includes(undefined);
      console.log(str3.includes(true))
      // 3. 如果传入的是空字符串，则返回true。
      let str4 = ''
      str4.includes('') // true
      let str5 = 'abcd'
      str5.includes('') // true
      str5.includes('',111) // true
      console.log(str5.includes(''))
    },
  },
};
</script>
<style lang="scss"></style>
