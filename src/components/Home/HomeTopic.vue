<template>
  <section class="home-topic">
    <figure class="icon">
      <img class="image" :src="icon" :alt="title" />
    </figure>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </section>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="stylus">
  .home-topic-icon
    &
      display: block
      margin: 0

    > .image
      display: block
      max-width: 100%
      max-height: 100%

  $font-color = #000000

  .home-topic
    &
      display: block

    > .icon
      @extends .home-topic-icon
      width: 62px
      height: @width
      margin-left: auto
      margin-right: @margin-left
      margin-bottom: 15px

    > .title
      margin: 0
      margin-bottom: 10px
      font-size: 14pt
      font-weight: bold
      color: $font-color
      text-align: center
      text-transform: uppercase

    > .description
      margin: 0
      color: $font-color
      font-size: 10pt
      text-align: justify
</style>
