<template>
  <div>
    Commentaires
  </div>
</template>

<script>
export default {
  transition: {
    name: 'bounce',
    mode: 'out-in'
  }
}
</script>

<style lang="scss">
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
