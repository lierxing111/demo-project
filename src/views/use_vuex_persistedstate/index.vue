<template>
  <div class="use-vuex-persistedstate">
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
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>

<style lang="scss">
.use-vuex-persistedstate {
  background-color: #fff;
}
</style>
