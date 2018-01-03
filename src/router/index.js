// 设置路由 宁金良
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import zhusu from '@/components/zhusu'
import zhusuDetail from '@/components/zhusuDetail.vue'
import zhusuList from '@/components/zhusuList'
import travel from '@/components/travel'
import travelDetail from '@/components/travelDetail'
import travelDetailLvxing from '@/components/travelDetailLvxing'
import travelList from '@/components/travelList'
import customTravel from '@/components/customTravel'
import downApp from '@/components/downApp'
import about from '@/components/about'
import business from '@/components/business'
import intelligent from '@/components/intelligent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/zhusu',
      name: 'zhusu',
      component: zhusu
    },
    {
      path:'/zhusuDetail',
      name: 'zhusuDetail',
      component:zhusuDetail 
    },
    {
      path:'/zhusuList',
      name: 'zhusuList',
      component:zhusuList 
    },
    {
      path: '/travel',
      name: 'travel',
      component: travel
    },
    {
      path:'/travelDetail',
      name: 'travelDetail',
      component:travelDetail 
    },
    {
      path:'/travelDetailLvxing',
      name: 'travelDetailLvxing',
      component:travelDetailLvxing 
    },
    
    {
      path:'/travelList',
      name: 'travelList',
      component:travelList 
    },
    {
      path: '/customTravel',
      name: 'customTravel',
      component: customTravel
    },
    {
      path: '/downApp',
      name: 'downApp',
      component: downApp
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/intelligent',
      name: 'intelligent',
      component: intelligent
    }
  ]
})
