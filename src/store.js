import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const port = 8090
const host = 'localhost'

// eslint-disable-next-line no-unused-vars
const baseUrl = process.env.VUE_APP_URL
// eslint-disable-next-line no-unused-vars
const apiUrl = `http://${host}:${port}/app/`

export default new Vuex.Store({
  state: {
    apiUrl,
    baseUrl
  },
  mutations: {},
  actions: {}
})
