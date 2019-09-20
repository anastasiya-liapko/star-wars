<template>
  <div class="home">
    <app-preloader v-show="loading && preloaderId === id"></app-preloader>
    <app-search v-show="!loading && preloaderId === id || preloaderId === 'js-modalCharacter'"></app-search>
    <app-cards v-show="!loading && preloaderId === id || preloaderId === 'js-modalCharacter'"></app-cards>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Preloader from '@/components/Preloader.vue'
import Search from '@/components/Search.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
  data () {
    return {
      id: 'js-home'
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'preloaderId'
    ])
  },
  components: {
    'app-preloader': Preloader,
    'app-search': Search,
    'app-cards': Cards
  }
}
</script>

<style lang="sass">
.home
  flex-grow: 1
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  min-height: calc(100vh - 240px)
  padding: 45px 24px 96px
  border: 1px solid red

@media (min-width: 768px)
  .home
    min-height: calc(100vh * 2 / 3)
    padding-bottom: 9.444vw

@media (min-width: 1440px)
  .home
    min-height: calc(100vh * 2 / 3)
    padding-bottom: 136px
</style>
