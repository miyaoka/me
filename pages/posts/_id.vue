<template>
  <PostItem
    :post="post"
  />
</template>

<script>
import PostItem from '~/components/PostItem'

export default {
  components: {
    PostItem
  },
  head() {
    return {
      title: this.post && this.post.fields.title
    }
  },
  data() {
    return {}
  },
  async asyncData({ app, params, payload, error }) {
    if (payload) return { post: payload }
    try {
      const post = await app.$contentful.getEntry(params.id)
      return {
        post
      }
    } catch ({ response }) {
      error(
        response
          ? {
              statusCode: response.status,
              message: response.statusText
            }
          : {}
      )
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
