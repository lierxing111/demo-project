<template>
  <div class="login-wraper">
    {{ welcomeLanguage }}
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      welcomeLanguage: "这里是登录页",
    };
  },
};
</script>

<style lang="scss" scoped>
.login-wraper {
  background-color: #fff;
}
</style>
