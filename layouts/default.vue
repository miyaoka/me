<template>
  <div class="app" :class="{ skew: $store.state.skew }">
    <div class="content-wrapper">
      <app-header/>
      <div class="content">
        <nuxt/>
      </div>
    </div>
    <app-footer class="footer"/>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
$footer-height: 120px;

.app.skew {
  transform: skew(0deg, -5deg);
}
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

