<template>
  <div class="subscribe-message" @click="$emit('close')">
    <figure class="figure">
      <img class="image" src="~@/assets/icons/PaperPlane.svg" />
    </figure>

    <h3 class="first-line">Enviado com sucesso</h3>
    <h2 class="second-line">Obrigado!</h2>
  </div>
</template>

<script>
  export default {
    destroyed () {
      document.body.classList.remove('-subscribe-message-visible')
    },
    mounted () {
      document.body.classList.add('-subscribe-message-visible')
    }
  }
</script>

<style lang="stylus">
  $subscribe-message-font-color = #ffffff

  body.-subscribe-message-visible
    overflow: hidden
    max-width: 100vw
    max-height: 100vh

  .subscribe-message
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: 1
    display: flex
    align-items: center
    flex-direction: column
    justify-content: space-around
    width: 300px
    height: 200px
    border-radius: 20px
    background-color: rgba(#49494E, .8)
    box-shadow: 0px 8px 10px -4px rgba(#000, .5)

    &::before
      position: fixed
      display: block
      width: 100vw
      height: 100vh
      background-color: rgba(#000, .2)
      content: ''
      z-index: -1

    > .figure
      width: 100px
      height: 80px
      margin: 0

    > .first-line
    > .second-line
      margin: 0
      color: $subscribe-message-font-color
      text-transform: uppercase

    > .first-line
      font-size: 16pt
      font-weight: 400

    > .second-line
      font-size: 28pt
      font-weight: 700
</style>
