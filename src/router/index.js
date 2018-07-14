import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cascade_picker from '@/pages/Cascade_picker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{
        name:'Cascade_picker'
      }
    },
    {
      path: '/',
      name: 'Cascade_picker',
      component: Cascade_picker
    }
  ]
})
