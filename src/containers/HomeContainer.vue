<template>
  <section class="home-container">
    <component-logo class="logo" />

    <div class="topics">
      <home-topic
        v-once
        v-for="topic in topics"
        class="topic"
        :key="topic.title"
        :icon="topic.icon"
        :title="topic.title"
        :description="topic.description"
      />
    </div>

    <h2 class="title">Faça parte do <strong>futuro</strong> do direito</h2>

    <component-button class="button" :to="{ name: 'Inscrição' }" size="xl">
      Seja um <strong>A2 tester</strong>
    </component-button>
  </section>
</template>

<script>
  import topics from '@/topics'
  import HomeTopic from '@/components/Home/HomeTopic'
  import ComponentLogo from '@/components/Component/ComponentLogo'
  import ComponentButton from '@/components/Component/ComponentButton'

  export default {
    components: { HomeTopic, ComponentLogo, ComponentButton },
    data () {
      return { topics }
    },
  }
</script>

<style lang="stylus">
  .home-container-topics
    &
      display: flex
      justify-content: space-around
      flex-wrap: wrap

    > .topic
      width: 90%

      @media screen and (min-width: 768px)
        width: 25%

      @media screen and (max-width: 767px)
        + .topic
          margin-top: 35px

  .home-container
    &
      box-sizing: border-box
      display: flex
      align-items: center
      flex-direction: column
      min-height: calc(100vh - 175px)
      padding-top: 30px
      padding-bottom: 50px
      background-color: #cae4ea

    > .logo
      margin-left: auto
      margin-right: @margin-left
      margin-bottom: 62px

    > .title
      margin: 0
      margin-bottom: 40px
      font-size: 14pt
      font-weight: normal
      text-align: center
      text-transform: uppercase
      color: #1e71a5

    > .topics
      @extends .home-container-topics
      margin-bottom: 45px
</style>
