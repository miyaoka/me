<template>
  <section>

    <div v-html="$md.render(about)"/>

    <section class="posts">
      <PostItem
        v-for="post in posts"
        :key="post.sys.id"
        :post="post"
        class="post"
      />
    </section>
  </section>
</template>

<script>
import PostItem from '~/components/PostItem'

export default {
  components: {
    PostItem
  },
  data() {
    return {}
  },
  head() {
    return {
      title: null
    }
  },
  async asyncData({ app, store, env }) {
    try {
      const postList = await app.$contentful.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date',
        limit: 30,
        skip: 0
      })
      const aboutList = await app.$contentful.getEntries({
        content_type: 'about'
      })

      const { items, limit, skip, total } = postList
      return {
        about: aboutList.items[0].fields.body,
        posts: items,
        limit,
        skip,
        total
      }
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  margin-top: 6rem;
}
</style>
