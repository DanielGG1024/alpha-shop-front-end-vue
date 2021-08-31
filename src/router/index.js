import Vue from 'vue'
import VueRouter from 'vue-router'
import AlphaShop from '../views/AlphaShop.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'AlphaShop',
    component: AlphaShop
  },
]

const router = new VueRouter({
  routes
})

export default router

