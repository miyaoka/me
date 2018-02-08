<template>
  <section ref="content" v-html="contact"/>
</template>

<script>
import contact from '~/content/contact.md'

export default {
  data() {
    return {
      contact
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
