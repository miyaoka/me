<template>
  <div class="app">
    <div class="content-wrapper">
      <app-header/>
      <div class="content">
        <nuxt/>
      </div>
    </div>
    <app-footer class="footer"/>
    <span v-if="mounted">
      <script async defer src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
    </span>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
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
$footer-height: 120px;

.content-wrapper {
  min-height: calc(100vh- #{$footer-height});
}
.content {
  width: 640px;
  max-width: 100%;
  margin: auto;
  padding: 0 1rem;
}
.footer {
  height: $footer-height;
}
</style>

