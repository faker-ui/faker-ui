<template>
  <b-container class="login text-center" fluid>
    <b-row v-if="!busy" class="mb-3">
      <b-col
        cols="12"
        sm="10"
        offset-sm="1"
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
        xl="4"
        offset-xl="4"
      >
        <h1>Login</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        sm="10"
        offset-sm="1"
        md="8"
        offset-md="2"
        lg="6"
        offset-lg="3"
        xl="4"
        offset-xl="4"
      >
        <b-form v-if="!busy" @submit.stop.prevent="login">
          <b-form-group label="Email">
            <b-form-input v-model="email" />
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input v-model="password" type="password" />
          </b-form-group>
          <b-btn type="submit" :disabled="busy">Submit</b-btn>
        </b-form>
        <loading v-else message="Logging in" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  components: { Loading: () => import('@/components/Loading.vue') },
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    busy: {
      get() {
        return this.$store.state.busy;
      },
      set(busy) {
        this.$store.commit("setBusy", busy);
      },
    },
  },
  methods: {
    login() {
      this.busy = true;
      const { email, password } = this;

      if (!email || !password) {
        this.$bvToast.toast(
          `Both email & password are required to login to this app`,
          {
            title: "Missing Email/Password",
            autoHideDelay: 5000,
            appendToast: true,
          }
        );

        this.busy = false;
        return;
      }

      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.busy = false;
          this.$router.push("/");
        })
        .catch((error) => {
          let message = "An unknown authentication error has occurred";

          if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
            message =
              "You've entered an incorrect password, please check and try again";
          } else if (error.code === AuthErrorCodes.USER_DELETED) {
            message =
              "A user with that email address could not be found, please check and try again";
          } else if (error.code === AuthErrorCodes.USER_DISABLED) {
            message =
              "This account is disabled, please contact support for further assistance";
          }

          this.$bvToast.toast(message, {
            title: "Authentication Error",
            autoHideDelay: 5000,
            appendToast: true,
          });

          this.busy = false;
        });
    },
  },
};
</script>
