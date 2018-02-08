<template>
  <section ref="content" v-html="activity"/>
</template>

<script>
import activity from '~/content/activity.md'

export default {
  head: {
    title: '活動'
  },
  data() {
    return {
      activity
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
