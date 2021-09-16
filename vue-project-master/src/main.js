// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home'
import Hello from './components/Hello'
import Homechild from './components/home-child'
import User from './components/user'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'homechild',
        component: Homechild
      }
    ]
  },
  {
    path: '/',
    components: {
      default: App,
      user: User
    }
  },
  {
    path: '/Hello',
    component: Hello
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: User
  }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',

  router
})
