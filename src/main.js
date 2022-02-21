import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import chat from './chat.js'

Vue.config.productionTip = false
Vue.use(VueMeta)
chat.init(Vue)

new Vue({
  render: h => h(App),
}).$mount('#app')
