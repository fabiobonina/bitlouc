import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/HelloWorld'
//import Bens from '@/pages/Bens'
//import BemList from '@/components/bem/List'
//import Clientes from '@/pages/Clientes'
//import Cliente from '@/components/cliente/Cliente'
//import Localidades from '@/pages/Localidades'
//import LocalList from '@/components/cliente/localidade/List'
//import LocalView from '@/components/cliente/localidade/View'
//import Usuarios from '@/pages/Usuarios'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/hello', name: 'Hello', component: Hello },
    /*{ path: '/Usuarios', name: 'Usuarios', component: Usuarios },
    { path: '/hello', name: 'Hello', component: Hello },
    { path: '/clientes', component: Clientes},
    { path: '/cliente/:id', component: Cliente, children: [
        {path: '', components: {
            default: LocalList,
        }, name:'Cliente'},
    ]},
    { path: '/localidades', component: Localidades, name:'Localidades'},
    { path: '/localidade/:id', component: LocalView, children: [
        {path: '', components: {
            default: BemList,
        }, name:'Localidade'},
    ]},*/
  ]
})
