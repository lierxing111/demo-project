<template>
  <div class="array-remove-repeat">数组去重</div>
</template>
<script>
export default {
  name: "ArrayRemoveRepeat",
  data() {
    return {};
  },
  created() {},
  mounted() {
    // this.fragment1();
    // this.fragment2();
    // this.fragment3();
    // this.fragment4();
    this.fragment5();
  },
  methods: {
    fragment5() {
      //速度做快， 以空间换时间
      var arr = ["12", "32", "89", "12", "12", "78", "12", "32"];
      function unique(array) {
        console.log(array);
        var n = {},
          r = [],
          type;
        console.log(n, r, type);
        for (let i = 0; i < array.length; i++) {
          if (!n[array[i]]) {
            n[array[i]] = [type];
            r.push(array[i]);
          } else if (n[array[i]].indexOf(type) === -1) {
            n[array[i]].push(type);
            r.push(array[i]);
          }
        }
        console.log(r);
        return r;
      }
      unique(arr);
    },
    fragment4() {
      var arr = ["12", "32", "89", "12", "12", "78", "12", "32"];
      var temparr = [];
      temparr = Array.from(new Set(arr)); // Array.from()能把set结构转换为数组
      console.log(temparr);
      return temparr;
    },
    fragment3() {
      var arr = ["12", "32", "89", "12", "12", "78", "12", "32"];
      var temparr = [];
      // es6 new Set()去重
      temparr = [...new Set(arr)];
      console.log(temparr);
      return temparr;
    },
    fragment2() {
      var arr = ["12", "32", "89", "12", "12", "78", "12", "32"];
      function unique(array) {
        // 数组下标判断法
        var temparr = [array[0]];
        for (let i = 1; i < array.length; i++) {
          if (array.indexOf(array[i]) === i) {
            temparr.push(array[i]);
          }
        }
        console.log(temparr);
        return temparr;
      }
      unique(arr);
    },
    fragment1() {
      var arr = ["12", "32", "89", "12", "12", "78", "12", "32"];
      function unique(array) {
        //   最简单数组去重法
        var temparr = [];
        for (let i = 0; i < array.length; i++) {
          if (temparr.indexOf(array[i]) === -1) {
            temparr.push(array[i]);
          }
        }
        console.log(temparr); // ['12', '32', '89', '78']
        return temparr;
      }
      unique(arr);
    },
  },
};
</script>
<style lang="scss">
.array-remove-repeat {
  background-color: #fff;
}
</style>
