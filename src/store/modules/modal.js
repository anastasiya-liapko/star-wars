const state = {
  modalId: '',
  modalShow: false
}

const mutations = {
  'SHOW_MODAL' (state, id) {
    state.modalShow = true
    state.modalId = id
    var body = document.querySelector('body')
    body.classList.add('open')
  },
  'HIDE_MODAL' (state, id) {
    state.modalShow = false
    state.modalId = ''
    var body = document.querySelector('body')
    body.classList.remove('open')
  }
}

const actions = {
  showModal: ({ commit }, id) => {
    commit('SHOW_MODAL', id)
  },
  hideModal: ({ commit }, id) => {
    commit('HIDE_MODAL', id)
  }
}

const getters = {
  modalId: state => {
    return state.modalId
  },
  modalShow: state => {
    return state.modalShow
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

