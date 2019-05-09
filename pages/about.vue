<template>
  <section>
    <b-container>
      <h1>À propos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi perferendis tenetur sapiente fugit cumque ex alias eius officia quasi ipsam eum earum autem veritatis vel laboriosam, at necessitatibus doloremque!
      </p>
    </b-container>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'À propos',
      meta: [
        { hid: 'description', name: 'description', content: 'Salut, ceci est une description à propos de moi!' }
      ]
    }
  }
}
</script>
