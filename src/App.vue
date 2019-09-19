<template>
  <transition name="fade-in" mode="out-in" appear>
    <div id="app">
      <app-header/>
      <router-view/>
      <app-footer/>

      <app-modal></app-modal>
    </div>
  </transition>
</template>

<script>
// import { mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'

export default {
  // computed: {
  //   ...mapGetters([
  //     'modalShow',
  //     'modalId'
  //   ])
  // },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-modal': Modal
  }
}
</script>

<style lang="sass">
html
  height: 100%

body
  min-height: 100%
  display: flex
  flex-direction: column
  margin: 0
  .header,
  .footer,
  .home
    filter: blur(0)
    transition: filter 0.3s
  &.open
    // overflow: hidden
    .header,
    .footer,
    .home
      filter: blur(30px)

img
  width: 100%
  height: auto

div,
p
  box-sizing: border-box

#app
  flex-grow: 1
  display: flex
  flex-direction: column
  font-family: 'Roboto', sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #ffffff
  background-color: #333333

.fade-in-enter,
.fade-in-enter-active
  animation: fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both

@keyframes fade-in
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes fade-out
  0%
    opacity: 1
  100%
    opacity: 0
</style>
