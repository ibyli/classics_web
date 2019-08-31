import Vue from 'vue';
import Router from 'vue-router';
import Native from '@/views/Native/Native.vue';
import Home from '@/views/Home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Native',
      component: Native,
    },
    {
      path: '/native',
      name: 'Native',
      component: Native,
    },
  ],
});
