import Vue from 'vue'
import Vuex from 'vuex'
import characters from '@/store/modules/characters'
import modal from '@/store/modules/modal'
import preloader from '@/store/modules/preloader'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    characters,
    modal,
    preloader
  }
})
