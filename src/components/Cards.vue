<template>
  <div
    class="cards">
    <app-card
      v-for="(character, i) in characters"
      v-bind:key="i"
      :character="character">
    </app-card>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import Card from '@/components/Card.vue'

export default {
  data () {
    return {
      domen: process.env.VUE_APP_API,
      lastVisibleElement: ''
    }
  },
  computed: {
    ...mapGetters([
      'characters',
      'url'
    ])
  },
  created () {
    this.addUrl(this.domen + 'people/')
    this.fetch()
    document.addEventListener('scroll', this.showVisible)
  },
  beforeDestroy: function () {
    document.removeEventListener('scroll', this.showVisible)
  },
  methods: {
    ...mapActions([
      'addCharacters',
      'addUrl'
    ]),
    fetch () {
      var context = this

      if (context.url !== null) {
        axios.get(context.url)
          .then(res => {
            context.addUrl(res.data.next)

            if (res.data.count !== 0) {
              context.addCharacters(res.data.results)
            }
          })
          .catch(error => console.log(error))
      }
    },
    isVisible (elem) {
      if (elem === undefined) return false
      var coords = elem.getBoundingClientRect()
      var windowHeight = document.documentElement.clientHeight
      var extendedBottom = 2 * windowHeight
      var bottomVisible = coords.bottom < extendedBottom
      return bottomVisible
    },
    showVisible () {
      var elements = document.getElementsByClassName('card')
      var secondToLastElement = elements[elements.length - 1]
      if (this.isVisible(secondToLastElement) && secondToLastElement !== this.lastVisibleElement) {
        this.fetch()
        this.lastVisibleElement = secondToLastElement
      }
    }
  },
  components: {
    'app-card': Card
  }
}
</script>

<style lang="sass">
.cards
  display: flex
  flex-wrap: wrap
  width: 100%
  height: auto
  border: 1px solid red

@media(min-width: 768px)
  .cards
    width: 84.444vw

@media(min-width: 1440px)
  .cards
    width: 1216px
</style>
