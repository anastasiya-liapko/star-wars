<template>
  <form class="search">
    <label for="js-searchInput" class="search__label">Seacrh by name</label>
    <div class="search__wrapper">
      <input id="js-searchInput" class="search__field" type="text" name="search" placeholder="Seacrh by name">
      <button class="search__submit" type="submit">Search</button>
    </div>
  </form>
</template>

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
  box-sizing: border-box

.search__field
  flex-grow: 1
  padding: 0
  background-color: transparent
  border: none
  border-radius: 0
  box-sizing: border-box
  -webkit-appearance: none

.search__submit
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

</style>
