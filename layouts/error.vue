
<template>
  <section>
    <b-container>
      <b-jumbotron :header="title" show>
        <br>
        <b-button variant="primary" to="/">Revenir à l'accueil</b-button>
      </b-jumbotron>
    </b-container>
  </section>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    title () {
      return this.error.statusCode === 404 ? 'Page introuvable' : 'Une erreure est survenue'
    }
  }
}
</script>
