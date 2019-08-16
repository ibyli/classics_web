import Vue from 'vue';
import {
  Button, Row, Col, Image, Popover, Tooltip, Link, Backtop, Icon,
} from 'element-ui';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/reset.css';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Tooltip);
Vue.use(Popover);
Vue.use(Link);
Vue.use(Backtop);
Vue.use(Icon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
