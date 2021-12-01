<template>
  <div class="use-vuex-persistedstate">
    <!-- <h1>vuex 状态持久化</h1> -->
    <!-- <div><a href="https://github.com/robinvdvleuten/vuex-persistedstate">GitHub</a></div> -->
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div>Check out your localStorage to see the updates.</div>
  </div>
</template>

<script>
export default {
  name: "UseVuexPersistedstate",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("count/increment");
    },
    decrement() {
      this.$store.commit("count/decrement");
    },
  },
};
</script>

<style lang="scss">
.use-vuex-persistedstate {
  background-color: #fff;
}
</style>
