export const state = () => ({
  user: null
})

export const getters = {
  user (state) {
    return state.user
  }
}

export const mutations = {
  SET (state, { key, value }) {
    state[key] = value
  }
}

export const actions = {
  login ({ commit }) {
    commit('SET', { key: 'user', value: { name: 'alex' }})
  },
  logout ({ commit }) {
    commit('SET', { key: 'user', value: null })
  },
  nuxtServerInit () {
    console.log('Hello from the server')
  }
}
