<template>
  <transition name="fade-in" appear>
    <div class="preloader">
      <div class="preloader__content">
        <div class="preloader__wrapper">
          <div class="preloader__pic"></div>
          <span class="preloader__light preloader__light_size_l"></span>
          <span class="preloader__light preloader__light_size_m"></span>
          <span class="preloader__light preloader__light_size_s"></span>
        </div>
      </div>
    </div>
  </transition>
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
  background-color: transparent
  box-sizing: border-box

.preloader__content
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  animation: preloader 3s linear infinite

.preloader__wrapper
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  transform: rotate(180deg)

.preloader__pic
  width: 60px
  height: 60px
  background-image: url('../assets/img/preloader.svg')
  background-position: center
  background-size: 100% auto
  background-repeat: no-repeat

.preloader__light
  margin-bottom: 2px
  background-color: #6EF6FF

.preloader__light_size_l
  margin-top: -6px
  width: 13.63px
  height: 2px
  animation: light-l 0.7s linear infinite

.preloader__light_size_m
  width: 11.19px
  height: 2px
  animation: light-m 0.7s linear infinite

.preloader__light_size_s
  width: 8.76px
  height: 2px
  animation: light-s 0.7s linear infinite

@keyframes preloader
  0%
    transform: rotate(0) translateX(50px)
  100%
    transform: rotate(360deg) translateX(50px)

@keyframes light-l
  0%
    opacity: 1
  33.33%
    opacity: 0.4
  66.66%
    opacity: 0.1
  100%
    opacity: 0

@keyframes light-m
  0%
    opacity: 0.4
  33.33%
    opacity: 1
  66.66%
    opacity: 0.1
  100%
    opacity: 0

@keyframes light-s
  0%
    opacity: 0.1
  33.33%
    opacity: 0.4
  66.66%
    opacity: 1
  100%
    opacity: 0

</style>
