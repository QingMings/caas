import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/less/app.less';
import ipcService from './ipcService';

Vue.config.productionTip = false;
Vue.use(ipcService);
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    // Prevent blank screen in Electron builds
    this.$router.push('/');
  }
}).$mount('#app');
