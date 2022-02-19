<template>
  <div class="flex_layout_wrapper">
    <!-- flex_layout_wrapper -->
    <!-- flex-grow -->
    <p>
      flex:1代表什么意思<br />
      CSS属性 flex
      规定了弹性元素如何伸长或缩短以适应flex容器中的可用空间。这是一个简写属性，用来设置
      flex-grow, flex-shrink 与 flex-basis。<br />
    </p>
    <p>
      flex-grow <br />
      flex-grow 属性定义弹性盒子项（flex item）的拉伸因子。
    </p>
    <div
      v-html="textarea1"
      style="border: 1px solid gray; border-radius: 10px"
    ></div>
    <div class="container-one">
      <div class="box-one"></div>
      <div class="box-two"></div>
    </div>
    <p>
      <a href="https://www.runoob.com/cssref/css3-pr-flex-shrink.html"
        >flex-shrink 超链接</a
      >
      <br />
      flex-shrink 属性指定了 flex 元素的收缩规则。flex
      元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据
      flex-shrink 的值。<br />
    </p>
    <div class="container-two">
      <div class="box-one">box-one</div>
      <div class="box-two">box-two</div>
    </div>
    <p style="color: red">
      我们可以看到父容器定义为 500px，子项被定义为 400px，子项相加之后即为 800
      px，超出父容器 300px。那么超出的 300px 需要被 box-one、box-two
      消化。box-one的flex-shink为 1,box-two的flex-shink为3,即为 1:3,<br />
      box-one 被移除溢出量：(1/4)*300，即约等于75px <br />
      box-two 被移除溢出量：(3/4)*300，即约等于225px <br />
    </p>
    <p>
      <img :src="FlexShinkOne" />
    </p>
    <p>
      <img :src="FlexShinkTwo" />
    </p>
    <p>
      flex-basis <br />
      flex-basis 指定了 flex 元素在主轴方向上的初始大小。如果不使用 box-sizing
      改变盒模型的话，那么这个属性就决定了 flex
      元素的内容盒（content-box）的尺寸。 <br />
      width 值可以是 length;
      该值也可以是一个相对于其父弹性盒容器主轴尺寸的百分数
      。负值是不被允许的。默认为 auto。 <br />
      基于 flex 的元素的内容自动调整大小。 <br />
    </p>
    <div class="container-three">
      <div class="box-one">box-one</div>
      <div class="box-two">box-two</div>
      <div class="box-three">box-two</div>
    </div>
    <p>用flex实现中间是1000px,两边是相同宽度，能自适应的布局。</p>
    <div class="container-four">
      <div class="box-one">box-one</div>
      <div class="box-two">box-two</div>
      <div class="box-three">box-three</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlexGrow",
  data() {
    return {
      textarea1: "flex-grow: 1;<br/>flex-grow: inherit;",
      FlexShinkOne: require("@/assets/flex-shink-one.png"),
      FlexShinkTwo: require("@/assets/flex-shink-two.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.flex_layout_wrapper {
  background-color: #fff;
  .container-one {
    height: 100px;
    display: flex;
    .box-one {
      background-color: pink;
      flex-grow: 1;
    }
    .box-two {
      background-color: yellow;
      flex-grow: 3;
    }
  }
  .container-two {
    width: 500px;
    display: flex;
    .box-one {
      width: 400px;
      background-color: pink;
      flex-shrink: 1;
    }
    .box-two {
      width: 400px;
      background-color: yellow;
      flex-shrink: 3;
    }
  }
  .container-three {
    height: 200px;
    display: flex;
    .box-one {
      background-color: lightpink;
      flex: 1;
    }
    .box-two {
      background-color: lightsalmon;
      flex: 1;
    }
    .box-three {
      background-color: lightslategray;
      flex: 3;
    }
  }
  .container-four {
    display: flex;
    height: 100px;
    .box-one {
      background-color: lightpink;
      flex: 1;
    }
    .box-two {
      background-color: lightsalmon;
      flex-basis: 1000px;
    }
    .box-three {
      background-color: lightgray;
      flex: 1;
    }
  }
}
</style>
