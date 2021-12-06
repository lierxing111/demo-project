<template>
  <div class="flex-laout-wraper">
    <h5>1、flex-direction属性</h5>
    <div class="box box-1">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
    </div>
    <h5>2、flex-wrap属性</h5>
    <div class="box box-2">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
    </div>
    <h5>3、flex-flow</h5>
    <div class="box box-3">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
    </div>
    <h5>4、justify-content属性</h5>
    <h6>flex-start</h6>
    <div class="box box-4">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>flex-end</h6>
    <div class="box box-4-02">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>justify-content: center</h6>
    <div class="box box-4-03">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>justify-content: space-between</h6>
    <div class="box box-4-04">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>justify-content: space-arround</h6>
    <div class="box box-4-05">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>5、align-items属性</h6>
    <div class="box box-5">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>align-items: flex-end</h6>
    <div class="box box-5-02">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>align-items: center</h6>
    <div class="box box-5-03">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>align-items: baseline</h6>
    <div class="box box-5-04">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <h6>align-items: stretch</h6>
    <div class="box box-5-05">
      <div class="box-item">1</div>
      <div class="box-item item-tall">2</div>
      <div class="box-item">3</div>
      <div class="box-item item-tall">4</div>
    </div>
    <div>6、align-content属性</div>
    <div class="box box-6 box-6-height">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
      <div class="box-item">10</div>
    </div>
    <div>align-content: flex-end</div>
    <div class="box box-6-02 box-6-height">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
      <div class="box-item">10</div>
    </div>
    <div>align-content: center</div>
    <div class="box box-6-03 box-6-height">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
      <div class="box-item">10</div>
    </div>
    <div>align-content: space-between</div>
    <div class="box box-6-04 box-6-height">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
      <div class="box-item">10</div>
    </div>
    <div>align-content: space-around</div>
    <div class="box box-6-05 box-6-height">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
      <div class="box-item">10</div>
    </div>
    <div>align-content: stretch</div>
    <div class="box box-6-06 box-6-height">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
      <div class="box-item">5</div>
      <div class="box-item">6</div>
      <div class="box-item">7</div>
      <div class="box-item">8</div>
      <div class="box-item">9</div>
      <div class="box-item">10</div>
    </div>
    <div>----------分割线---------</div>
    <div>order</div>
    <div class="box box-7">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
    <div>flex-grow属性</div>
    <div class="box box-8">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
    </div>
    <div>flex-shrink属性</div>
    <div class="box box-9">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
    </div>
    <div>flex-basis</div>
    <div class="box box-10">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
    </div>
    <div>flex属性</div>
    <div class="box box-11">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
    </div>
    <div>align-self属性</div>
    <div class="box box-12">
      <div class="box-item">1</div>
      <div class="box-item">2</div>
      <div class="box-item">3</div>
      <div class="box-item">4</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
body {
  padding: 20px;
  margin: 0 auto;
  background-color: #e2e2e2;
  max-width: 1024px;
  color: #595b66;
  font-family: "Microsoft Yahei";
}
.flex-laout-wraper {
  max-width: 1024px;
  margin: 0 auto;
  .box {
    background-color: #fff;
    display: flex;
    margin: 0px 0px 55px;
  }
  .box-1 {
    flex-direction: row;
  }
  .box-item {
    width: 200px;
    height: 200px;
    margin: 5px;
    background-color: #ffd200;
    text-align: center;
    line-height: 200px;
    color: white;
    font-size: 100px;
  }
  .box-2 {
    flex-wrap: wrap;
  }
  .box-3 {
    flex-flow: row wrap;
  }
  .box-4 {
    justify-content: flex-start;
  }
  .box-4-02 {
    justify-content: flex-end;
  }
  .box-4-03 {
    justify-content: center;
  }
  .box-4-04 {
    justify-content: space-between;
  }
  .box-4-05 {
    justify-content: space-around;
  }
  .box-5 {
    align-items: flex-start;
    .box-item:nth-child(even) {
      height: 400px;
    }
  }
  .box-5-02 {
    align-items: flex-end;
    .box-item:nth-child(even) {
      height: 400px;
    }
  }
  .box-5-03 {
    align-items: center;
    .box-item:nth-child(even) {
      height: 400px;
    }
  }
  .box-5-04 {
    align-items: baseline;
    .box-item {
      text-decoration: underline;
      &:nth-child(even) {
        height: 400px;
      }
    }
  }
  .item-tall {
    height: 400px;
    line-height: 400px;
  }
  .box-5-05 {
    align-items: stretch;
    .box-item {
      text-decoration: underline;
      &:nth-child(odd) {
        height: auto;
      }
    }
  }
  .box-6 {
    flex-wrap: wrap;
    align-content: flex-start;
  }
  .box-6-height {
    height: 800px;
  }
  .box-6-02 {
    flex-wrap: wrap;
    align-content: flex-end;
  }
  .box-6-03 {
    flex-wrap: wrap;
    align-content: center;
  }
  .box-6-04 {
    flex-wrap: wrap;
    align-content: space-between;
  }
  .box-6-05 {
    flex-wrap: wrap;
    align-content: space-around;
  }
  .box-6-06 {
    flex-wrap: wrap;
    align-content: stretch;
    .box-item {
      height: auto;
    }
  }
  .box-7 {
    .box-item {
      &:nth-child(4) {
        order: 1;
      }
    }
  }
  .box-8 {
    .box-item {
      &:nth-child(odd) {
        flex-grow: 1;
      }
      &:nth-child(2) {
        flex-grow: 2;
      }
    }
  }
  .box-9 {
    .box-item {
      &:nth-child(odd) {
        flex-shrink: 0;
      }
      &:nth-child(2) {
        flex-shrink: 1;
      }
    }
  }
  .box-10 {
    .box-item {
      flex-basis: auto;
    }
  }
  .box-11 {
    .box-item {
      flex: 1;
    }
  }
  .box-12 {
    height: 400px;
    .box-item {
      &:nth-child(3n + 0) {
        align-self: flex-end;
      }
    }
  }
}
</style>
