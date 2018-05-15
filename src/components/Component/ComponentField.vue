<template>
  <div class="component-field">
    <input
      v-bind="$attrs"
      class="field"
      autocomplete="new-password"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />

    <span v-if="message" :class="[ 'message', '-' + messageType ]">
      {{ message }}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: null
      },
      messageType: {
        type: String,
        default: 'default',
        validator: (type) => [ 'default', 'error' ].includes(type)
      }
    },
  }
</script>

<style lang="stylus">
  $component-field-text
    font-family: inherit
    color: #ffffff

  .component-field
    &
      display: block

    > .field
      @extends $component-field-text
      box-sizing: border-box
      display: block
      width: 100%
      margin: 0
      margin-bottom: 6px
      border: 0
      border-bottom: 1px solid #ffffff
      padding-bottom: 6px
      font-size: 1.6rem
      outline: none
      background-image: none
      background-color: transparent

    > .field::placeholder
      @extends $component-field-text
      text-transform: uppercase

    > .message
      @extends $component-field-text
      text-transform: uppercase

</style>
