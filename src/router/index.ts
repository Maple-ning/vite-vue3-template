import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes,
});

router.beforeEach((to, from) => {
  if (to.path === '/login') {
    //在登录页做清除操作，如清除token等
  }

  if (!localStorage.getItem('token') && to.path !== '/login') {
    // 未登陆且访问的不是登录页，重定向到登录页面
    return '/login';
  }
});


export default router;
