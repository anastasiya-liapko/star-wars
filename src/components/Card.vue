<template>
  <transition name="fade-down" appear>
    <div
      class="card"
      @click="showModalCharacter(character, 'js-modalCharacter')">
      <p
        class="card__elem card__elem_type_avatar"
        :style="'background-color: #' + randomColor">
        {{ character.name.split('').shift() }}
      </p>
      <p class="card__elem card__elem_type_name">{{ character.name }}</p>
      <transition name="fade" appear>
        <p
          class="card__elem card__elem_type_species"
          v-if="characterSpecies !== ''">
          {{ characterSpecies }}
        </p>
      </transition>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      characterSpecies: ''
    }
  },
  computed: {
    ...mapGetters([
      'modalId',
      'modalShow'
    ]),
    randomColor () {
      return Math.floor(Math.random() * 16777215).toString(16)
    }
  },
  props: ['character'],
  created () {
    this.getCharacterSpecies(this.character.species)
    document.addEventListener('mouseup', this.hide)
  },
  beforeDestroy: function () {
    document.removeEventListener('mouseup', this.hide)
  },
  methods: {
    ...mapActions([
      'showModal',
      'hideModal'
    ]),
    getCharacterSpecies (url) {
      var context = this

      if (url !== null) {
        axios.get(url)
          .then(res => {
            context.characterSpecies = res.data.name
          })
          .catch(error => console.log(error))
      }
    },
    getCharacterHomeworld (url) {
      var context = this

      if (url !== null) {
        return new Promise (function (resolve, reject) {
          axios.get(url)
            .then(res => {
              resolve(res.data.name)
            })
            .catch(error => console.log(error))
        })
      }
    },
    getCharacterFilms (url) {
      var context = this

      if (url !== null) {
        return new Promise (function (resolve, reject) {
          axios.get(url)
            .then(res => {
              console.log(res)
              resolve(res.data.title)
            })
            .catch(error => console.log(error))
        })
      }
    },
    hide (e) {
      if (document.querySelector('.modal-container') !== null) {
        var modalId = document.querySelector('.modal-container').getAttribute('id')
      }
      if (!e.target.classList.contains('modal-container') && e.target.closest('.modal-container') === null) {
        this.hideModal(modalId)
      }
    },
    showModalCharacter (character, modalId) {

      console.log(character)
      var birth = document.querySelector('.modal__content-item_type_birth .modal__content-item-descr'),
          species = document.querySelector('.modal__content-item_type_species .modal__content-item-descr'),
          gender = document.querySelector('.modal__content-item_type_gender .modal__content-item-descr'),
          homeworld = document.querySelector('.modal__content-item_type_homeworld .modal__content-item-descr'),
          films = document.querySelector('.modal__content-item_type_films .modal__content-item-descr')

      birth.textContent = character['birth_year']
      species.textContent = this.characterSpecies
      gender.textContent = character['gender']

      this.getCharacterHomeworld(character['homeworld'])
        .then(resultHomeworld => {
          console.log(resultHomeworld)
          homeworld.textContent = resultHomeworld
          let promiseFilms = []
          for (let i = 0; i < character['films'].length; i++) {
            promiseFilms.push(this.getCharacterFilms(character['films'][i]))
          }
          return Promise.all(promiseFilms)
        })
        .then(resultFilms => {
          console.log(resultFilms)
          films.textContent = resultFilms
          this.showModal(modalId)
        })
    }
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.card
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  min-height: 200px
  height: auto
  margin-bottom: 24px
  padding: 33px
  background-color: $color-card
  border-radius: 8px
  box-shadow: 0px 10px 30px 0 rgba(0, 0, 0, 0.4)
  transition: box-shadow 0.5s
  &:last-child
    margin-bottom: 0
  &:hover,
  &:active
    box-shadow: 0px 10px 40px 0 rgba(37, 136, 167, 0.38)
    cursor: url('../assets/img/ellipse.svg'), pointer

.card__elem
  margin: 0
  margin-bottom: 10px
  &:last-child
    margin-bottom: 0

.card__elem_type_avatar
  width: 80px
  height: 80px
  margin-bottom: 13px
  font-family: inherit
  font-size: 48px
  font-weight: 500
  line-height: 80px
  text-align: center
  border-radius: 50%
  background-color: #BB86FC

.card__elem_type_name
  font-family: inherit
  font-size: 18px
  font-weight: 700
  line-height: 1
  color: #ffffff

.card__elem_type_species
  font-family: inherit
  font-size: 13px
  font-weight: 400
  line-height: 1
  color: #808080

@keyframes fadeInDown
  from
    opacity: 0
    transform: translate3d(0, 60px, 0)
  to
    opacity: 1
    transform: none

@keyframes fadeOutUp
  from
    opacity: 1
    transform: none
  to
    opacity: 0
    transform: translate3d(0, 60px, 0)

.fade-down-enter-active
  animation-name: fadeInDown
  animation-duration: 0.5s

.fade-down-leave-active
  animation-name: fadeOutUp
  animation-duration: 0.3s

@keyframes fadeIn
  from
    opacity: 0
  to
    opacity: 1

@keyframes fadeOut
  from
    opacity: 1
  to
    opacity: 0

.fade-enter-active
  animation-name: fadeIn
  animation-duration: 0.5s

.fade-leave-active
  animation-name: fadeOut
  animation-duration: 0.3s

@media (min-width: 768px)
  .card
    &:hover,
    &:active
      cursor: pointer
</style>
