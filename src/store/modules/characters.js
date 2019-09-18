const state = {
  characters: []
}

const mutations = {
  'ADD_CHARACTERS' (state, value) {
    for (let i = 0; i < value.length; i++) {
      state.characters.push(value[i])
    }
  }
}

const actions = {
  addCharacters: ({ commit }, value) => {
    commit('ADD_CHARACTERS', value)
  }
}

const getters = {
  characters: state => {
    return state.characters
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
