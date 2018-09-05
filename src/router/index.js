import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '@/components/myMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/myheader',
      name: 'MyHeader',
      component: MyMain
    }
  ]
})
