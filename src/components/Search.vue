<template>
  <transition name="fade-in" appear>
    <form class="search">
      <label
        for="js-searchInput"
        class="search__label"
        :class="{show: showLabel}">
        Search by name
      </label>
      <div class="search__wrapper">
        <input
          id="js-searchInput"
          class="search__field"
          type="text"
          name="search"
          placeholder="Search by name"
          @focus="showLabel = true"
          @blur="showLabel = false"
          @keyup="debounce"
          v-model="data.search">
        <button
          class="search__submit"
          type="submit"
          @click.prevent>
          Search
        </button>
      </div>
    </form>
  </transition>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      domen: process.env.VUE_APP_API,
      showLabel: false,
      data: {
        search: ''
      },
      debounceInterval: 1000,
      lastTimeout: ''
    }
  },
  methods: {
    ...mapActions([
      'addSearchedCharacters',
      'addUrl'
    ]),
    submit () {
      var context = this

      axios.get(context.domen + 'people/?search=' + context.data.search)
        .then(res => {
          if (res.data.count !== 0) {
            context.addUrl(res.data.next)
            context.addSearchedCharacters(res.data.results)
          }
        })
        .catch(error => console.log(error))
    },
    debounce () {
      var context = this

      if (context.lastTimeout !== '') {
        clearTimeout(context.lastTimeout)
      }

      context.lastTimeout = setTimeout(function () {
        context.submit()
      }, context.debounceInterval)
    }
  },
  validations: {
    data: {
      search: {
        required,
        minLength: minLength(1)
      }
    }
  }
}
</script>

<style lang="sass">
@import '@/sass/_variables.sass'

.search
  display: flex
  flex-direction: column
  align-items: stretch
  width: 100%
  height: calc(34px + 14px)
  margin-bottom: 44.5px
  border: 1px solid green

.search__wrapper
  flex-grow: 1
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: stretch
  border-bottom: 1px solid $color-text

.search__label
  font-family: inherit
  font-size: 12px
  line-height: 14px
  font-weight: 500
  text-align: left
  color: $color-text
  opacity: 0
  box-sizing: border-box
  transition: opacity 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)
  &.show
    opacity: 1

.search__field
  flex-grow: 1
  padding: 0
  font-family: inherit
  font-size: 16px
  line-height: 1
  font-weight: 500
  color: $color-text-main
  background-color: transparent
  border: none
  border-radius: 0
  box-sizing: border-box
  -webkit-appearance: none
  &::placeholder
    font-family: inherit
    font-size: 16px
    line-height: 1
    font-weight: 500
    color: $color-text
    opacity: 1
    transition: opacity 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)
  &:focus
    &::placeholder
      opacity: 0

.search__submit
  position: relative
  flex-shrink: 0
  align-self: center
  width: 26.5px
  height: 34px
  margin: 0
  padding: 0
  padding-top: 7.5px
  padding-bottom: 7.5px
  padding-left: 7.5px
  font-size: 0
  background-color: transparent
  box-sizing: border-box
  border: 1px solid red
  &::before
    content: ''
    position: absolute
    top: 7.5px
    left: 7.5px
    width: 19px
    height: 19px
    background-image: url('../assets/img/search.svg')
    background-position: center
    background-size: contain
    background-repeat: no-repeat

@media(min-width: 768px)
  .search
    width: 55.556vw

  .search__label
    font-size: 13px

  .search__field
    font-size: 18px
    &::placeholder
      font-size: 18px

  .search__submit
    position: relative
    flex-shrink: 0
    align-self: center
    width: 33px
    height: 34px
    margin: 0
    padding: 0
    padding-left: 9px
    font-size: 0
    background-color: transparent
    box-sizing: border-box
    border: 1px solid red
    &::before
      content: ''
      position: absolute
      top: 0
      left: 9px
      width: 24px
      height: 24px
      background-image: url('../assets/img/search.svg')
      background-position: center
      background-size: contain
      background-repeat: no-repeat

@media(min-width: 1440px)
  .search
    width: 800px

</style>
