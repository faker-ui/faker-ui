<template>
  <b-container class="compounds" fluid>
    <b-row>
      <b-col cols="12" sm="6">
        <h1>Compounds</h1>
      </b-col>
      <b-col cols="12" sm="6" class="text-right">
        <b-btn variant="primary" @click="addCompound">Add Compound</b-btn>
        <b-btn variant="primary" @click="writeRecord">Write Record</b-btn>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <h1>This is the compounds page</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <compounds-table :items="items" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  // AuthErrorCodes,
  getAuth,
  // signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, 
set, 
push
} from "firebase/database";
import CompoundsTable from "@/components/CompoundsTable.vue";
import { database } from "../plugins/firebase";
export default {
  components: { CompoundsTable },
  name: "Compounds",
  data() {
    return {
      auth: null,
      items: [],
    };
  },
  mounted() {
    this.initAuth();
    this.getRecords();
  },
  methods: {
    addCompound() {
      alert("Adding Compound");
    },
    getRecords() {},
    initAuth() {
      this.auth = getAuth();
    },
    writeRecord() {
      // console.log(ref(database, "compounds/" + this.auth.currentUser.uid))
      // const newReference = database.ref().push();
      const newRef = push(ref(database, "/compounds/" + this.auth.currentUser.uid), null)
      console.log(newRef)
      // // console.log(this.auth.currentUser.uid)
      set(newRef, {key: newRef.key});
    },
  },
};
</script>
