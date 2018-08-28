import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Lojas from '@/pages/Lojas'
//import Bens from '@/pages/Bens'
//import BemList from '@/components/bem/List'

//import Cliente from '@/components/cliente/Cliente'
//import Localidades from '@/pages/Localidades'
//import LocalList from '@/components/cliente/localidade/List'
//import LocalView from '@/components/cliente/localidade/View'
//import Usuarios from '@/pages/Usuarios'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/lojas', name: 'Lojas', component: Lojas},
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
