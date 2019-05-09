<template>
  <section>
    <b-container>
      <b-alert show>Bienvenue</b-alert>
      <multiselect v-model="value" :options="options"></multiselect>
    </b-container>
  </section>
</template>

<script>
export default {
  data () {
    return {
      value: null,
      options: ['React', 'Angular', 'Vue']
    }
  }
}
</script>

<style>
</style>
