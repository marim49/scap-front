import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        token: null
    },
    getters: {
        loading(state) { return state.loading },
        isLoggedIn(state) { return state.token !== null }
    },
    actions: {
        showLoading({ commit }) { commit('SHOW_LOADING') },
        hideLoading({ commit }) { commit('HIDE_LOADING') },
        login({ commit }, token) {
            commit('LOGIN', token)
        },
        logout({ commit }) {
            commit('LOGOUT')
        }
    },
    mutations: {
        SHOW_LOADING(state) { state.loading = true },
        HIDE_LOADING(state) { state.loading = false },
        LOGIN(state, token) {
            state.token = token
            axios.defaults.headers.common['Authorizaton'] = token
            setTimeout(templateInit, 10); // eslint-disable-line 
        },
        LOGOUT(state) {
            state.token = null
            axios.defaults.headers.common['Authorizaton'] = null
        }
    },
})
