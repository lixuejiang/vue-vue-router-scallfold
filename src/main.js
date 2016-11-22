import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routers/index'

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App)
  },
})
