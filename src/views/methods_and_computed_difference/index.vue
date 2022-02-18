<template>
  <div class="methods-computed-diference">总结methods与computed区别：</div>
  <p>
    1.
    调用方式不同。computed直接以对象属性方式调用，不需要加括号，而methods必须要函数执行才可以得到结果。<br />
    2.
    绑定方式不同。methods与compute纯get方式都是单向绑定，不可以更改输入框中的值。compute的get与set方式是真正的双向绑定。<br />3.
    是否存在缓存。methods没有缓存，调用相同的值计算还是会重新计算。competed有缓存，在值不变的情况下不会再次计算，而是直接使用缓存中的值<br />
  </p>
  <!-- <el-input v-model="input" placeholder="Please input" /> -->
  <el-form ref="form" :model="form" label-width="150px">
    <el-form-item label="数学：">
      <el-input v-model="form.mathScore"></el-input>
    </el-form-item>
    <el-form-item label="英语：">
      <el-input v-model="form.englishScore" @blur="sumScore"></el-input>
    </el-form-item>
    <!-- 调用methods方式 -->
    <el-form-item label="总分：">
      <el-input v-model="form.sum"></el-input>
    </el-form-item>
  </el-form>
  <el-divider></el-divider>
  <el-form ref="myForm" :model="myForm" label-width="150px">
    <el-form-item label="数学：">
      <el-input v-model="myForm.mathScore"></el-input>
    </el-form-item>
    <el-form-item label="英语：">
      <el-input v-model="myForm.englishScore"></el-input>
    </el-form-item>
    <!-- 调用methods方式 -->
    <el-form-item label="总分：">
      <el-input v-model="mySumScore"></el-input>
    </el-form-item>
  </el-form>
  <el-divider></el-divider>
  <el-form ref="newForm" :model="newForm" label-width="150px">
    <el-form-item label="姓：">
      <el-input v-model="newForm.lastName"></el-input>
    </el-form-item>
    <el-form-item label="姓：">
      <el-input v-model="newForm.firstName"></el-input>
    </el-form-item>
    <el-form-item label="全名1(单向)：">
      <el-input v-model="fullName1"></el-input>
    </el-form-item>
    <el-form-item label="全名2(双向)：">
      <el-input v-model="fullName2"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "MethodsComputedDiference",
  data() {
    return {
      form: {
        mathScore: "",
        englishScore: "",
        sum: "",
      },
      myForm: {
        mathScore: "80",
        englishScore: "90",
      },
      newForm: {
        lastName: "A",
        firstName: "B",
        // fullName1: "A B",
        // fullName2: "",
      },
    };
  },
  computed: {
    fullName2: {
      //回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
      get: function () {
        return this.newForm.lastName + " " + this.newForm.firstName;
      },
      //监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
      set: function (newValue) {
        let names = newValue.split(" ");
        this.newForm.lastName = names[0];
        this.newForm.firstName = names[1];
      },
    },
    fullName1() {
      return this.newForm.lastName + " " + this.newForm.firstName;
    },
    mySumScore: {
      //计算属性中的get方法，方法的返回值就是属性值
      get: function () {
        return this.myForm.mathScore - 0 + (this.myForm.englishScore - 0);
      },
      //监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据
      set: function (newValue) {
        console.log("newValue", newValue);
        this.myForm.mathScore = newValue / 2;
        this.myForm.englishScore = newValue / 2;
      },
    },
  },
  methods: {
    sumScore() {
      console.log(1111);
      this.form.sum = this.form.mathScore - 0 + (this.form.englishScore - 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.methods-computed-diference {
  background-color: #fff;
}
</style>
