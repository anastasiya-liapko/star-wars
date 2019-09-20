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
      lastVisibleElement: '',
      timeoutTime: 2000
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
    this.showCharacters()
    document.addEventListener('scroll', this.showVisible)
  },
  beforeDestroy: function () {
    document.removeEventListener('scroll', this.showVisible)
  },
  methods: {
    ...mapActions([
      'addCharacters',
      'addUrl',
      'showPreloader'
    ]),
    handleLodedData (characters) {
      this.addUrl(characters.next)
      if (characters.count !== 0) {
        this.addCharacters(characters.results)
      }
      this.showPreloader([false, 'js-home'])
    },
    fetch () {
      var context = this

      if (context.url !== null) {
        return new Promise(function (resolve, reject) {
          axios.get(context.url)
            .then(res => {
              resolve(res.data)
            })
            .catch(error => console.log(error))
        })
      }
    },
    timeout () {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, this.timeoutTime)
      })
    },
    showCharacters () {
      var context = this
      let p1 = this.fetch()
      let p2 = this.timeout()
      Promise.all([p1, p2]).then(values => {
        context.handleLodedData(values[0])
      }, reason => {
        console.log(reason)
      })
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
      if (this.isVisible(secondToLastElement) && secondToLastElement !== this.lastVisibleElement && this.url !== null) {
        this.fetch()
          .then(value => {
            this.handleLodedData(value)
          })
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
