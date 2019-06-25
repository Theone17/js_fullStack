// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import $ from 'jquery'
import 'bootstrap3/dist/css/bootstrap.css'
// import Home from './components/home'
// import PlanList from './components/planList'

Vue.config.productionTip = false
// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     component: Home
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/planList',
//     component: PlanList
//   }
// ]

// const router = new VueRouter({
//   routes
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
