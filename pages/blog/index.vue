<template>
  <section>
    <b-container>
      <h1>Articles</h1>
      <b-nav vertical>
        <b-nav-item v-for="post in posts" :key="post.id" :to="{ name: 'blog-slug', params: { slug: post.id }}">
          {{ post.title }}
        </b-nav-item>
      </b-nav>
    </b-container>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'Mon super Blog' }
      ]
    }
  },
  async asyncData ({ app }) {
    let posts = await app.$axios.$get('https://jsonplaceholder.typicode.com/posts')
    return {
      posts
    }
  }
}
</script>
