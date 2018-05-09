<template>
  <footer class="layout-footer">
    <section class="media">
      <h3 class="title">Mídias</h3>
    </section>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus">
  $layout-footer-media
    &
      padding-top: 7.5px

    > .title
      margin: 0
      color: #fff
      font-size: 2rem
      font-weight: normal
      text-align: center
      text-transform: uppercase

  .layout-footer
    &
      height: 155px
      background-color: #333333

    > .media
      @extends $layout-footer-media
</style>
