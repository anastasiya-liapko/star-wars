const state = {
  preloaderId: 'js-home',
  loading: true
}

const mutations = {
  'SHOW_PRELOADER' (state, value) {
    state.loading = value[0]
    state.preloaderId = value[1]
  }
}

const actions = {
  showPreloader: ({ commit }, value) => {
    commit('SHOW_PRELOADER', value)
  }
}

const getters = {
  loading: state => {
    return state.loading
  },
  preloaderId: state => {
    return state.preloaderId
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
