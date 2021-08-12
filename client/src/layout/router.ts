import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/routes/Home.vue')
  },
  {
    path: '/login',
    component: () => import('@/routes/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/routes/Register.vue')
  },
  {
    path: '/info',
    component: () => import('@/routes/Information.vue')
  },
  {
    path: '/settings',
    component: () => import('@/routes/Settings.vue')
  }
];

const history = createWebHistory();

const router = createRouter({
  routes,
  history
});

export default router;
