<template>
  <section v-if="user">
    <b-container>
      {{ user.name }}
    </b-container>
  </section>
</template>

<script>
export default {
  middleware ({ store, redirect }) {
    if (!store.getters.user) {
      return redirect('/')
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
