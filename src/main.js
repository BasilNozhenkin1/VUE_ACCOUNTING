import Vue from "vue";
import Vuelidate from "vuelidate";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/Loader";

import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

firebase.initializeApp({
	apiKey: process.env.VUE_APP_FIREBASE,
	authDomain: "tidal-mote-255505.firebaseapp.com",
	databaseURL: "https://tidal-mote-255505-default-rtdb.firebaseio.com",
	projectId: "tidal-mote-255505",
	storageBucket: "tidal-mote-255505.appspot.com",
	messagingSenderId: "1061735442479",
	appId: "1:1061735442479:web:8ecd6c3f9944e17e913eda",
	measurementId: "G-JCT2YPLBBR"
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
