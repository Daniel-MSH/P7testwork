import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


//懒加载 yarn add vue-lazyload -S
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//axios
import axios from "axios";
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')