<template>
  <figure class="component-logo">
    <img
      v-if="isAlternative"
      class="image"
      src="~@/assets/images/Logo-White.svg"
      alt="AASPLab"
      title="Logo branco da AASPLab"
    />
    <img
      v-else
      class="image"
      src="~@/assets/images/Logo.svg"
      alt="AASPLab"
      title="Logo da AASPLab"
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
