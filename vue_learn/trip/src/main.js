// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import store from './store/index'
import AMap from 'vue-amap'

Vue.use(mandMobile)
Vue.use(AMap)

AMap.initAMapApiLoader({
  // 高德的key
  key: '2631f67df6319d3197d4966e1359ba16',
  plugin: ['AMap.Autocomplete',
    'AMap.PlaceSearch',
    'AMap.Scale',
    'AMap.OverView', 
    'AMap.ToolBar', 
    'AMap.MapType', 
    'AMap.PolyEditor', 
    'AMap.CircleEditor']
})

// 请求拦截器
import requestPlugin from './request/http.js'
Vue.use(requestPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
