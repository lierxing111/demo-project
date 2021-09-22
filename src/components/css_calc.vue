<template>
  <div class="wraper">
    <!-- <h1>css3 calc()属性介绍以及自适应布局使用方法</h1>
    <h5>Calc()介绍</h5>
    <p>
      1.使用calc()给元素的border、margin、pading、font-size和width等属性设置动态值
    </p>
    <h5>Calc()的用处</h5>
    <p>
      2.calc()能让你给元素的做计算，你可以给一个div元素，使用百分比、em、px和rem单位值计算出其宽度或者高度
    </p>
    <h5>语法</h5>
    <textarea name="" id="" cols="70" rows="3">
        .elm {
            width: calc(expression);
        }
    </textarea>
    <h5>calc()的运算规则</h5>
    <p>1.使用“+”、“-”、“*”和“/”四则运算；</p>
    <p>2.可以使用百分比、px、em、rem等单位；</p>
    <p>3.可以混合使用各种单位进行计算；</p>
    <p>
      4.表达式中有“+”和“-”时，其前后必须要有空格，如”widht:calc(12%+5em)”这种没有空格的写法是错误的；
    </p>
    <p>5.表达式中有“*”和“/”时，其前后可以没有空格，但建议留有空格</p> -->
    <ul class="my-list">
      <li class="li" v-for="(item, index) in list" :key="index">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CSS_Calc",
  data() {
    return {
      list:[
        {
          label:'one',
          value:'1'
        },
        {
          label:'two',
          value:'2'
        },
        {
          label:'three',
          value:'3'
        },
      ]
    }
  },
  methods: {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.wraper {
  background-color: #fff;
  .my-list{
    list-style: none;
     display: flex;
     flex-direction: row;
     margin: 20px;
     background-color: yellow;
    .li{
      padding: 10px;
      margin: 10px;
      background: #FF6666;
      border: 5px solid #DAC8A7;
      list-style-type: none;
      text-align: center;
      width: calc(100%/3 - (10px + 10px + 5px) * 2);
    }
  }
}
</style>
