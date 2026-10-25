import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicesView from '../views/ServicesView.vue';
import ProcessView from '../views/ProcessView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'الرئيسية | مؤسسة سهم القمة' },
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: { title: 'خدماتنا | مؤسسة سهم القمة' },
  },
  {
    path: '/process',
    name: 'process',
    component: ProcessView,
    meta: { title: 'آلية العمل | مؤسسة سهم القمة' },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'من نحن | مؤسسة سهم القمة' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'تواصل معنا | مؤسسة سهم القمة' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 100 };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
