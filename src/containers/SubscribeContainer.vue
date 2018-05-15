<template>
  <section class="subscribe-container">
    <component-logo class="logo" is-alternative />

    <form class="form" autocomplete="off" novalidate @submit.prevent="send()">
      <component-field
        v-model.trim="name"
        type="text"
        class="field"
        placeholder="Nome"
        message-type="error"
        :message="error.name"
      />

      <component-field
        v-model.trim="email"
        type="email"
        class="field"
        placeholder="E-Mail"
        :message="error.email || 'Fica tranquilo, a gente não envia spam!'"
        :message-type="error.email ? 'error' : 'default'"
      />

      <component-field
        v-model.trim="occupation"
        class="field"
        placeholder="Profissão"
        message-type="error"
        :message="error.occupation"
      />

      <component-button
        type="submit"
        class="subscribe-form-button"
        :disabled="isSending"
        is-alternative
      >
        Enviar <img slot="icon" class="icon" src="~@/assets/icons/PaperPlane.svg" />
      </component-button>
    </form>

    <subscribe-message v-if="isMessageVisible" @close="isMessageVisible = false" />
  </section>
</template>

<script>
  import validate from 'valite'
  import ComponentLogo from '@/components/Component/ComponentLogo'
  import ComponentField from '@/components/Component/ComponentField'
  import ComponentButton from '@/components/Component/ComponentButton'
  import SubscribeMessage from '@/components/Subscribe/SubscribeMessage'

  const isRequired = (value) => typeof value === 'string' && !!value.trim()

  export default {
    components: { ComponentLogo, ComponentField, ComponentButton, SubscribeMessage },
    data () {
      return {
        isMessageVisible: false,
        isSending: false,
        name: '',
        email: '',
        occupation: '',
        error: {
          name: null,
          email: null,
          occupation: null,
        },
      }
    },
    methods: {
      async validate () {
        this.error.name       = isRequired(this.name) ? null : 'Não se esqueça de preencher seu nome.'
        this.error.occupation = isRequired(this.name) ? null : 'Não se esqueça de preencher a profissão.'

        this.error.email = await validate(this.email, [
          (value) => isRequired(value) || 'Não se esqueça de preencher seu email.',
          (value) => /^.+@.+\..+$/.test(value) || 'Esse e-mail não parece valido.'
        ])

        const isError = Object.values(this.error).some((value) => value !== null)
        return isError
      },
      async send () {
        const isError = await this.validate()

        if (isError)
          return

        this.isSending = true
        await fetch('https://a2lab-lp.firebaseio.com/users.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            occupation: this.occupation
          })
        })

        this.isMessageVisible = true
        this.isSending = false
        this.clean()
      },
      clean () {
        this.name = ''
        this.email = ''
        this.occupation = ''
        this.error = {
          name: null,
          email: null,
          occupation: null,
        }
      }
    }
  }
</script>

<style lang="stylus">
  .subscribe-container-form
    box-sizing: border-box
    display: flex
    align-items: center
    flex-direction: column
    width: 100%
    max-width: 768px
    padding: 0 35px

    > .field
      width: 100%

    > .field + .field
      margin-top: 60px

  .subscribe-container
    &
      box-sizing: border-box
      display: flex
      align-items: center
      flex-direction: column
      min-height: calc(100vh - 175px)
      padding-top: 30px
      padding-bottom: 50px
      background-color: transparent
      background-image: linear-gradient(to bottom, #0999ff 0%, #0952ff 100%)

    > .logo
      margin-left: auto
      margin-right: @margin-left
      margin-bottom: 62px

    > .form
      @extend .subscribe-container-form

  .subscribe-form-button
    display: flex
    margin-top: 50px
    margin-left: auto
    cursor: pointer

    > .icon
      width: 20px
      height: @width
</style>
