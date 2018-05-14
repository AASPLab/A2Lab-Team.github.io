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
      border-radius: 6px
      background-color: #0999ff

    > .text
      color: #ffffff
      text-transform: uppercase


    &.-is-button
      border: 0 none transparent
      outline: 0 none transparent
      background-image: none
      font-family: inherit

      > .text
        font-family: inherit

    &.-is-link
      text-decoration: none

    &.-is-alternative
      background-color: transparent
      border: 3px solid #ffffff

      > .text
        font-weight: 700

    &.-xl
      height: 62px
      padding-left: 12px
      padding-right: @padding-left
      line-height: @height

      > .text
        line-height: @height
        font-size: 21pt

      &.-is-alternative > .text
        line-height: (@height - 3px * 2)

    &.-sm
      height: 36px
      padding-left: 6px
      padding-right: @padding-left

      > .text
        line-height: @height
        font-size: 14pt

      &.-is-alternative > .text
        line-height: (@height - 3px * 2)
</style>
