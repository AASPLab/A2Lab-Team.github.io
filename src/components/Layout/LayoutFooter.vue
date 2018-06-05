<template>
  <footer class="layout-footer">
    <section class="media">
      <h3 class="title">Mídias</h3>

      <div class="links">
        <a
          v-for="media in medias"
          :key="media.name"
          :href="media.link"
          class="link"
          target="_blank"
        >
          <img class="icon" :src="media.icon" :alt="media.name" />
        </a>
      </div>
    </section>

    <section class="institutional">
      <div class="links">
        <a class="link -AASPLab" target="_blank">
          <img class="icon" src="~@/assets/icons/AASPLab.svg" alt="AASPLab" />
        </a>
        <a class="link -AASP" href="https://www.aasp.org.br/" target="_blank">
          <img class="icon" src="~@/assets/icons/AASP.svg" alt="AASP" />
        </a>
      </div>

      <p class="copyright">&copy; 2018 AASPLab - AASP.</p>
      <p class="address">R. Álvares Penteado, Nº 151 - Centro, São Paulo/SP - CEP 01012-905</p>
    </section>
  </footer>
</template>

<script>
  import medias from '@/medias'

  export default {
    data () {
      return { medias }
    }
  }
</script>

<style lang="stylus">
  $layout-footer-links
    &
      display: flex
      flex-direction: row
      justify-content: center
      margin-left: auto
      margin-right: @margin-left

    > .link
      display: block

    > .link > .icon
      display: block
      max-width: 100%
      max-height: 100%

  .layout-institutional-links
    &
      @extends $layout-footer-links
      align-items: flex-end

    > .link.-AASPLab
      width: 51px
      height: 29px

    > .link.-AASP
      width: 62px
      height: 18px

    > .link + .link
      margin-left: 30px

  .layout-footer-media-links
    &
      @extends $layout-footer-links
      box-sizing: border-box
      border-bottom: 1px solid #ffffff
      padding-top: 18px
      padding-bottom: 12px

    > .link
      width: 25px
      height: @width

    > .link + .link
      margin-left: 70px

  .layout-footer-media
    &
      box-sizing: border-box
      padding: 7.6px 6.3px 12px

    > .title
      margin: 0
      color: #fff
      font-size: 2rem
      font-weight: normal
      text-align: center
      text-transform: uppercase

    > .links
      @extends .layout-footer-media-links

  .layout-footer
    &
      height: 175px
      background-color: #333333

    > .media
      @extends .layout-footer-media

    > .institutional
      &
        display: flex
        flex-direction: column

      > .address
      > .copyright
        margin: 0
        color: #ffffff
        font-size: 7pt
        text-align: center
        text-transform: uppercase

      > .copyright
        margin-top: 15px
        margin-bottom: 3.7px

      > .links
        @extends .layout-institutional-links
</style>
