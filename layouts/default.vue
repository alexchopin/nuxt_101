<template>
  <div>
    <n-navbar/>
    <nuxt />
  </div>
</template>

<script>
import nNavbar from '@/components/navbar'

export default {
  components: {
    nNavbar
  }
}
</script>

<style>
section {
  padding: 2rem 0;
}
</style>
