<template>
  <b-container class="register text-center" fluid>
    <b-row class="mb-3">
      <b-col cols="12" sm="10" offset-sm="1" md="8" offset-md="2" lg="6" offset-lg="3" xl="4" offset-xl="4">
        <h1>Register</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="10" offset-sm="1" md="8" offset-md="2" lg="6" offset-lg="3" xl="4" offset-xl="4">
        <b-form @submit.stop.prevent="register">
          <b-form-group label="Email">
            <b-form-input v-model="email" />
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input v-model="password" type="password" />
          </b-form-group>
          <b-btn type="submit" :disabled="busy">Submit</b-btn>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
  name: "Register",
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
        this.$store.commit("setBusy", busy)
      }
    }
  },
  methods: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log("User: %o", user);

          alert("Successfully registered! Please login.");

          this.$router.push("/");
          // ...
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
