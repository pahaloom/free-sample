import VueFbCustomerChat from 'vue-fb-customer-chat'

function init(Vue) {
    Vue.use(VueFbCustomerChat, {
        page_id: 2132038590155066,
        theme_color: '#333333',
        locale: 'en_US',
      })
}

export default { init }
