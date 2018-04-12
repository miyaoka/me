<template>
  <header class="header">
    <h1><nuxt-link to="/">@miyaoka</nuxt-link></h1>

    <label>
      <input
        type="checkbox"
        v-model="skew">
      傾けない
    </label>
  </header>
</template>

<script>
export default {
  computed: {
    skew: {
      get() {
        return !this.$store.state.skew
      },
      set(val) {
        this.$store.commit('skew', !val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  padding: 1rem 1rem 2rem;
  margin-bottom: 2rem;
}
h1 {
  font-size: 2rem;
  a {
    text-decoration: none;
  }
}
</style>
