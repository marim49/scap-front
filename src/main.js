import Vue from 'vue'
import App from './App.vue'
import { mapActions } from 'vuex'
import router from './router'
import store from './store'
import PNotify from 'pnotify/dist/es/PNotify'
import PageHeader from '@/components/controls/PageHeader'

Vue.config.productionTip = false
PNotify.defaults.styling = 'material'
PNotify.defaults.icons = 'material'

Vue.component('page-header', PageHeader)


Vue.mixin({
  methods: mapActions(['showLoading', 'hideLoading'])
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
