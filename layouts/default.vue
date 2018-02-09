<template>
  <div class="app">
    <div class="app-routes">
      <AppRoutes/>
    </div>
    <div class="app-about" :class="{isRoot: $route.path === '/'}">
      <AppAbout/>
    </div>
    <div class="app-content">
      <nuxt/>
    </div>
    <span v-if="mounted">
      <script async defer src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    </span>
  </div>
</template>

<script>
import AppAbout from '~/components/AppAbout.vue'
import AppRoutes from '~/components/AppRoutes.vue'

export default {
  components: {
    AppAbout,
    AppRoutes
  },
  data() {
    return {
      mounted: false
    }
  },
  async mounted() {
    this.mounted = true
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/mixin/_mediaquery.scss';

$route-height: 3rem;

.app {
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: $route-height 1fr;
  grid-template-areas: 'about routes' 'about content';
  height: 100vh;

  @include mq(tablet) {
    display: unset;
    grid-template-areas: none;
    height: auto;
  }

  &-about {
    grid-area: about;

    @include mq(tablet) {
      padding-top: $route-height;
      &:not(.isRoot) {
        display: none;
      }
    }
  }
  &-routes {
    grid-area: routes;
  }
  &-content {
    grid-area: content;
    overflow-y: auto;
    padding: 0 2rem 5rem;
    @include mq(tablet) {
      padding: $route-height 1rem 5rem;
      margin: 0;
      overflow: hidden;
    }
  }
}
</style>

<style lang="scss">
@import '~assets/css/mixin/_mediaquery.scss';

.app {
  h1,
  h2 {
    margin: 2rem 0;
  }
  iframe {
    max-width: 100%;
  }
  img,
  .speakerdeck-wrapper {
    max-width: 500px;
    width: 100%;
  }

  blockquote {
    padding: 1rem;
    p {
      margin: 0;
    }
  }
  blockquote,
  code {
    background-color: rgba(0, 0, 0, 0.08);
    font-size: 0.9rem;
  }

  $clr-main: #e3cf7f;
  $clr-sub: #3c4271;

  &-routes,
  &-content {
    color: $clr-sub;
    background: $clr-main;

    a {
      color: $clr-sub;
      text-decoration: underline;

      &:hover {
        color: $clr-main;
        background: $clr-sub;
      }
    }
    h2 {
    }

    h3 {
      &,
      & a {
        color: $clr-main;
        background: $clr-sub;
      }
      padding: 0.1rem 2rem;
      margin: 2rem -2rem 1rem;
    }
  }
}
</style>
