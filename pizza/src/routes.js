//一级路由
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/about/About'
import Admin from './components/Admin'
import Register from './components/Register'
import Login from './components/Login'


// 二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'


//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


//配置路由
export const routes = [
  {path: '/', name: "homeLink", components: {
    default: Home,
    'orderingGuide': OrderingGuide,
    'history': History,
    'delivery': Delivery
  }},
  {path: '/menu', component: Menu, name: "menuLink"},
  {path: '/admin', component: Admin},
  {path: '/login', name: "loginLink", component: Login},
  {path: '/register', component: Register},
  {path: '/about', component: About, redirect: '/about/contact', children:[
    {path: '/about/contact', name: 'contactLink', redirect: '/personname', component: Contact, children: [
      {path: '/phone', name: 'phoneLink', component: Phone},
      {path: '/personname', name: 'personNameLink', component: PersonName}
    ]},
    {path: '/history', name: 'historyLink', component: History},
    {path: '/delivery', name: 'deliveryLink', component: Delivery},
    {path: '/orderingGuide', name: 'orderingGuideLink', component: OrderingGuide}
  ]},
  {path: '*', redirect: '/'}
]

