<template>
  <b-navbar v-if="user">
    <b-navbar-brand>Faker UI</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'Dashboard' }">Dashboard</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item :to="{ name: 'Settings' }">Settings</b-nav-item>
      <b-nav-item @click="logout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  <b-navbar v-else>
    <b-navbar-brand>Faker UI</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-item :to="{ name: 'Login' }">Login</b-nav-item>
      <b-nav-item :to="{ name: 'Register' }">Register</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { getAuth } from "firebase/auth";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      const auth = getAuth();

      auth.signOut().then(() => {
        this.$router.push("/login");
      });
    },
  },
}
</script>