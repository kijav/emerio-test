import Vue from 'vue'
import Router from 'vue-router'
import searchArea from '@/components/searchArea'
import doctorList from '@/components/doctorList'
import doctorDetail from '@/components/doctorDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchArea',
      component: searchArea
    },
    {
      path: '/doctorList',
      name: 'doctorList',
      component: doctorList
    },
    {
      path: '/doctorDetail/:id',
      name: 'doctorDetail',
      component: doctorDetail
    }
  ]
})
