import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes,
});

// 路由守卫：登录校验
router.beforeEach((to, from) => {
  if (to.path === '/login') {
    // 回到登录页，清空登录认证
    localStorage.removeItem('token')
  }
  if (!localStorage.getItem('token') && to.path !== '/login') {
    return '/login';
  }
});


export default router;
