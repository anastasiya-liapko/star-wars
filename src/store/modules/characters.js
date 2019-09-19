const state = {
  characters: [],
  url: null
}

const mutations = {
  'ADD_CHARACTERS' (state, value) {
    for (let i = 0; i < value.length; i++) {
      state.characters.push(value[i])
    }
  },
  'ADD_SEARCHED_CHARACTERS' (state, value) {
    state.characters = []

    setTimeout(function () {
      for (let i = 0; i < value.length; i++) {
        state.characters.push(value[i])
      }
    }, 500)
  },
  'ADD_URL' (state, value) {
    state.url = value
  }
}

const actions = {
  addCharacters: ({ commit }, value) => {
    commit('ADD_CHARACTERS', value)
  },
  addSearchedCharacters: ({ commit }, value) => {
    commit('ADD_SEARCHED_CHARACTERS', value)
  },
  addUrl: ({ commit }, value) => {
    commit('ADD_URL', value)
  }
}

const getters = {
  characters: state => {
    return state.characters
  },
  url: state => {
    return state.url
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
