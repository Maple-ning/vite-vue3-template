import { type RouteRecordRaw } from "vue-router"

const routes:RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/pages/login.vue"), //路由懒加载
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        component: () => import("@/pages/home/index.vue"),
        name: "Home",
        meta: {
          title: "首页"
        }
      },
      {
        path: "about",
        component: () => import("@/pages/about/index.vue"),
        name: "About",
        meta: {
          title: "关于"
        }
      },
      {
        path: "contacts",
        component: () => import("@/pages/contacts/index.vue"),
        name: "Contacts",
        meta: {
          title: "联系"
        }
      },
      {
        path: "support",
        component: () => import("@/pages/support/index.vue"),
        name: "Support",
        meta: {
          title: "支持"
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/notFound.vue"),
  },
];

export default routes;
