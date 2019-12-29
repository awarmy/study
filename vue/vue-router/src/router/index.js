import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainBoard from "../views/main"


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/main"
    //props: true,
    //meta: { title: '维修工列表', keyword: 'success-list', description: '维修工列表' },
  },
  {
    path: '/main',
    name: "main",
    component: MainBoard,
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})
//全局守卫  局部守卫
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    //判断是否登录
    // let logined = false;
    if (window.logined) {
      next(true);
    }
    else {
      next('/login?redirect=' + to.path);
    }
  }
  else {
    next(true);
  }

})

export default router
