<template>
  <section ref="content" v-html="keyboard"/>
</template>

<script>
import keyboard from '~/content/keyboard.md'

export default {
  head: {
    title: 'キーボード'
  },
  data() {
    return {
      keyboard
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
