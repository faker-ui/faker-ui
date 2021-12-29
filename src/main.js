import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCeGL5aLhVGgPVhStkPcxESr1FNtBokogI",
  authDomain: "faker-ui.firebaseapp.com",
  projectId: "faker-ui",
  storageBucket: "faker-ui.appspot.com",
  messagingSenderId: "311647644697",
  appId: "1:311647644697:web:098f95f5d233496cdcce88",
  measurementId: "G-TEQFB5RHJS"
};


initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
