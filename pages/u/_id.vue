<template>
  <section>
    <b-container>
      <h1>{{ user.name }}</h1>
    </b-container>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: this.user.name,
      meta: [
        { hid: 'description', name: 'description', content: 'Mon super article' }
      ]
    }
  },
  async asyncData ({ app, params, redirect }) {
    if (!params.id) {
      return redirect('/')
    }
    let user = await app.$axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id)
    return {
      user
    }
  }
}
</script>
