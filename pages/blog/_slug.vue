<template>
  <section>
    <b-container>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <nuxt-link :to="{ name: 'u-id', params: { id: user.id }}">{{ user.username }}</nuxt-link>
      <hr>
      <nuxt-link v-if="$route.name === 'blog-slug-comments'" :to="{ name: 'blog-slug', params: $route.params }">Masquer les commentaires</nuxt-link>
      <nuxt-link v-else :to="{ name: 'blog-slug-comments', params: $route.params }">Afficher les commentaires</nuxt-link>
      <hr>
      <nuxt-child/>
    </b-container>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: 'Mon super article' }
      ]
    }
  },
  async asyncData ({ app, params }) {
    let post = await app.$axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.slug)
    let user = await app.$axios.$get('https://jsonplaceholder.typicode.com/users/' + post.userId)
    return {
      post,
      user
    }
  }
}
</script>
