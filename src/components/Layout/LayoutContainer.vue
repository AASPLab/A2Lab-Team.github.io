<template>
  <section class="layout-container">
    <main class="content">
      <slot />
    </main>
    <layout-footer v-once />
  </section>
</template>

<script>
  import LayoutFooter from '@/components/Layout/LayoutFooter'

  export default {
    components: { LayoutFooter },
  }
</script>

<style lang="stylus">
  .layout-container
    &
      display: flex
      flex-direction: column
      min-height: 100vh

    > .content
      flex-grow: 1
      flex-basis: 0%
      flex-shrink: 1
</style>
