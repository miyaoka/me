<template>
  <section ref="content" v-html="career"/>
</template>

<script>
import career from '~/content/career.md'

export default {
  head: {
    title: '経歴'
  },
  data() {
    return {
      career
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
