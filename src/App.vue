<template>
  <div id="app">
    <navbar v-if="ready" />
    <router-view v-if="ready" />
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";

export default {
  components: { Navbar: () => import("@/components/Navbar.vue") },
  computed: {
    busy: {
      get() {
        return this.$store.state.busy;
      },
      set(busy) {
        this.$store.commit("setBusy", busy);
      },
    },
    ready: {
      get() {
        return this.$store.state.ready;
      },
      set(ready) {
        this.$store.commit("setReady", ready);
      },
    },
    user: {
      get() {
        return this.$store.state.user;
      },
      set(user) {
        this.$store.commit("setUser", user);
      },
    },
  },
  created() {
    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }

      this.$nextTick(() => {
        this.ready = true;
      });
    });

  }
};
</script>
