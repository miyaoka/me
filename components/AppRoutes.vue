<template>
  <nav class="routes">
    <nuxt-link to="/" exact>書いた記事</nuxt-link>
    <nuxt-link to="/activity">活動</nuxt-link>
    <nuxt-link to="/works">つくってみた系</nuxt-link>
    <nuxt-link to="/keyboard">キーボード</nuxt-link>
    <nuxt-link to="/career">経歴</nuxt-link>
    <nuxt-link to="/contact">コンタクト</nuxt-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin/_mediaquery.scss';

$clr-main: #e3cf7f;
$clr-sub: #3c4271;

.routes {
  margin: 1rem 0;

  & > * {
    margin-right: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &.nuxt-link-active {
      background: $clr-sub;
      color: $clr-main;
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
