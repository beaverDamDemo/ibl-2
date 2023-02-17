// import Vue from "vue";
// import App from "./App";
// import router from "./router";
// import Vuex from "vuex";
// import VueWait from "vue-wait";
// import axios from "axios";
// import VueAxios from "vue-axios";
// import vueMoment from "vue-moment";
// import VueNumeric from "vue-numeric";
// import Notifications from "vue-notification";
// import InfiniteLoading from "vue-infinite-loading";
// import Vuebar from "vuebar";
// import vuescroll from "vuescroll";
// import "vuescroll/dist/vuescroll.css";
// import store from "./store";
// import { ClientTable } from "vue-tables-2";
// import "./require.js";
// import interceptorsSetup from "./interceptors/interceptors.js";
// import Multiselect from "vue-multiselect";
import iView from "iview";
import locale from "iview/dist/locale/it-IT";
// import Card from "./components/custom/cardfooter.vue";
// import ElTable from "./components/custom/tablescrollbar.vue";
// import VueMq from "vue-mq";
// import CKEditor from "@ckeditor/ckeditor5-vue";
// import VueTheMask from "vue-the-mask";
// import * as ModalDialogs from "vue-modal-dialogs";

// require("./registerAsides");
// Vue.use(ModalDialogs); // No options
// Vue.use(VueTheMask);
// Vue.use(VueMq, {
//   breakpoints: {
//     xs: 768,
//     sm: 992,
//     md: 1200,
//     lg: 1920,
//     xl: Infinity,
//   },
// });

// require("./settings/validator.js");
// require("./bootstrapThings.js");
// require("./elementThings.js");
// require("./vuetifyThings.js");
// require("./fontAwesomeThings.js"); // da togliere appena convertite le icone
// require("./mixins/mixins.js");
// require("./styles/_custom.scss");

// Vue.use(CKEditor);
// Vue.use(Vuebar);
Vue.use(iView, {
  locale,
});
// Vue.use(
//   ClientTable,
//   {
//     filterable: false,
//     pagination: {
//       dropdown: false,
//     },
//     perPage: 15,
//     perPageValues: [],
//   },
//   false,
//   "bootstrap4",
//   "default"
// );

// interceptorsSetup();
// Vue.use(Vuex);
// Vue.use(VueWait);
// Vue.use(vueMoment);
// Vue.use(VueNumeric);
// Vue.use(Notifications);
// Vue.use(vuescroll, {
//   ops: {
//     vuescroll: {
//       detectResize: false,
//     },
//     rail: {
//       specifyBorderRadius: "0px",
//       gutterOfSide: "5px",
//       keepShow: true,
//     },
//     bar: {
//       background: "rgba(121, 121, 121, 0.6)",
//       onlyShowBarOnScroll: false,
//       specifyBorderRadius: "0px",
//     },
//   },
// });

// Vue.use(VueAxios, axios);
// axios.defaults.baseURL =
//   process.env.NODE_ENV === "production"
//     ? window.location.origin
//     : process.env.BASE_URL;

// Vue.component("multiselect", Multiselect);
// Vue.component("infinite-loading", InfiniteLoading);
// Vue.component("el-card-footer", Card);
// Vue.component("el-table-scrollbar", ElTable);
// Vue.config.productionTip = false;

// const token = localStorage.getItem("user-token");
// if (token) {
//   axios.defaults.headers.common["Authorization"] = token;
// }

// require("./bus/eventBus.js");
// require("./filters/datetimeFilters");
// Vue.config.devtools = process.env.VUE_APP_DEVTOOLS_ENABLED;

// import clickOutside from "./directives/clickOutside.js";
// Vue.directive("click-outside", clickOutside);

// new Vue({
//   el: "#app",
//   router,
//   store,
//   wait: new VueWait({
//     useVuex: true,
//   }),
//   components: {
//     App,
//   },
//   template: "<App/>",
// });

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
