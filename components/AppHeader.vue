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

<style lang="scss">
@import '~assets/css/mixin/_mediaquery.scss';

$side-width: 400px;
$clr-main: #e3cf7f;
$clr-sub: #3c4271;

.header {
  // position: fixed;
  width: $side-width;
  padding: 2rem;
  color: $clr-main;
  overflow: auto;
  height: 100%;

  @include mq(tablet) {
    position: unset;
    width: auto;
    padding: 1rem;
  }

  a {
    color: $clr-main;
    text-decoration: underline;
    &:hover {
      color: $clr-sub;
      background: $clr-main;
    }
  }
}
</style>
