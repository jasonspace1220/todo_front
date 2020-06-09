import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
//Axios
import axios from "axios";
import VueAxios from "vue-axios";

Vue.router = router;
Vue.use(VueAxios, axios);
// axios.defaults.baseURL = process.env.AXIOS_BASE_URL;
axios.defaults.baseURL = "http://jasondemo.cf/TodoSpa/public/api";
axios.withCredentials = true;
//登入相關

Vue.use(require("@websanova/vue-auth"), {
  auth: require("@websanova/vue-auth/drivers/auth/bearer.js"),
  http: require("@websanova/vue-auth/drivers/http/axios.1.x.js"),
  router: require("@websanova/vue-auth/drivers/router/vue-router.2.x.js")
});
//Vuetify
import vuetify from "@/plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
