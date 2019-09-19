<template>
  <div class="preloader">
    <div class="preloader__pic"></div>
  </div>
</template>

<style lang="sass">
@import '@/sass/_variables.sass'

.preloader
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  background-color: $color-back
  box-sizing: border-box
  border: 1px solid red

.preloader__pic
  width: 42.13px
  height: 42.13px
  border: 1px solid green
</style>
