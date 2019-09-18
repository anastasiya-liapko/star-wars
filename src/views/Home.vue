<template>
  <div class="home">
    <!-- <app-preloader></app-preloader> -->
    <app-search></app-search>
    <app-cards></app-cards>
  </div>
</template>

<script>
import Preloader from '@/components/Preloader.vue'
import Search from '@/components/Search.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
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
  width: 100%
  min-height: calc(100vh - 240px)
  padding: 45px 24px 120px
  border: 1px solid red

@media (min-width: 768px)
  .home
    min-height: calc(100vh * 2 / 3)

</style>
