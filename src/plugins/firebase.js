import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCeGL5aLhVGgPVhStkPcxESr1FNtBokogI",
  authDomain: "faker-ui.firebaseapp.com",
  projectId: "faker-ui",
  databaseURL: "https://faker-ui-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "faker-ui.appspot.com",
  messagingSenderId: "311647644697",
  appId: "1:311647644697:web:098f95f5d233496cdcce88",
  measurementId: "G-TEQFB5RHJS"
};


export const app = initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6Les0ewdAAAAAL5zU0klU1vIPm0LwxLL_PiSA5dy'),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});

export const analytics = getAnalytics(app);

export const database = getDatabase(app);