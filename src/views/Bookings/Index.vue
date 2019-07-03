<template>
  <div class="bookings-index">
    <h1>{{ message }}</h1>

    <div v-for="booking in bookings">
      <h2>Booking ID: {{ booking.id }}</h2>
    <router-link v-bind:to="'/parents/' + booking.parent.id">
      <p>Parent Name: {{ booking.parent.first_name + ' ' + booking.parent.last_name }}</p>
    </router-link>
      <p>Booking Hours: {{ booking.hours }}</p>
      <p>Start Time: {{ booking.start_time }} </p>
      <p>Price: {{ booking.price + '$' }}</p>
    <router-link class="item-grid" v-bind:to="'/nannies/' + booking.nanny.id">
      <p>Nanny: {{ booking.nanny.first_name + ' ' + booking.nanny.last_name }}</p>
      <div class="image"><img v-bind:src="booking.nanny.image_url" alt=""></div>
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
      message: "Your Bookings",
      // nannies: [],
      bookings: []
    };
  },
  created: function() {
    axios.get("/api/bookings").then(response => {
      this.bookings = response.data;
      console.log(this.bookings);
    });
  },
  methods: {}
};
</script>
