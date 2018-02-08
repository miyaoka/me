<template>
  <section ref="content" v-html="article"/>
</template>

<script>
import article from '~/content/article.md'

export default {
  data() {
    return {
      article
    }
  },
  mounted() {
    this.loadTwitterWidget()
  },
  updated() {
    this.loadTwitterWidget()
  },
  methods: {
    loadTwitterWidget() {
      // Reload twitter widget for this episode when already loaded on root
      if (window['twttr']) window['twttr'].widgets.load(this.$refs.content)
    }
  }
}
</script>

<style lang="scss">

</style>
