<template>
  <section class="container">
    <div class="about">
      <div v-html="about"/>
      <div v-html="accounts"/>
    </div>
    <div class="activity">
      <div v-html="activity"/>
      <div v-html="works"/>
    </div>
  </section>
</template>

<script>
import about from '~/content/about.md'
import accounts from '~/content/accounts.md'
import activity from '~/content/activity.md'
import works from '~/content/works.md'

export default {
  data() {
    return {
      about,
      accounts,
      activity,
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
@import '~assets/css/mixin/_mediaquery.scss';

.container {
  h1,
  h2 {
    margin: 2rem 0;
  }
  iframe {
    max-width: 100%;
  }
  img,
  .speakerdeck-wrapper {
    max-width: 500px;
    width: 100%;
  }
}
$side-width: 400px;
$clr-main: #e3cf7f;
$clr-sub: #3c4271;

.about {
  position: fixed;
  width: $side-width;
  padding: 2rem;
  color: $clr-main;

  @include mq(tablet) {
    position: unset;
    width: auto;
  }

  a {
    color: $clr-main;
    text-decoration: underline;
    &:hover {
      color: $clr-sub;
      background: $clr-main;
    }
  }
}
.activity {
  padding: 2rem;
  color: $clr-sub;
  margin-left: $side-width;
  background: $clr-main;

  @include mq(tablet) {
    margin-left: auto;
  }

  a {
    color: $clr-sub;
    text-decoration: underline;

    &:hover {
      color: $clr-main;
      background: $clr-sub;
    }
  }
  h2 {
    border-bottom: 1px solid $clr-sub;
  }

  h3 {
    &,
    & a {
      color: $clr-main;
      background: $clr-sub;
    }
    padding: 0.1rem 1rem;
    margin: 2rem 0 1rem;
  }
}

blockquote {
  padding: 1rem;
}
blockquote,
code {
  background-color: rgba(0, 0, 0, 0.05);
  font-size: 0.9rem;
}
</style>
