<template>
  <div class="percent-height-inherit">
      <!-- css的width和height可以设置成百分比进行继承 -->
      <div class="father">
          <div class="child-one"></div>
          <div class="child-two">
              <div class="grandson"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"PercentHeightInherit"
}
</script>

<style lang="scss" scoped>
.percent-height-inherit {
    .father{
        width: 100%;
        height: 600px;
        .child-one{
            width: 100%;
            height: 80%;
            background-color: antiquewhite;
        }
        .child-two{
            height: 20%;
            background-color: aqua;
            .grandson{
                height: 50%;
                width: 100%;
                background-color: burlywood;
            }
        }
    }
}
</style>