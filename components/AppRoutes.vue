<template>
  <nav class="routes">
    <nuxt-link to="/">読み物</nuxt-link>
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
.routes {
  margin: 1rem 0;

  & > * {
    margin-right: 1rem;
  }
}
</style>
