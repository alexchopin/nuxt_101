<template>
  <section>
    <b-container>
      <h1>{{ $route.params.slug }}</h1>
      <hr>
      <nuxt-link v-if="$route.name === 'blog-slug-comments'" :to="{ name: 'blog-slug', params: $route.params }">Masquer les commentaires</nuxt-link>
      <nuxt-link v-else :to="{ name: 'blog-slug-comments', params: $route.params }">Afficher les commentaires</nuxt-link>
      <hr>
      <nuxt-child/>
    </b-container>
  </section>
</template>
