import Vue from 'vue'
import Router from 'vue-router'
import vmodel from '@/components/vmodel'
import mintForm from '@/components/mintForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vmodel',
      component: vmodel
    },
    {
      path: '/mintform',
      name: 'mintform',
      component: mintForm
    }
  ]
})
