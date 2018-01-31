import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const A = () => import('components/A')
const B = () => import('components/B')
const C = () => import('components/C')
const D = () => import('components/D')
const DTab1 = () => import('components/Dtab1')
const DTab2 = () => import('components/Dtab2')
const E = () => import('components/E')
const F = () => import('components/F')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/A_01'
    },
    {
      path: '/A_01',
      component: A
    },
    {
      path: '/B_02',
      component: B
    },
    {
      path: '/C_03',
      component: C
    },
    {
      path: '/D_04',
      component: D,
      children: [
        {
          path: '/',
          redirect: '/Dtab1_04'
        },
        {
          path: '/Dtab1_04',
          component: DTab1
        },
        {
          path: '/Dtab2_04',
          component: DTab2
        }
      ]
    },
    {
      path: '/E_05',
      component: E
    },
    {
      path: '/F_06',
      component: F
    }
  ]
})

router.beforeEach((to, from, next) => {
  const toDepth = to.path.substring(to.path.length - 2, to.path.length)
  const fromDepth = from.path.substring(from.path.length - 2, from.path.length)
  if (from.path !== '/' && toDepth < fromDepth) {
    // 有tab界面时需要添加此判断 from的KeepAlive不需要置为false
    if (from.path === '/Dtab1_04' || from.path === '/Dtab2_04') {
      to.meta.noKeepAlive = false
      next()
      return
    }
    from.meta.noKeepAlive = true
    to.meta.noKeepAlive = false
  }
  next()
})

export default router
