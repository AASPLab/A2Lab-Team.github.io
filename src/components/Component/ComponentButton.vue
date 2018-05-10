<template>
  <component
    v-bind="$attrs"
    v-on="$listeners"
    :class="classes"
    :is="to ? 'router-link' : 'button'"
    :to="to ? to : null"
  >
    <span class="text">
      <slot />
    </span>

    <slot name="icon" />
  </component>
</template>

<script>
  export default {
    props: {
      isAlternative: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'sm',
        validator: (size) => ['sm', 'xl'].includes(size)
      },
      to: {
        type: [ Object, String ],
        default: null
      }
    },
    computed: {
      classes () {
        return [
          'component-button', '-' + this.size, {
            '-is-alternative': this.isAlternative,
            '-is-link': this.to,
            '-is-button': !this.to
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  .component-button
    &
      display: inline-block
      align-items: center
      background-color: #0999ff

    &.-is-button
      border: 0 none transparent
      outline: 0 none transparent
      background-image: none
      font-family: inherit

      > .text
        font-family: inherit

    &.-is-link
      text-decoration: none

    > .text
      color: #ffffff
      text-transform: uppercase

    &.-xl
      &
        height: 62px
        padding-left: 12px
        padding-right: @padding-left
        border-radius: 6px
        line-height: @height

      > .text
        font-size: 21pt
        line-height: @height
</style>
