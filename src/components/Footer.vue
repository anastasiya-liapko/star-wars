<template>
  <div class="footer">
    <p class="footer__content">STAR WARS CHARACTER</p>
    <p class="footer__content">Encyclopedia, 2019</p>
  </div>
</template>

<style lang="sass">
@import '@/sass/_variables.sass'

.footer
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100vw
  height: 100px
  background-color: $color-card
  border: 1px solid green

.footer__content
  margin: 0
  font-family: inherit
  font-size: 14px
  line-height: 16px
  font-weight: 700
  letter-spacing: 0.11em
  text-transform: uppercase
  color: $color-text-main

@media(min-width: 768px)
  .footer
    flex-direction: row
    align-items: center
    justify-content: center

  .footer__content
    font-size: 18px
    line-height: 1
    &:first-child
      margin-right: 6px
</style>
