<template>
  <footer>
    <div class="footer-inner">
      <nav class="links">
        <a
          href="https://github.com/miyaoka/me"
          rel="nofollow noopener"
          target=“_blank”>
          <img
            src="/img/logo/github.png"
            alt="Powered by GitHub"
          >
        </a>

        <a
          href="https://www.contentful.com/"
          rel="nofollow noopener"
          target=“_blank”>
          <img
            src="/img/logo/contentful.svg"
            alt="Powered by Contentful"
          >
        </a>

      </nav>
    </div>
  </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  background: rgba(255, 255, 255, 0.7);
}
.footer-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.links {
  display: flex;
  align-items: center;
  margin: 2rem auto;
  img {
    margin: 10px;
    width: 80px;
  }
}
</style>
