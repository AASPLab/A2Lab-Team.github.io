<template>
  <figure class="component-logo">
    <img
      v-if="isAlternative"
      class="image"
      src="~@/assets/images/Logo-branco.png"
      alt="A2Lab"
      title="Logo branco da A2Lab"
    />
    <img
      v-else
      class="image"
      src="~@/assets/images/Logo.png"
      alt="A2Lab"
      title="Logo da A2Lab"
    />
  </figure>
</template>

<script>
  export default {
    props: {
      isAlternative: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  .component-logo
    &
      display: block
      width: 215px
      height: 120px
      margin: 0

    > .image
      display: block
      width: 100%
      height: 100%
</style>
