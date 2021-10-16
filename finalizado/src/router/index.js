import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/administrador',
    name: 'Administrador',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "administrador" */ '../views/administrador/Administrador.vue')
  },
  {
    path: '/conductores',
    name: 'Conductores',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "administrador" */ '../views/administrador/ListayRegistro.vue')
  },
  {
    path: '/preoperacional',
    name: 'Preoperacional',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/administrador/Preoperacional.vue')
  },
  {
    path: '/vehiculos',
    name: 'Vehiculos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/administrador/Listavehiculos.vue')
  },
  {
    path: '/usuarioconductor',
    name: 'Usuarioconductor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/conductor/Usuarioconductor.vue')
  },
  {
    path: '/superusuario',
    name: 'Superusuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/superadministrador/Superusuario.vue')
  },
  {
    path: '/paginaayuda',
    name: 'Paginaayuda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/Paginaayuda.vue')
  },
  {
    path: '/conductorpreope',
    name: 'Conductorpreope',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preoperacional" */ '../views/conductor/Conductorpreope.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
