<template>
  <transition name="modal" appear>
    <div
      class="modal-mask"
      v-show="modalShow && modalId === id">
      <div class="modal-wrapper">

        <app-preloader v-show="loading && preloaderId === id"></app-preloader>

        <div v-show="!loading && preloaderId === id" :id="id" class="modal">
          <button class="modal__close" @click="hideModal(id)"></button>
          <div class="modal__header">
            <p class="modal__avatar">N</p>
            <p class="modal__name">Name</p>
          </div>

          <div class="modal__content">
            <div class="modal__content-item modal__content-item_type_birth">
              <p class="modal__content-item-name">Birth year</p>
              <p class="modal__content-item-descr">Birth year Birth year Birth year Birth year Birth year Birth year Birth year Birth year</p>
            </div>
            <div class="modal__content-item modal__content-item_type_species">
              <p class="modal__content-item-name">Species</p>
              <p class="modal__content-item-descr">Species</p>
            </div>
            <div class="modal__content-item modal__content-item_type_gender">
              <p class="modal__content-item-name">Gender</p>
              <p class="modal__content-item-descr">Gender</p>
            </div>
            <div class="modal__content-item modal__content-item_type_homeworld">
              <p class="modal__content-item-name">Homeworld</p>
              <p class="modal__content-item-descr">Homeworld</p>
            </div>
            <div class="modal__content-item modal__content-item_type_films">
              <p class="modal__content-item-name">Films</p>
              <p class="modal__content-item-descr">Films</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Preloader from '@/components/Preloader.vue'

export default {
  data () {
    return {
      id: 'js-modalCharacter'
    }
  },
  computed: {
    ...mapGetters([
      'modalShow',
      'modalId',
      'loading',
      'preloaderId'
    ])
  },
  methods: {
    ...mapActions([
      'hideModal'
    ])
  },
  components: {
    'app-preloader': Preloader
  }
}
</script>

<style lang="sass">
@import '@/sass/_fonts.sass'
@import '@/sass/_variables.sass'

.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100vh
  background-color: rgba(128, 128, 128, 0.01)
  transition: opacity .3s cubic-bezier(0.390, 0.575, 0.565, 1.000)

// .modal-wrapper
//   display: table-cell
//   vertical-align: middle

.modal
  position: relative
  width: 100vw
  min-height: 100vh
  height: auto
  padding: 48px 24px
  background-color: $color-card
  transition: all .3s cubic-bezier(0.390, 0.575, 0.565, 1.000)
  border: 1px solid green

.modal__close
  position: absolute
  top: 22px
  right: 22px
  background-color: transparent
  border: none
  border-radius: 0
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 12px
    height: 12px
    background-size: contain
    background-position: center
    background-repeat: no-repeat
    background-image: url('../assets/img/close.svg')
    border: 1px solid red
  &:active
    outline: 0
    box-shadow: 0
  &:hover
    cursor: pointer

.modal__header
  display: flex
  flex-wrap: nowrap
  align-items: center
  margin-bottom: 39px
  padding-bottom: 48px
  border-bottom: 2px solid #808080

.modal__avatar
  width: 80px
  height: 80px
  margin: 0
  margin-right: 16px
  font-family: inherit
  font-size: 48px
  font-weight: 500
  line-height: 80px
  text-align: center
  border-radius: 50%
  background-color: #BB86FC

.modal__name
  margin: 0
  font-family: inherit
  font-size: 22px
  font-weight: 700
  line-height: 1
  text-align: left
  color: #ffffff

.modal__content
  display: table
  width: 100%
  height: auto

.modal__content-item
  display: flex
  width: 100%
  border: 1px solid red

.modal__content-item-name
  position: relative
  flex-shrink: 0
  display: flex
  align-items: flex-start
  flex-wrap: nowrap
  width: 140px
  margin: 0
  padding-left: 30px
  padding-right: 24px
  padding-top: 11px
  padding-bottom: 10px
  font-family: inherit
  font-size: 16px
  font-weight: 400
  line-height: 1
  text-align: left
  color: #808080
  border: 1px solid green
  &::before
    content: ''
    position: absolute
    top: 7px
    left: 0
    width: 20px
    height: 20px
    background-size: contain
    background-position: center
    background-repeat: no-repeat
    border: 1px solid red

.modal__content-item_type_birth
  .modal__content-item-name
    &::before
      background-image: url('../assets/img/birth.svg')

.modal__content-item_type_species
  .modal__content-item-name
    &::before
      background-image: url('../assets/img/species.svg')

.modal__content-item_type_gender
  .modal__content-item-name
    &::before
      background-image: url('../assets/img/gender.svg')

.modal__content-item_type_homeworld
  .modal__content-item-name
    &::before
      background-image: url('../assets/img/homeworld.svg')

.modal__content-item_type_films
  .modal__content-item-name
    &::before
      background-image: url('../assets/img/films.svg')

.modal__content-item-descr
  flex-grow: 1
  margin: 0
  padding-top: 11px
  padding-bottom: 10px
  font-family: inherit
  font-size: 16px
  font-weight: 700
  line-height: 1
  text-align: left
  color: #ffffff
  border: 1px solid green

.modal__content-item_type_films
  .modal__content-item-descr span
    display: block
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

.modal-enter,
.modal-enter-active
  // animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

.modal-leave,
.modal-leave-active
  // animation: fade-out 1s ease-out both

@media(min-width: 768px)
  .modal
    width: calc(100vw - 48px)
    min-height: auto
    padding: 80px
    padding-bottom: 76px
    border-radius: 8px

  .modal__name
    font-size: 24px

  .modal__content-item-name,
  .modal__content-item-descr
    font-size: 18px

@media(min-width: 848px)
  .modal
    width: 800px
</style>
