import Vue from 'vue'
import App from './App.vue'
import chat from './chat.js'

Vue.config.productionTip = false
chat.init(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')
