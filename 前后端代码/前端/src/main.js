import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui';
import Cookie from 'js-cookie'
import 'element-ui/lib/theme-chalk/index.css';
import './util/rem'
import './util/flexible'
import CommonSide from './components/CommonSide'
Vue.use(CommonSide)
Vue.component('CommonSide', CommonSide)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI);
//添加全局前置守卫
// router.beforeEach((to, from, next) => {
//   const token = Cookie.get('token')
//   if (!token && to.name !== 'Login') {
//     next({ name: 'Login' })
//   } else if (token && to.name === 'Login') {
//     next({ name: 'Home' })
//   } else {
//     next()
//   }
// })

new Vue({
  render: h => h(App),
  components:{CommonSide},
  router,
}).$mount('#app')
