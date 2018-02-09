<template>
  <div class="routesContainer" :class="{isMenuShown}" @click="hideMenu">
    <div class="menu">
      <button class="bars" @click.stop="showMenu"><icon name="bars" scale="1.5"/></button>
    </div>
    <nav class="routes">
      <nuxt-link to="/" exact>Home</nuxt-link>
      <nuxt-link to="/article">書いた記事</nuxt-link>
      <nuxt-link to="/activity">活動</nuxt-link>
      <nuxt-link to="/works">つくってみた系</nuxt-link>
      <nuxt-link to="/keyboard">キーボード</nuxt-link>
      <nuxt-link to="/career">経歴</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return { isMenuShown: false }
  },
  methods: {
    hideMenu() {
      this.isMenuShown = false
    },
    showMenu() {
      this.isMenuShown = true
    }
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

  @include mq(tablet) {
    display: none;

    .isMenuShown & {
      display: block;
      margin: 0;
      padding: 1rem;
      background: rgba(0, 0, 0, 0.8);
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;

      a {
        color: $clr-main;

        display: block;
      }
    }
  }
}
.routesContainer {
  padding: 0 2rem;
  @include mq(tablet) {
    background: $clr-sub;
    padding: 0.5rem;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
}
.menu {
  display: none;
  text-align: right;

  .bars {
    background: none;
    border: none;
    color: $clr-main;
    cursor: pointer;
  }
  @include mq(tablet) {
    display: block;
  }
}
</style>
