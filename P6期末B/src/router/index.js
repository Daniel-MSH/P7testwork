import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'navbars',
        component: () => import('@/components/navbar'),
        redirect: '/Home',
        children: [
            {
                path: '/Home',
                name: 'Home',
                component: Home
            }, {
                path: '/about',
                name: 'About',
                component: () => import('../views/About.vue')
            },
            {
                path: '/my',
                name: 'my',
                component: () => import('../views/my.vue')
            },
            {
                path: '/us',
                name: 'us',
                component: () => import('../views/us.vue')
            },
        ]
    },
    {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/goods.vue')
    },{
        path: '/paths',
        name: 'paths',
        component: () => import('../components/path.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router