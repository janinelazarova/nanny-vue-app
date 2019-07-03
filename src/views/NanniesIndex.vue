<template>
  <div class="nannies-index">
    <h1>{{ message }}</h1>

    <div v-for="nanny in nannies">
    <router-link class="item-grid" v-bind:to="'/nannies/' + nanny.id">
      <h2>First Name: {{ nanny.first_name }}</h2>
      <h2>Last Name: {{ nanny.last_name }} </h2>
      <div class="image"><img v-bind:src="nanny.image_url" alt=""></div>
      <p>Ages: {{ nanny.ages }}</p>
      <p>Specialization: {{ nanny.specialization }}</p>
      <p>Bio: {{ nanny.bio }}</p>
    </router-link>
  </div>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Nannies App",
      nannies: []
    };
  },
  created: function() {
    axios.get("/api/nannies").then(response => {
      this.nannies = response.data;
      console.log(this.nannies);
    });
  },
  methods: {}
};
</script>
