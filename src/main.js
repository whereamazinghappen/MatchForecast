import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './config/routers'
import Home from './views/Home.vue'
Vue.use(VueRouter)
const router = new VueRouter({routes:routers});
const app = new Vue({
   router:router,   
   render:h=>h(App)
}).$mount('#app')
// router.start(App, '#app')
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
