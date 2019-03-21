import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from "element-ui"
Vue.config.productionTip = true
import "./assets/css/iconfont.css"
import "./assets/css/html.css"
import  "./assets/css/common.css"
Vue.use("ElementUI")
import '../static/utf8-jsp/ueditor.config'
import '../static/utf8-jsp/ueditor.all'
import '../static/utf8-jsp/lang/zh-cn/zh-cn'

new Vue({
  el: '#app',
  router,
  Vuex,
  render(h) {
    return h(App)
  }
})
