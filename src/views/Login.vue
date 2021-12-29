<template>
  <b-container class="login text-center" fluid>
    <b-row class="mb-3">
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
        <b-form @submit.stop.prevent="login">
          <b-form-group label="Email">
            <b-form-input v-model="email" />
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input v-model="password" type="password" />
          </b-form-group>
          <b-btn type="submit">Submit</b-btn>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      const { email, password } = this;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
