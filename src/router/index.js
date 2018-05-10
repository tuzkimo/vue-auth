import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Index from '@/components/Index'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Index,
      beforeEnter: requireAuth
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/logout',
      beforeEnter (to, from, next) {
        store.commit('logout')
        next('/login')
      }
    }
  ]
})

function requireAuth (to, from, next) {
  if (store.getters.loggedIn) {
    next()
  } else {
    next({
      path: '/login'
    })
  }
}
