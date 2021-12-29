<template>
  <div id="app">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item v-if="user" :to="{ name: 'Dashboard' }"
          >Dashboard</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!user" :to="{ name: 'Login' }">Login</b-nav-item>
        <b-nav-item v-if="!user" :to="{ name: 'Register' }"
          >Register</b-nav-item
        >
        <b-nav-item v-if="user" :to="{ name: 'Settings' }">Settings</b-nav-item>
        <b-nav-item v-if="user" @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout() {
      const auth = getAuth();

      auth.signOut().then(() => {
        auth.onAuthStateChanged(() => {
          // this.$router.push("/login");
        });
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
