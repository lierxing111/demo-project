<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import HelloWorld from "@/components/js_includes_function.vue";
// import HelloWorld from "@/components/css_calc.vue";
import HelloWorld from "@/components/css_calc_layout.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
