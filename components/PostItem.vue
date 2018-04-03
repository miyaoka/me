<template>
  <article class="post-item">
    <h2 class="title"><nuxt-link :to="{
      name: 'posts-id',
      params: {
        id: post.sys.id
      }
    }">{{fields.title}}</nuxt-link></h2>

    <lazy-component>
      <div
        v-html="md(fields.body)"
        class="body"
        v-twitter-widgets
      />
    </lazy-component>

    <div v-if="fields.article">
      <h3>Article</h3>
      <lazy-component>
        <div v-html="md(fields.article)" v-twitter-widgets/>
      </lazy-component>
    </div>

    <div v-if="fields.site">
      <h3>Site</h3>
      <div v-html="md(fields.site)"/>
    </div>

    <div v-if="fields.repository">
      <h3>Repository</h3>
      <div v-html="md(fields.repository)"/>
    </div>

    <!-- <div>date: {{fields.date | date}}</div>
    <div>category: {{fields.category.fields.title}}</div>
    <div class="tags">
      tags:
      <span
        v-for="tag in fields.tags"
        :key="tag"
      >{{tag}}</span>
    </div> -->

  </article>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  props: {
    post: { type: Object, required: true }
  },
  filters: {
    date(date) {
      return DateTime.fromISO(date, { zone: 'Asia/Tokyo' }).toFormat('yyyy-MM-dd')
    }
  },
  computed: {
    fields() {
      return this.post.fields || {}
    }
  },
  methods: {
    md(text) {
      return text ? this.$md.render(text) : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.post-item {
  padding: 0 3rem;
  @include media-breakpoint-down(xs) {
    padding: 0 0.5rem;
  }
}
.title {
  font-size: 2.6rem;
  font-weight: 700;
  color: $clr-b-d;
  margin: 0.5rem -3rem;
  @include media-breakpoint-down(xs) {
    margin: 0.5rem -0.5rem;
  }

  a {
    text-decoration: none;
  }
}
.tags {
  span {
    display: inline-block;
    border: 1px solid $clr-b;
    border-radius: 0.5rem;
    padding: 0.2rem;
  }
}
</style>

<style lang="scss">
.post-item {
  img,
  .speakerdeck-wrapper,
  iframe,
  .twitter-tweet-rendered {
    max-width: 100%;
    width: 500px;
    box-shadow: hsla(0, 0%, 0%, 0.15) 30px 30px 30px -10px;
    border-radius: 1rem;
    border: 2px solid;
    border-color: $clr-w-d $clr-b $clr-b $clr-w-d;
    overflow: hidden;
    margin-bottom: 3rem !important;
  }
  .speakerdeck-wrapper iframe {
    box-shadow: none;
    border-radius: 0;
    border: 0;
    margin: 0;
  }
}
.body {
  a {
    text-decoration: underline;
  }
}
</style>
