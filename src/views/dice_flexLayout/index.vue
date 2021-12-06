<template>
  <div class="dice-flex-layout-wraper">
    <h6>first-face</h6>
    <div class="first-face">
      <span class="pip"></span>
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
  background-color: #fff;
  [class$="face"] {
    margin: 16px;
    padding: 4px;
    background-color: #e7e7e7;
    width: 104px;
    height: 104px;
  }
}
</style>
