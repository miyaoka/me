<template>
  <section ref="content" v-html="works"/>
</template>

<script>
import works from '~/content/works.md'

export default {
  head: {
    title: 'つくってみた系'
  },
  data() {
    return {
      works
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
