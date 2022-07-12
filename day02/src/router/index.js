import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
// import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }

  // {
  //   path: '/404',
  //   component: () => import('@/views/404'),
  //   hidden: true
  // },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: '首页', icon: 'dashboard' }
  //   }]
  // },

  // {
  //   path: '/data',
  //   component: Layout,
  //   redirect: '/data/book',
  //   name: 'Data',
  //   meta: { title: '商品管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'book',
  //       name: 'Book',
  //       component: () => import('@/views/product/index'),
  //       meta: { title: '商品列表', icon: 'table' }
  //     },
  //     {
  //       path: 'search',
  //       name: 'Search',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '多条件搜索', icon: 'tree' }
  //     },
  //     {
  //       path: 'addProduct',
  //       name: 'AddProduct',
  //       component: () => import('@/views/addProduct/index'),
  //       meta: { title: '添加商品', icon: 'tree' }
  //     }
  //   ]
  // },
  // // 用户管理
  // {
  //   path: '/user',
  //   component: Layout,
  //   redirect: '/user/userList',
  //   name: 'User',
  //   meta: { title: '用户管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'userList',
  //       name: 'UserList',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '用户列表', icon: 'table' }
  //     },
  //     {
  //       path: 'visitorList',
  //       name: 'VisitorList',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '访问者列表', icon: 'tree' }
  //     },
  //     {
  //       path: 'addUser',
  //       name: 'AddUser',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '添加用户', icon: 'tree' }
  //     }
  //   ]
  // },
  // // 订单管理
  // {
  //   path: '/order',
  //   component: Layout,
  //   redirect: '/order/userList',
  //   name: 'Order',
  //   meta: { title: '订单管理', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'orderList',
  //       name: 'OrderList',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '订单列表', icon: 'table' }
  //     },
  //     {
  //       path: 'visitorList',
  //       name: 'VisitorList',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '订单客户列表', icon: 'tree' }
  //     },
  //     {
  //       path: 'addOrder',
  //       name: 'AddOrder',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '添加订单', icon: 'tree' }
  //     }
  //   ]
  // },

  // // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
