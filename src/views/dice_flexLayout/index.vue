<template>
  <div class="dice-flex-layout-wraper">
    <div class="first-face">
      <span class="pip"></span>
    </div>
    <div class="second-face">
      <span class="pip"></span>
      <span class="pip"></span>
    </div>
    <div class="third-face">
      <div class="pip"></div>
      <div class="pip"></div>
      <div class="pip"></div>
    </div>
    <div class="fouth-face">
      <div class="column">
        <div class="pip"></div>
        <div class="pip"></div>
      </div>
      <div class="column">
        <div class="pip"></div>
        <div class="pip"></div>
      </div>
    </div>
    <div class="fifth-face">
      <div class="column">
        <div class="pip"></div>
        <div class="pip"></div>
      </div>
      <div class="column">
        <div class="pip"></div>
      </div>
      <div class="column">
        <div class="pip"></div>
        <div class="pip"></div>
      </div>
    </div>
    <div class="sixth-face">
      <div class="column">
        <div class="pip"></div>
        <div class="pip"></div>
        <div class="pip"></div>
      </div>
      <div class="column">
        <div class="pip"></div>
        <div class="pip"></div>
        <div class="pip"></div>
      </div>
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
.dice-flex-layout-wraper {
  // background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  .first-face {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  [class$="face"] {
    margin: 16px;
    padding: 4px;
    background-color: #e7e7e7;
    width: 104px;
    height: 104px;
    box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
      inset -5px 0 #d7d7d7;
    border-radius: 10%;
  }
  .pip {
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 4px;
    background-color: #333;
    box-shadow: inset 0 3px #111, inset 0 -3px #555;
  }
  .second-face {
    display: flex;
    justify-content: space-between;
    .pip:nth-of-type(2) {
      align-self: flex-end;
    }
  }
  .third-face {
    display: flex;
    justify-content: space-between;
    .pip:nth-of-type(2) {
      align-self: center;
    }
    .pip:nth-of-type(3) {
      align-self: flex-end;
    }
  }
  .fouth-face {
    display: flex;
    justify-content: space-between;
    .column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .fifth-face {
    display: flex;
    justify-content: space-between;
    .column:nth-of-type(2n + 1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .column:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .sixth-face {
    display: flex;
    justify-content: space-between;
    .column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
