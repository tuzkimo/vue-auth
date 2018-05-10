import http from '@/api'

const state = {
  token: localStorage.token || ''
}

const getters = {
  loggedIn: state => !!state.token
}

const mutations = {
  logout: state => {
    delete localStorage.token
    state.token = ''
  },

  fillToken: (state, token) => {
    state.token = token
  }
}

const actions = {
  login: ({commit}, request) => {
    return new Promise((resolve, reject) => {
      http.post('/login', request).then(response => {
        const { token } = response.data
        commit('fillToken', token)
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
