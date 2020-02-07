import Vue from 'vue'
import App from './App.vue'
import router from './Router.js'

import VeeValidate from 'vee-validate';  // Add this
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
