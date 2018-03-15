<template>
  <header class="header">
    <div v-html="about"/>
    <div v-html="accounts"/>
  </header>
</template>

<script>
import about from '~/content/about.md'
import accounts from '~/content/accounts.md'

export default {
  data() {
    return {
      about,
      accounts
    }
  }
}
</script>

<style lang="scss" scoped>
$side-width: 400px;

.header {
  // position: fixed;
  width: $side-width;
  padding: 2rem;
  overflow: auto;
  height: 100%;

  @include media-breakpoint-down(md) {
    position: unset;
    width: auto;
    padding: 1rem;
  }
}
</style>
