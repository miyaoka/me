<template lang="md">
  <section class="container">
    <div v-html="index"/>
  </section>
</template>

<script>
import index from '~/content/index.md'

export default {
  computed: {
    index() {
      return index
    }
  }
}
</script>

<style>

</style>
