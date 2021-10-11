<template>
  <div class="wraper">
    <h1>点击各个按钮显示不同的颜色</h1>
    <el-radio-group v-model="grade" size="mini">
      <el-radio
        v-for="(item, index) in sensitivityRadioList"
        :key="index"
        :label="item.value"
        :class="[handleCheckedstyle(this.grade, item.value)]"
        border
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "lightingDifferentButtonColorsButton",
  data() {
    return {
      grade: "1",
      sensitivityRadioList: [
        {
          label: "公开",
          value: "1",
          type: "success",
        },
        {
          label: "内部公开",
          value: "2",
          type: "",
        },
        {
          label: "秘密",
          value: "3",
          type: "warning",
        },
        {
          label: "机密",
          value: "4",
          type: "danger",
        },
        {
          label: "未知",
          value: "0",
          type: "info",
        },
      ],
    };
  },
  created() {},
  methods: {
    handleCheckedstyle(grade, val) {
      console.log('grade--------', grade)
      console.log('val-----', val)
      const obj = {
        '0': 'info',
        '1': 'success',
        '2': 'primary',
        '3': 'warning',
        '4': 'danger'
      }
      if (grade !== val) {
        return ''
      } else {
        return obj[grade]
      }
    }
  },
};
</script>
<style lang="scss"></style>
