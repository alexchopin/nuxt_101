<template>
  <section>
    <b-container>
      <h1>Articles</h1>
      <b-nav vertical>
        <b-nav-item v-for="post in posts" :key="post.slug" :to="{ name: 'blog-slug', params: { slug: post.slug }}">
          {{ post.title }}
        </b-nav-item>
      </b-nav>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        { title: 'Hello', slug: 'hello' },
        { title: 'Hallo', slug: 'hallo' },
        { title: 'Bonjour', slug: 'bonjour' }
      ]
    }
  }
}
</script>
