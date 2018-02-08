<template>
  <div class="app">
    <div class="app-header">
      <AppHeader/>
    </div>
    <div class="app-routes">
      <AppRoutes/>
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
import AppHeader from '~/components/AppHeader.vue'
import AppRoutes from '~/components/AppRoutes.vue'

export default {
  components: {
    AppHeader,
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
  grid-template-areas: 'header routes' 'header content';
  height: 100vh;

  &-header {
    grid-area: header;
  }
  &-routes {
    grid-area: routes;
  }
  &-content {
    grid-area: content;
    overflow: scroll;
    padding-bottom: 5rem;
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
    padding: 0 2rem;
    color: $clr-sub;
    background: $clr-main;

    @include mq(tablet) {
      padding: 1rem;
    }

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
