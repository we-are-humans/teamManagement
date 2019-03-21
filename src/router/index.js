import Vue from 'vue'
import Router from 'vue-router'
import cpmSport from '../pages/cpmSport'
import cpmLogin from '../pages/cpmLogin'

Vue.use(Router)

export default new Router({

  routes: [ 
    {
      path: '/cpmSport',
      name: 'cpmSport',
      component: cpmSport
    },
    {
      path: '/',
      name: 'cpmLogin',
      component: cpmLogin
    }
  ]
})
