import Vue from "vue";
import Vuelidate from "vuelidate";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";

import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyCpb86M5kFNX7cfjwrityUm3Kto1ubiIy0",
  authDomain: "vue-practice-416e1.firebaseapp.com",
  projectId: "vue-practice-416e1",
  storageBucket: "vue-practice-416e1.appspot.com",
  messagingSenderId: "689065642528",
  appId: "1:689065642528:web:fd87a356de421a4ed70a45",
  measurementId: "G-3RFB927Q4M"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      Vuelidate,
      render: h => h(App)
    }).$mount("#app");
  }
});

