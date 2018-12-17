import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import YDUI from "vue-ydui";
import "vue-ydui/dist/ydui.rem.css";
import "amfe-flexible/index.js";
import { Icon,Search } from "vant";

Vue.use(Search);
Vue.use(YDUI);
Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
