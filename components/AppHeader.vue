<template>
  <header class="header">
    <h1><nuxt-link to="/">@miyaoka</nuxt-link></h1>
    <div></div>
  </header>
</template>

<script>
export default {
  data() {
    return {}
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
