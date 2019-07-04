import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import xcStore from './xcStore'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data() {
    return {
      xcStore
    }
  },
  render: h => h(App)
}).$mount('#app')
