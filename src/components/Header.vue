<template>
  <div class="header">
    <div class="header__logo">
      <div class="header__logo-star-wars header__logo-star-wars_position_top"></div>
      <p class="header__logo-descr">CHARACTER Encyclopedia</p>
      <div class="header__logo-star-wars header__logo-star-wars_position_bottom"></div>
    </div>
  </div>
</template>

<style lang="sass">
.header
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 240px
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(../assets/img/star-wars.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center

.header__logo
  width: 212px
  height: 125px

.header__logo-star-wars
  position: relative
  width: 100%
  height: 40%
  overflow: hidden
  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-image: url('../assets/img/logo.png')
    background-size: 100% auto

.header__logo-star-wars_position_top
  &::before

.header__logo-star-wars_position_bottom
  &::before
    top: -103%

.header__logo-descr
  margin: 0
  margin-top: 7px
  margin-bottom: 4px
  font-family: inherit
  font-size: calc(24px / 1.78)
  line-height: 1
  font-weight: 700
  letter-spacing: 0.11em
  text-transform: uppercase
  color: #ffffff
  white-space: nowrap

@media (min-width: 768px)
  .header
    height: calc(100vh / 3)

  .header__logo
    width: calc(100vh / 3 / 1.18)
    height: calc(100vh / 3 / 2)

  .header__logo-descr
    margin-top: calc(100vh / 100)
    margin-bottom: calc(100vh / 150)
    font-size: calc(100vh / 57)
</style>
