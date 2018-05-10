<template>
  <layout-container>
    <router-view />
  </layout-container>
</template>

<script>
  import LayoutContainer from '@/components/LayoutContainer'

  export default {
    components: { LayoutContainer },
  }
</script>

<style lang="stylus" src="@/assets/styles/base.styl"></style>
