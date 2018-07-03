// 引用模板
import Vue from 'vue'
import Router from 'vue-router'
// import index from ''
Vue.use(Router)

const homePage = () => import('../views/home.vue')
// const index = () => import('../views/index.vue')

const record = () => import('../views/record/list.vue')

const activeAdd = () => import('../views/activeManage/add.vue')
const activeList = () => import('../views/activeManage/list.vue')






const router = new Router({
  routes: [
    {
      path: '/',
      component: homePage,
      redirect: '/activeList',
      children: [
        {
          path: '/record',
          name: '/record',
          meta: {
            pname: '模块二',
            cname: '列表'
          },
          component: record
        },
        {
          path: '/activeAdd',
          name: '/activeAdd',
          meta: {
            pname: '模块一',
            cname: '目录一'
          },
          component: activeAdd
        },
        {
          path: '/activeList',
          name: '/activeList',
          meta: {
            pname: '模块一',
            cname: '目录二'
          },
          component: activeList
        },
      ]
    }
  ]
})

export default router
