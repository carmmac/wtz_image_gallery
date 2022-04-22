import Vue from 'vue';
import VueRouter from 'vue-router';
import { AppRoutes } from '@/const';
import MainView from '../views/MainView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: AppRoutes.HOME.path,
    name: AppRoutes.HOME.name,
    component: MainView,
  },
  {
    path: AppRoutes.USER_PAGE.path,
    name: AppRoutes.USER_PAGE.name,
    component: () => import('../views/UserView.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
