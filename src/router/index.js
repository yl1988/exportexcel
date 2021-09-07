import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/mkf',
        component: ()=>import('../views/mkf')
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
