import { getToken } from "@/utils/cache/cookies";
import isWhiteList from "@/config/white-list";
import { useTitle } from "@/hooks/useTitle";
import router from "@/router"


const { setTitle } = useTitle()

// 路由前置守卫：登录校验
router.beforeEach((to, _from, next) => {
  const token = getToken()

  if(!token) {
    if(isWhiteList(to)) return next()
    return next('/login')
  }
  if (to.path === '/login') {
    return next({ path:'/' })
  }

  return next()
});

// 路由后置守卫
router.afterEach((to) => {
  setTitle(to.meta.title)
})

