import Vue from 'vue'
import Router from 'vue-router'
import vmodel from '@/components/vmodel'
import mintForm from '@/components/mintForm'
import scheckbox from '@/components/scheckbox'
import customInput from '@/components/customInput'

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
    },
    {
      path: '/scheckbox',
      name: 'mintform',
      component: scheckbox
    },
    {
      path: '/custominput',
      name: 'customInput',
      component: customInput
    }
  ]
})
