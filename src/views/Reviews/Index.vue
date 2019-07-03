<template>
  <div class="reviews-index">
    <h1>{{ message }}</h1>

    <div v-for="review in reviews">
    <router-link class="item-grid" v-bind:to="'/reviews/' + review.id">
      <h2>Parent ID: {{ review.parent.id }}</h2>
      <h2>Nanny ID: {{ review.nanny.id }} </h2>
      <div class="image"><img v-bind:src="review.nanny.image_url" alt=""></div>
      <p>Stars: {{ review.stars }}</p>
      <p>Review: {{ review.comment }}</p>
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
      message: "Reviews",
      reviews: []
    };
  },
  created: function() {
    axios.get("/api/reviews").then(response => {
      this.reviews = response.data;
      console.log(this.reviews);
    });
  },
  methods: {}
};
</script>
